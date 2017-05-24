var jwt = require('jwt-simple');
var http = require('http');
var PropertiesReader = require('properties-reader');
var ldap = require('ldapjs');

// sign with default (HMAC SHA256) 
var jwt = require('jsonwebtoken');

var properties = PropertiesReader('properties/endpoint.properties');

exports.validate = function(req, res, next) {
	var key = req.headers['token'] ;
	if (key) {
		try	{
			var decoded = jwt.verify(key, 'secret');
			return next(); // To move to next middleware.
		}
		catch(err) {
			res.status(403);
			res.json({
				"status" : 403,
				"message" : "Token is invalid"
			});
			return;
		}
		//return next(); // To move to next middleware.
	}
	else {
		res.status(403);
		res.json({
			"status": 403,
			"message": "Not Authorized"
		});
		return;
	}
}

exports.authenticate = function(req, res) {
	console.log(req.body);
	var username = req.body.username;
	var password = req.body.password;
	var ldapres = null;
	var result = null;
	var client = ldap.createClient({
		// Third party ldap with free access and given credentials only.
		url: 'ldap://ldap.forumsys.com:389'
	});

	var opts = {
		filter: '(uid='+ username +')',
		scope: 'sub'
	}

	client.search('dc=example,dc=com', opts, function (err, result) {
		result.on('searchEntry', function (entry) {
			ldapres = entry.raw
		})

		result.on('end', function (result) {
			if (!ldapres) { 
				result = "{\"status\":\"401\",\"message\":\"Invalid Username\"}";
				res.status(401);
				return res.send(result)
		}

			client.bind(ldapres.dn, password, function (err) {
				if (err) {
					result = "{\"status\":\"401\",\"message\":\"Invalid Password\"}";
					res.status(401);
					return res.send(result)
			}

				var token = jwt.sign(
					{data: username},
					'secret',
					{ expiresIn: '24h' }
				);

				result = "{\"status\":\"200\",\"message\":\"Login Successfull\",\"token\":\"" + token + "\"}";
				res.status(200);
				res.send(result)
			})
		})
	})
}

exports.login = function(req, res) {
	var username = req.body.username || '';
	var password = req.body.password || '';
	if (username == '' || password == '') {
		res.status(401);
		res.json({
			"status": 401,
			"message": "Invalid credentials. Username and/or Password cannot be empty"
		});
		return;
	}

	// Fire a query to OpenAM and check if the credentials are valid.
	var endpoint = properties.get('open-am.security.authenticate.endpoint');
	var hostInfo = properties.get('olp-adapter-service-access.api.proxy.ip');
	var portInfo = properties.get('olp-adapter-service-access.api.proxy.port');
	endpoint = endpoint.concat("?username=").concat(username).concat("&password=").concat(password);
	// An object of options to indicate where to post to.
	var post_options = {
		host: hostInfo,
		port: portInfo,
		path: endpoint,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	}

	var request = http.request(post_options, function(response)	{
		var body = "";
		response.on('data', function(data) {
			body += data ;
		});
	
		response.on('end', function() {
			console.log(body);
			var args2 = body.substring(0,body.indexOf("="));
			var args1  = body.substring(body.indexOf("=")+1, body.length-1);
			if(args2 == "token.id")	{
				var result = "{\"token\" : \" "  + args1 + "\" }" ;
			}
			else {
				var result = "{\"message\":\"Invalid credentials\"}";
			}
			res.send(JSON.parse(result));
		});
	});

	request.on('error', function(e) {
		console.log('Problem with request: ' + e.message);
		res.status(401);
		res.json({
			"status": 401,
			"message": "Invalid credentials"
		});
	});
	
	request.end();
}





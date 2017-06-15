var http = require('http');
var PropertiesReader = require('properties-reader');
var fs = require('fs');  
var path = require('path');

var stubresponsePath = path.join(__dirname, 'responsedata.json');

var properties = PropertiesReader('stub/stubendpoint.properties');
var hostInfo = properties.get('olp-adapter-service-access.api.proxy.ip');
var portInfo = properties.get('olp-adapter-service-access.api.proxy.port');
var vendors = properties.get('olp-adapter-service-access.api.search.vendors');

exports.apiReport = function(req, res){
   var fileLoc = path.resolve(stubresponsePath);
        var stream = fs.createReadStream(fileLoc);
        stream.on('error', function(error) {
            console.log('Inside error');
            res.writeHead(404, 'Not Found');
            res.end();
        });

        stream.pipe(res);
};
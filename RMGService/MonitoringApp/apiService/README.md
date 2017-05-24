# NODE  Monitoring API

This is a NodeJS full API that you can use to fetch elsatic search query result data with your SPAs or Mobile apps.

## How to use it on your local machine.
first do a git clone : https://stash.capgeminidigital.com/projects/RMG/repos/api-monitoring-app/browse/apimonitoring.git
navigate to root folder `apiService` and run command `npm install`. This will install all required packages added in package.json.
after successful installation of all packages execute command `npm start`.
you will see a console message  `Server running on port 8080`.

### User based API

You can use this API to fetch result of elastic search. For that, you need to use Authentication to get the `token` (JWT) and send it in every request as part of the `Authorization` header.

This server validates JWT from the following account:

* **Domain**: `ldap://ldap.forumsys.com:389`




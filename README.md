# Google Sign-in Demo
A demo of how to integrate Google Sign-In into your web app.  

Reference: https://developers.google.com/identity/sign-in/web/sign-in  

## Run this demo
Run on localhost:5500. 

## Steps to use Google sign-in
1. Create credentials.  
   1. Create Google Cloud Project.
      Google project: https://console.cloud.google.com/apis/dashboard
   2. in Credentials, create new OAuth consent.  
      Necessary OAuth consent scope: user.profile  
      About OAuth 2.0: https://developers.google.com/identity/protocols/oauth2/  
      new user limit: 10000 a day  
      Scope: 
      * internal: only allow users in the same organization. No need verification. In our case, only ucsd.edu emails are able to sign in. 
      * external: everyone can sign in. Need verification. 
   3. Get new OAuth Client ID.  
      Authorized javascript origins: http://localhost:5000  
      Authorized redirect URIs: https://tolocalhost.com   
2. Load the Google Platform Library in HTML.
3. Specify client ID in HTML.
4. Add the button in HTML.  
   Custom style: https://developers.google.com/identity/sign-in/web/build-button
5. Add the js function for sign in. Now the user should be able to log in, and his/her info will be passed to js. 
6. Add the sign-out button and corresponding function in js. Now the user should be able to log out.   
    In this example, the sign-out button is just an `<a>` tag and could be changed to anything else. 

## Debugging
### 400 Invalid request
```
GET：400
Invalid request:
permission denied to generate login hint for target domain
```
https://stackoverflow.com/questions/32041418/google-sign-in-website-error-permission-denied-to-generate-login-hint-for-targ  

Possible Solutions: 
* Wait ~5 minutes for the client ID change to take effect.  
* Run demo on localhost instead of 127.0.0.1 or 0.0.0.0. 
* Tweak client ID between tolocalhost, localhost and 127.0.0.1 until it works. 
* Someone says on StackOverflow that the OAuth callback redirect doesn't allow localhost. But when I tried, it allows localhost.  
  One solution to bypass this is to use callback URLs. Useful website: https://tolocalhost.com/  
  For this demo: redirect to port 5500 and hostname localhost, so https://tolocalhost.com redirects to http://localhost:5000. Fill this in OAuth Client ID redirect. 

 
### Uncaught error: Not a valid origin for the client
```
"Not a valid origin for the client: http://localhost:5500 has not been registered for client ID 305754570917-dpcmd6qktl077p81ajjtub6v3n08gl59.apps.googleusercontent.com. Please go to https://console.developers.google.com/ and register this origin for your project's client ID."
```
https://stackoverflow.com/questions/42668299/google-auth-api-javascript-idpiframe-initialization-error-on-chrome

https://stackoverflow.com/questions/52529360/how-to-solve-idpiframe-initialization-failed-for-localhost

Possible solutions: 
* Check to make sure localhost:5500 is in authorized javascript origins. 
* Clear cache: in inspect mode, right click on reload button, choose `Empty cache and hard reload`. 
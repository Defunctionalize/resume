var hash = () => Object.fromEntries(window.location.hash.substr(1).split("&").map(x => x.split("=")))
var serialize = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
function test() {
    console.log = (...x) => alert(x);
    console.error = console.log;
    console.warn = console.log;
    console.log("hello");
    try {
	AWS.config.region = 'us-east-1';
	let id_token=hash().id_token;
    console.log('ID Token', id_token);
    AWS.config.credentials= new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-1:573e1ed2-cc7e-4315-8714-199a170ea0d3',
            Logins:{"cognito-idp.us-east-1.amazonaws.com/us-east-1_iaCr8Wzlt": id_token}
        });
    log_creds = () => {try {console.log(`{"access_key_id": "${AWS.config.credentials.accessKeyId}", "secret_access_key": "${AWS.config.credentials.secretAccessKey}", "session_token": "${AWS.config.credentials.sessionToken}"}`)} catch (e) {console.log(e)}}
    log_creds();
    let refresh = AWS.config.credentials.getPromise();
    refresh.then(() => console.log(serialize({"sessionId": AWS.config.credentials.accessKeyId,
                                              "sessionKey": AWS.config.credentials.secretAccessKey,
                                              "sessionToken": AWS.config.credentials.sessionToken}))
    })));
    refresh.catch(console.log);
    }
    catch (e) {
        console.log(e);
    }
    
}

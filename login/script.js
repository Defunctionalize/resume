var hash = () => Object.fromEntries(window.location.hash.substr(1).split("&").map(x => x.split("=")))

function test() {
    console.log = (...x) => alert(x);
    console.error = console.log;
    console.warn = console.log;
    try {
      AWS.config.region = 'us-east-1';
      let id_token=hash().id_token;
      AWS.config.credentials= new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:573e1ed2-cc7e-4315-8714-199a170ea0d3',
        Logins:{"cognito-idp.us-east-1.amazonaws.com/us-east-1_iaCr8Wzlt": id_token}});
      let refresh = AWS.config.credentials.getPromise();
      refresh.then(() => {
        let lambda = AWS.Lambda();
        lambda.invoke({
          FunctionName: "cloud9-FederationBroker-getSigninUrl-JPLP6TPQKNJX",
          Payload: {
            sessionId: AWS.config.credentials.accessKeyId,
            sessionKey: AWS.config.credentials.secretAccessKey,
            sessionToken: AWS.config.credentials.sessionToken
          }
        }, (err, data) => {
          window.response = {err: err, data: data}
        })
      })
    }
    catch (e) {
        console.log(e);
    }
}

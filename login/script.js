    function test() {
        console.log = (...x) => alert(x);
        console.error = console.log;
        console.warn = console.log;
        console.log("hello");
        try {
            AWS.config.region = 'us-east-1';
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: 'us-east-1:573e1ed2-cc7e-4315-8714-199a170ea0d3',
                Logins:{"cognito-idp.us-east-1.amazonaws.com/us-east-1_iaCr8Wzlt": (new URLSearchParams(window.location.search)).get("id_token")}
            });
            
            window.location.replace("https://us-east-1.console.aws.amazon.com/cloud9/ide/b14165cc44a14c1fa985e617d4573cf6");
                  
        }
        catch (e) {
            console.log(e);
        }
        
    }
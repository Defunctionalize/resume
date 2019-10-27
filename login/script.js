    function test() {
        console.log = (...x) => alert(x);
        console.error = console.log;
        console.warn = console.log;
        console.log("hello");
        try {
            AWS.config.region = 'us-east-1';
             AWS.config.credentials= new AWS.CognitoIdentityCredentials({
                IdentityPoolId: 'us-east-1:573e1ed2-cc7e-4315-8714-199a170ea0d3',
                Logins:{"cognito-idp.us-east-1.amazonaws.com/us-east-1_iaCr8Wzlt": (new URLSearchParams(window.location.search)).get("id_token")}
            });
	alert(AWS.config.credentials.accessKeyId);
            
            window.location.replace("https://us-east-1.console.aws.amazon.com/cloud9/ide/5f616193b5754e1b92efc204a4e48917");
                  
        }
        catch (e) {
            console.log(e);
        }
        
    }

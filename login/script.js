    function test() {
        console.log = (...x) => alert(x);
        console.error = console.log;
        console.warn = console.log;
        console.log("hello");
        try {
		AWS.config.region = 'us-east-1';
		console.log('about to try the awscognitoidentitycredentials call... ');
		let id_token=(new URLSearchParams(window.location.search)).get("id_token");
		console.log('ID Token: ', id_token);
		AWS.config.credentials= new AWS.CognitoIdentityCredentials({
                IdentityPoolId: 'us-east-1:573e1ed2-cc7e-4315-8714-199a170ea0d3',
                Logins:{"cognito-idp.us-east-1.amazonaws.com/us-east-1_iaCr8Wzlt": id_token}
            });
        let refresh = AWS.config.credentials.getPromise();
        refresh.then(() => console.log("creds? ---", AWS.console.credentials.accessKeyId));
        }
        catch (e) {
            console.log(e);
        }
        
    }

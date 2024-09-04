    //SECURITY RECOMMENDATION:Instead of sending the 'clientId' and  'clientSecret' from browser javascript, store it in server and use it during the jwt generation.
    //NOTE:clients has to define a API which should generate and return the JWT token. and do the necessary changes in the below function like change the url,type,Authorization and on success set the returned jwt.
    //fields to set in JWT:subject(emailId),issuer(clientId),algorithm(HS256 or RS256)
    

    function assertion(options, callback) {
        //client has to fill the claims and call the callback.
        var jsonData = {
            "clientId": botOptions.clientId,
            "clientSecret": botOptions.clientSecret,
            "identity": botOptions.userIdentity,
            "aud": "",
            "isAnonymous": false
        };
        $.ajax({
            url: botOptions.JWTUrl,
            type: 'post',
            data: jsonData,
            dataType: 'json',
            success: function (data) {
                options.assertion = data.jwt;
                callback(null, options);
            },
            error: function (err) {
                console.error("Error in JWT get: "+JSON.stringify(err))	
            }
        });
    }


var botOptions = {};
botOptions.koreAPIUrl = "https://bots.kore.ai/api/";
botOptions.koreSpeechAPIUrl = ""; // This option is deprecated
botOptions.ttsSocketUrl = ''; // This option is deprecated
botOptions.assertionFn = assertion;
botOptions.koreAnonymousFn = koreAnonymousFn;
botOptions.botInfo = {"name":"XYZ usecase", "_id" :"st-938cd739-71eb-5df4-a709-05d7913c9a01"};  //Capture Bot Name & Bot ID from Builder Tool app. Go to respective Bot and then navigate to Settings-->Config Settings-->General settings section. Bot Name is case sensitive.
botOptions.JWTUrl ="https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiYWdyYXdhbC52ZWRhbnRAdGNzLmNvbSIsImlzc3VlciI6ImNzLTZhNjljZmRlLTE5YTktNWNiMy05ZmEzLTA4MTI0ZDgxMjRhMSIsImlhdCI6MTUxNjIzOTAyMn0.qF5-l4pGHe2cErkjgb7aWRVsqYasSoOOh6UjV4gHGYQ";//above assertion function  picks url from here
botOptions.userIdentity = 'agrawal.vedant@tcs.com';// Provide users email id here
botOptions.clientId   = "cs-6a69cfde-19a9-5cb3-9fa3-08124d8124a1"; // issued by the kore.ai on client app registration.
botOptions.clientSecret="qzxggsIqvPL5fmPL5MbXJctF4lYkXcaE6/qOdJSw7RU=";// issued by the kore.ai on client app registration.

var chatConfig={
    botOptions:botOptions,
    isSendButton: false,
    isTTSEnabled: true,
    isSpeechEnabled: true,
    allowLocation : true
};
    // Assign Bot options to chatWindow config 
    // Assign Bot options to chatWindow config      
var chatConfig={
            botOptions:botOptions,
            isSendButton: false,
            isTTSEnabled: true,
            isSpeechEnabled: true,
            allowLocation : true
    };
var chatInstance = koreBotChat(); // get chat instance
    chatInstance.show(chatConfig); // open chat window
    chatInstance.destroy(); // for destroying chat window instance
    
    

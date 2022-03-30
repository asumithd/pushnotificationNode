var FCM = require('fcm-node');
var serverKey = 'AAAAh11mWi0:APA91bG-yUXHfBnOqOD8oU9ysntFdFMYysupgkK0olYzKiGnPIoEyE4FV3U7k0wd9g59FhkZWoTxLpOdkj4HoV2PKD12pihFDqO_8qxD4vEox2LjF5YVuY9hjOVtbqdMaF7qkfoBZSVD';
var fcm = new FCM(serverKey);

var message = {
    to: "dWWEOqCjRP6CkbSrv93phz:APA91bFFMWOEQpYXKMvaZ6NazHQbN1DhhwA52r4RI4XgoqC5r26ey8hpmAveGWT4QvI3A18afFCPiWcQXaTeGjeNacydreK4AkvO9F9wtRRS3AuDn3kAR5kp1oztUX97Q_XiclezAGfF",
    notification: {
        title: 'NotificationTestAPP',
        body: '{"Message from node js app"}',
        sound: "default",
        icon: "fcm_push_icon"
    },

    data: { //you can send only notification or only data(or include both)
        title: 'ok cds',
        body: '{"name" : "okg boggle goral","product_id" : "123","final_price" : "0.00035"}'
    },
    priority: 'high'
};

fcm.send(message, function (err, response) {
    if (err) {
        console.log("Something has gone wrong!" + err);
        console.log("Response:! " + response);
    } else {
        // showToast("Successfully sent with response");
        console.log("Successfully sent with response: ", response);
    }

});

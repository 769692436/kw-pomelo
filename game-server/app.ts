const pomelo = require('pomelo');

/*
* Init app for client
* */

const app = pomelo.createApp();
app.set('name', 'kw-pomelo');

exports.App = app;

app.configure('production|development', 'connector', () => {
   app.set('connectorConfig', {
       connector: pomelo.connector.hybridconnector,
       heartbeat: 3,
       useDict: true,
       useProtobuf: true,
   })
});

app.start();

process.on('uncaughtException', function (err) {
    console.error(' Caught exception: ' + err.stack);
});
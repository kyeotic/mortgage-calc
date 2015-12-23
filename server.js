var port = process.env.PORT || 9000,
    isProduction = process.env.NODE_ENV == 'production',
    clientDir = __dirname + (isProduction ? '/dist/' : '/src/'),
    assetDir = __dirname + '/assets',
    express = require('express'),
    app = express();

//Configure
app.use('/assets', express.static(assetDir));
app.use(express.static(clientDir));

//Api
//require('./server_dist/routes')(app);

//Index Route
app.get('/', function(req, res){
    res.sendFile(__dirname + (isProduction ? '/index-built.html' : '/index.html'));
});

//module.exports =  app;

//Start Listening
app.listen(port, process.env.IP || "0.0.0.0");
console.log('Express server listening on port %d in %s mode', port, app.settings.env);

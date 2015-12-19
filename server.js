var port = process.env.PORT || 9000,
    clientDir = __dirname + '/src/',
    assetDir = __dirname + '/assets',
    jspmConfigName = '/system.config.js',
    jspmConfig = __dirname + jspmConfigName,
    jspmDir = __dirname + '/jspm_packages/',
    express = require('express'),
    app = express();

//Configure
app.use('/jspm_packages', express.static(jspmDir));
app.use('/assets', express.static(assetDir));
app.use(express.static(clientDir));

app.get(jspmConfigName, function(req, res) {
	res.sendFile(jspmConfig);
});

//Api
//require('./server_dist/routes')(app);

//Index Route
app.get('/', function(req, res){
    res.sendFile(__dirname + (process.env.NODE_ENV == 'production' ? '/index-built.html' : '/index.html'));
});

module.exports =  app;

//Start Listening
//app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");
//console.log('Express server listening on port %d in %s mode', port, app.settings.env);

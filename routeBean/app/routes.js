module.exports = function (app) {
	var path = require("path"),
			dirName = __dirname.replace(path.basename(__dirname), "");
	
	app.get('*', function(req, res) {
		res.sendFile(dirName + '/public/index.html');
	});
	
	
}
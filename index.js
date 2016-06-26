var request = require("request")

module.exports = function(key) {
	this.endpoint = "http://localhost:3000/api/v1"

	this.log = function(flag, message, callback) {
		if (typeof callback != "function") callback = function(){}

		var error = false
		request({
			url: this.endpoint + "/msg",
			method: "GET",
			qs: {
				msg: message,
				flag: flag,
				key: key
			}
		}, function(error, response, body) {
			body = JSON.parse(body)
			if (response.statusCode == 200 && body.success){
				callback(false)
			} else {
				callback(body.msg)
			}
		})
	}

	this.info = function(message, callback) {
		this.log("info", message, callback)
	}

	this.warning = function(message, callback) {
		this.log("warning", message, callback)
	}

	this.success = function(message, callback) {
		this.log("success", message, callback)
	}

	this.fatal = function(message, callback) {
		this.log("fatal", message, callback)
	}

	return this
}

var apps = ["J7NJ5OL058"];
for (var i = 0; i < apps.length; i++){
	var logline = module.exports(apps[i])
	logline.fatal("this is a fatal message NUMBER2", function(error){
		if (error) console.log(error)
	})
	logline.warning("this is a warning message  NUMBER2", function(error){
		if (error) console.log(error)
	})
	logline.success("this is a success message  NUMBER2", function(error){
		if (error) console.log(error)
	})
	logline.info("this is a info message  NUMBER2", function(error){
		if (error) console.log(error)
	})
}
var request = require("request")

module.exports = function(key) {
	this.endpoint = "http://localhost:3000/api/v1"

	this.log = function(flag, message, callback) {
		if (typeof callback != "function") callback = function(){}

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
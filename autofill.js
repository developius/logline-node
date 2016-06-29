var logline = require("./index")("DF165TEZIC");

function loop(){
	setTimeout(fatal, 8 * Math.random() * 100000);
	setTimeout(warning, 6 * Math.random() * 50000);
	setTimeout(success, 4 * Math.random() * 2500);
	setTimeout(info, 2 * Math.random() * 1000);
	setTimeout(loop, Math.random() * 10000)
}

function fatal(){
	console.log("fatal");
	logline.fatal("This is fatal");
}

function info(){
	console.log("info");
	logline.info("This is info");
}

function success(){
	console.log("success");
	logline.success("This is success");
}

function warning(){
	console.log("warning");
	logline.warning("This is warning");
}

loop();

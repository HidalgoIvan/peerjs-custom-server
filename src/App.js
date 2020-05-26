import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	var cmd = require("node-cmd");

	cmd.get("peerjs --port 9000 --key peerjs --path /server", function (
		err,
		data,
		stderr
	) {
		console.log("result: ", data);
		console.log("err:", err);
		console.log("stderr:", stderr);
	});

	return <div className="App">Hi! You shouldn't be seeing this!</div>;
}

export default App;

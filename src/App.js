import React from "react";
import logo from "./logo.svg";
import "./App.css";

const { PeerServer } = require("peer");

const peerServer = PeerServer({ port: 9000, path: "/server" });
function App() {
	return <div className="App">Hi! You shouldn't be seeing this!</div>;
}

export default App;

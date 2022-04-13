import React, { useEffect, useState } from "react";
import "./messages.css";
import Home from "./home/home";
import Sidebar from "./sidebar/sidebar";
import Chat from "./chat/chat";
import { useParams } from "react-router-dom";

function Messages() {

	const {id}=useParams();
	
	return (
		<div className="app">
			<p className="app__mobile-message"> Only available on desktop 😊. </p>
				<div className="app-content">
					<Sidebar />
					{id!=0?<Chat />:<Home />}
				</div>
		</div>
	);
}

export default Messages;

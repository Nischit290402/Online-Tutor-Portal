import React, { useEffect, useState } from "react";
import Icon from "./../icons/icon";
import { Link } from "react-router-dom";
// import formatTime from "utils/formatTime";
import { useUsersContext } from "./../context/usersContext";
import { useSocketContext } from "../context/socketContext";
import axios from "axios";

const Sidecard = ({ sidecard }) => {
	const user=JSON.parse(localStorage.getItem('profile')).result.email;
    const formatTime = (timeString) => {
        let splitTimeString = timeString.split(":");
        return `${splitTimeString[0]}:${splitTimeString[1]}`;
    };

	const { setUserAsUnread } = useUsersContext();
	const getLastMessage = () => {
		const messageDates = Object.keys(sidecard.messages);
		const recentMessageDate = messageDates[messageDates.length - 1];
		const messages = [...sidecard.messages[recentMessageDate]];
		const lastMessage = messages.pop();
		return lastMessage;
	};

	// const lastMessage = getLastMessage(sidecard);

	const [roomData,getRoomData]=useState('');

	useEffect(()=>{
		const getAllRoomData=async()=>{
			await axios.get(`http://localhost:5000/room/${sidecard}`)
			.then((res)=>{
				getRoomData(res.data);
				// console.log(res);
			})
			.catch(error=>console.error(error));
		}
		getAllRoomData();
	},[])
	const socket=useSocketContext();
	const joinRoom=()=>{
		socket.emit("addUser",{user});
	}

	return (
		<Link
			className="sidebar-contact"
			to={`/messages/${sidecard}`}
			onClick={joinRoom}
		>
			<div className="sidebar-contact__avatar-wrapper">
				{/* <img
					src={sidecard}
					alt={sidecard}
					className="avatar"
                    width="37px"
                    height="37px"
				/> */}
			</div>
			<div className="sidebar-contact__content">
				<div className="sidebar-contact__top-content">
					<h2 className="sidebar-contact__name"> {roomData.name} </h2>
					{/* <span className="sidebar-contact__time">
						{formatTime(lastMessage.time)}
					</span> */}
				</div>
				<div className="sidebar-contact__bottom-content">
					<p className="sidebar-contact__message-wrapper">
						{/* {lastMessage.status && (
							<Icon
								id={
									lastMessage?.status === "sent" ? "singleTick" : "doubleTick"
								}
								aria-label={lastMessage?.status}
								className={`sidebar-contact__message-icon ${
									lastMessage?.status === "read"
										? "sidebar-contact__message-icon--blue"
										: ""
								}`}
							/>
						)} */}
						{/* <span
							className={`sidebar-contact__message ${
								!!sidecard.unread ? "sidebar-contact__message--unread" : ""
							}`}
						>
							{sidecard.typing ? <i> typing...</i> : lastMessage?.content}
						</span> */}
					</p>
					<div className="sidebar-contact__icons">
						{/* {sidecard.pinned && (
							<Icon id="pinned" className="sidebar-contact__icon" />
						)} */}
						{/* {!!sidecard.unread && (
							<span className="sidebar-contact__unread">{sidecard.unread}</span>
						)} */}
						{/* <button aria-label="sidebar-contact__btn">
							<Icon
								id="downArrow"
								className="sidebar-contact__icon sidebar-contact__icon--dropdown"
							/>
						</button> */}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Sidecard;

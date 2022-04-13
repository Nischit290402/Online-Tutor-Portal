import React, { useEffect, useRef, useState } from "react";
import "./chat.css";
// import EmojiTray from "./components/EmojiTray";
import ChatInput from "./chatinput";
import Header from "./header";
// import ChatSidebar from "./components/ChatSidebar";
import Icon from "./../icons/icon";
// import Search from "./components/Search";
// import Profile from "./components/Profile";
import Convo from "./conv";
import { useUsersContext } from "./../context/usersContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useSocketContext} from "./../context/socketContext";
const Chat = () => {
	const socket=useSocketContext();
	const { users, setUserAsUnread, addNewMessage } = useUsersContext();

	const userEmail=JSON.parse(localStorage.getItem('profile')).result.email;
	const [userId,getId]=useState('');

	const {id}=useParams();
	useEffect(()=>{
		const getIdbyemail=async (e)=>{
			await axios.get(`http://localhost:5000/users/${e}`)
			.then((res)=>{
				const tid=res.data._id;
				getId(tid);
			})
			.catch(error=>console.error(error));
		}
		getIdbyemail(userEmail);
	},[userEmail])
	const lastMsgRef = useRef(null);
	const [showAttach, setShowAttach] = useState(false);
	const [showEmojis, setShowEmojis] = useState(false);
	const [showProfileSidebar, setShowProfileSidebar] = useState(false);
	const [showSearchSidebar, setShowSearchSidebar] = useState(false);

	const [messages,setMessages]=useState([]);
	
	const [newMessage, setNewMessage] = useState("");
	const [arrivalMessage, setArrivalMessage] = useState(null);
	
	const [roomData,getRoomData]=useState('');
	const [roomName,getRoomName]=useState('');
	useEffect(()=>{
		const getAllRoomData=async()=>{
			await axios.get(`http://localhost:5000/room/${id}`)
			.then((res)=>{
				getRoomData(res.data);
				getRoomName(res.data.name);
				const convs=Object.keys(res.data.conversation);
				const l=[];
				convs.map((conv)=>{
					const msg=res.data.conversation[conv].message.messageText;
					const user=res.data.conversation[conv].postedByUser.email;
					let sender;
					if(user===userEmail){
						sender=true;
					}
					else{
						sender=false;
					}
					l.push({message:msg,sender:sender});
				})
				setMessages(l);
			})
			.catch(error=>console.error(error));
		}
		getAllRoomData();
		// if (!roomData){
		// 	navigation('/messages');
		// }
		// else {
		// 	scrollToLastMsg();
		// 	// setUserAsUnread(user.id);
		// }
	},[id])
	// useEffect(() => {
	// 	user && scrollToLastMsg();
	// }, [users]);

	// const openSidebar = (cb) => {
	// 	// close any open sidebar first
	// 	setShowProfileSidebar(false);
	// 	setShowSearchSidebar(false);

	// 	// call callback fn
	// 	cb(true);
	// };

	// const scrollToLastMsg = () => {
	// 	lastMsgRef.current.scrollIntoView();
	// };

	useEffect(()=>{
		socket.emit("addUser",userEmail);
	},[userEmail]);

	const submitNewMessage = async () => {
		// addNewMessage(userId,id, newMessage);
		const req = {messageText: newMessage,user:userId};
		await axios.post(`http://localhost:5000/room/${id}/message`,req)
		.then((res)=>{
			// console.log(res);
		})
		.catch(error=>console.error(error))
		socket.emit("sendMessage", { userEmail,newMessage });
		setNewMessage("");
		// scrollToLastMsg();
	};

	useEffect(()=>{
		socket.on("getMessage", (data) => {
			let f=false;
			if(data.userId.userEmail===userEmail){
				f=true;
			}
			setArrivalMessage({
				user:f,
			  	text: data.userId.newMessage,
			});
		  });
	},[]);

	useEffect(()=>{
		arrivalMessage &&
		setMessages((prev)=>[...prev,{message:arrivalMessage.text,sender:arrivalMessage.user}]);
	},[arrivalMessage]);

	return (
		<>
		<div className="chat">
			<div className="chat__body">
				<div className="chat__bg"></div>
				{roomName?
				<Header
				user={roomName}
				/>:
				<div></div>}
				{messages.length?
				<div className="chat__content">
					<Convo lastMsgRef={lastMsgRef} messages={messages} />
				</div>
				:
				<div>wait</div>}
				<footer className="chat__footer">
					{/* <button
						className="chat__scroll-btn"
						aria-label="scroll down"
						onClick={scrollToLastMsg}
					>
						<Icon id="downArrow" />
					</button> */}
					{/* <EmojiTray
						showEmojis={showEmojis}
						newMessage={newMessage}
						setNewMessage={setNewMessage}
					/> */}
					<ChatInput
						showEmojis={showEmojis}
						setShowEmojis={setShowEmojis}
						showAttach={showAttach}
						setShowAttach={setShowAttach}
						newMessage={newMessage}
						setNewMessage={setNewMessage}
						submitNewMessage={submitNewMessage}
					/>
				</footer>
			</div>
			{/* <ChatSidebar
				heading="Search Messages"
				active={showSearchSidebar}
				closeSidebar={() => setShowSearchSidebar(false)}
			>
				<Search />
			</ChatSidebar>

			<ChatSidebar
				heading="Contact Info"
				active={showProfileSidebar}
				closeSidebar={() => setShowProfileSidebar(false)}
			>
				<Profile user={user} />
			</ChatSidebar> */}
		</div>
		</>
	);
};

export default Chat;

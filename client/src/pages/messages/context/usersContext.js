import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import contacts  from "./../../../data/messages";
import { useSocketContext } from "./socketContext";

const UsersContext = createContext();

const useUsersContext = () => useContext(UsersContext);

const UsersProvider = ({ children }) => {
	const socket = useSocketContext();

	const [users, setUsers] = useState(contacts);

	const _updateUserProp = (userId, prop, value) => {
		setUsers((users) => {
			const usersCopy = [...users];
			let userIndex = users.findIndex((user) => user.id === userId);
			const userObject = usersCopy[userIndex];
			usersCopy[userIndex] = { ...userObject, [prop]: value };
			return usersCopy;
		});
	};

	const setUserAsTyping = (data) => {
		const { userId } = data;
		_updateUserProp(userId, "typing", true);
	};

	const setUserAsNotTyping = (data) => {
		const { userId } = data;
		_updateUserProp(userId, "typing", false);
	};

	const fetchMessageResponse = (data) => {
		console.log(data);
	};

	useEffect(() => {
		socket.on("sendMessage", fetchMessageResponse);
		socket.on("start_typing", setUserAsTyping);
		socket.on("stop_typing", setUserAsNotTyping);
		socket.on("getMessage",getMessage);
	}, [socket]);

	const setUserAsUnread = (userId) => {
		_updateUserProp(userId, "unread", 0);
	};

	const getMessage=(message)=>{
		// console.log(message);
	}

	const addNewMessage = async (userId,roomId, message) => {
		const req = {messageText: message,user:userId};
		await axios.post(`http://localhost:5000/room/${roomId}/message`,req)
		.then((res)=>{
			console.log(res);
		})
		.catch(error=>console.error(error))
		socket.emit("sendMessage", { message });
	};

	return (
		<UsersContext.Provider value={{ users, setUserAsUnread, addNewMessage }}>
			{children}
		</UsersContext.Provider>
	);
};

export { useUsersContext, UsersProvider };

import React, { useEffect, useState } from "react";
import "./sidebar.css";
import avatar from "./../../../images/profile.jpg";
import Icon from "./../icons/icon";
// import Alert from "./Alert";
import Sidecard from "./../sidecard/sidecard";
// import OptionsBtn from "components/OptionsButton";
import { useUsersContext } from "./../context/usersContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const id=JSON.parse(localStorage.getItem('profile')).result.email;
	const [Id,getId]=useState('');
	const [rooms,getRooms]=useState('');
	useEffect(()=>{
		const getIdbyemail=async (id)=>{
			await axios.get(`http://localhost:5000/users/${id}`)
			.then((res)=>{
				const tid=res.data._id;
				
				getId(tid);
				getAllRooms(tid);
			})
			.catch(error=>console.error(error));
		}
		
		const getAllRooms=async (Id)=>{
			await axios.get(`http://localhost:5000/room/allrooms/${Id}`)
			.then((res)=>{
				const rooms=res.data.roomIds;
				getRooms(rooms);
			})
			.catch(error=>console.error(error));
		}
		getIdbyemail(id);

	},[]);

	const { users: contacts } = useUsersContext();

	return (
		<aside className="sidebar">
			<header className="header">
				<div className="sidebar__avatar-wrapper">
					<img src={avatar} alt="Karen Okonkwo" className="avatar" width="50px" height="50px"/>
				</div>
				<div className="sidebar__actions">
					{/* <button className="sidebar__action" aria-label="Status">
						<Icon
							id="status"
							className="sidebar__action-icon sidebar__action-icon--status"
						/>
					</button> */}
					<Link to="/createroom">
					<button href="/createroom" className="sidebar__action" aria-label="New chat">
						Create Room
						<Icon id="chat" className="sidebar__action-icon" />
					</button>
					</Link>
					{/* <OptionsBtn
						className="sidebar__action"
						ariaLabel="Menu"
						iconId="menu"
						iconClassName="sidebar__action-icon"
						options={[
							"New group",
							"Create a room",
							"Profile",
							"Archived",
							"Starred",
							"Settings",
							"Log out",
						]}
					/> */}
				</div>
			</header>
			{/* <Alert /> */}
			<div className="search-wrapper">
				<div className="search-icons">
					<Icon id="search" className="search-icon" />
					<button className="search__back-btn">
						<Icon id="back" />
					</button>
				</div>
				<input className="search" placeholder="Search or start a new chat" />
			</div>
			{rooms?
			<div className="sidebar__contacts">
				{rooms.map((contact, index) => (
					<Sidecard key={index} sidecard={contact} />
				))}
			</div>
			:
				<div>Please wait</div>}
		</aside>
	);
};

export default Sidebar;
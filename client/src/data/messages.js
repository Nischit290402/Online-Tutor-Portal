// import ppGirl1 from "assets/images/profile-picture-girl-1.jpeg";
import ppGirl2 from "./../images/profile.jpg";
import ppGirl3 from "./../images/cs204.png";
// import ppGirl4 from "assets/images/profile-picture-girl-4.jpeg";
// import ppBoy1 from "assets/images/profile-picture-boy-1.jpeg";
// import ppBoy2 from "assets/images/profile-picture-boy-2.jpeg";
// import ppBoy3 from "assets/images/profile-picture-boy-3.jpeg";
// import getRandomSentence from "utils/getRandomSentence";

const users = [
	{
		id: 1,
		profile_picture: ppGirl3,
		name: "bruh",
		phone_number: "+2348123456789",
		whatsapp_name: "Beyonce",
		unread: 3,
		messages: {
			"04/06/2021": [
				{
					content: "wow lmao",
					sender: 1,
					time: "08:11:26",
					status: null,
				},
				{
					content: "wow lmao",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: "wow lmao",
					sender: 1,
					time: "09:11:26",
					status: null,
				},
				{
					content: "wow lmao",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: "wow lmao",
					sender: 1,
					time: "08:11:26",
					status: null,
				},
				{
					content: "wow lmao",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: "wow lmao",
					sender: 1,
					time: "09:11:26",
					status: null,
				},
				{
					content: "wow lmao",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: "wow lmao",
					sender: null,
					time: "08:10:26",
					status: null,
				},
				{
					content: "wow lmao",
					sender: 1,
					time: "08:11:26",
					status: null,
				},
				{
					image: true,
					sender: 1,
					time: "09:12:26",
					status: null,
				},
				{
					content: "wow lmao",
					sender: null,
					time: "08:12:45",
					status: "read",
				},
				{
					image: true,
					sender: null,
					time: "09:13:26",
					status: null,
				},
				{
					content: "wow lmao",
					sender: 1,
					time: "09:20:26",
					status: null,
				},
				{
					content: "wow lmao",
					sender: 1,
					time: "09:21:26",
					status: null,
				},
			],
		},
		group: false,
		pinned: true,
		typing: false,
	},
	{
		id: 2,
		profile_picture: ppGirl2,
		name: "Karen Okonkwo",
		phone_number: "+2348123456789",
		whatsapp_name: "Karen O.",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: "wow lmao",
					sender: 2,
					time: "08:11:26",
					status: null,
				},
				{
					content: "wow lmao",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: "wow lmao",
					sender: 2,
					time: "09:11:26",
					status: null,
				},
				{
					content: "wow lmao",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: "wow lmao",
					sender: 2,
					time: "08:11:26",
					status: null,
				},
				{
					content: "wow lmao",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: "wow lmao",
					sender: 2,
					time: "09:11:26",
					status: null,
				},
				{
					content: "wow lmao",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: "wow lmao",
					sender: 2,
					time: "08:11:26",
					status: null,
				},
				{
					content: "wow lmao",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: "wow lmao",
					sender: 2,
					time: "09:11:26",
					status: null,
				},
			],
		},
		group: false,
		pinned: false,
		typing: false,
	},
];

export default users;

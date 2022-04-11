// export const CardInfo=[
//     {index:"1",image:"https://www.computerhope.com/jargon/s/software-engineering.jpg", title:"CS208", course:"SE",desc:"This is bold and this is semi bold and this is extra bold. This is italic and this is extra light and this is light and this is regular. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
//     {index:"2",image:"https://miro.medium.com/max/1024/1*9QRFQdpO2f59GsN2KsE9XA.png", title:"CS204", course:"DAA",desc:"INFORMATION REGARDING THE COURSE CS204"},
//     {index:"3",image:"https://hardwarebee.com/wp-content/uploads/2020/04/logic-design-feature.png", title:"CS206", course:"LD",desc:"INFORMATION REGARDING THE COURSE CS206"},
//     {index:"4",image:"https://miro.medium.com/max/400/0*zeeThlxTBBJmUpOP.png", title:"CS202", course:"AUTOMATA",desc:"INFORMATION REGARDING THE COURSE CS202"},
//     {index:"5",image:"https://www.computerhope.com/jargon/s/software-engineering.jpg", title:"CS208", course:"SE",desc:"INFORMATION REGARDING THE COURSE CS208"},
//     {index:"6",image:"https://miro.medium.com/max/1024/1*9QRFQdpO2f59GsN2KsE9XA.png", title:"CS204", course:"DAA",desc:"INFORMATION REGARDING THE COURSE CS204"},
//     {index:"7",image:"https://hardwarebee.com/wp-content/uploads/2020/04/logic-design-feature.png", title:"CS206", course:"LD",desc:"INFORMATION REGARDING THE COURSE CS206"},
//     {index:"8",image:"https://miro.medium.com/max/400/0*zeeThlxTBBJmUpOP.png", title:"CS202", course:"AUTOMATA",desc:"INFORMATION REGARDING THE COURSE CS202"},
//     {index:"9",image:"https://www.computerhope.com/jargon/s/software-engineering.jpg", title:"CS208", course:"SE",desc:"INFORMATION REGARDING THE COURSE CS208"},
//     {index:"10",image:"https://miro.medium.com/max/1024/1*9QRFQdpO2f59GsN2KsE9XA.png", title:"CS204", course:"DAA",desc:"INFORMATION REGARDING THE COURSE CS204"},
//     {index:"11",image:"https://hardwarebee.com/wp-content/uploads/2020/04/logic-design-feature.png", title:"CS206", course:"LD",desc:"INFORMATION REGARDING THE COURSE CS206"},
//     {index:"12",image:"https://miro.medium.com/max/400/0*zeeThlxTBBJmUpOP.png", title:"CS202", course:"AUTOMATA",desc:"INFORMATION REGARDING THE COURSE CS202"},
//     {index:"13",image:"https://www.computerhope.com/jargon/s/software-engineering.jpg", title:"CS208", course:"SE",desc:"INFORMATION REGARDING THE COURSE CS208"},
//     {index:"14",image:"https://miro.medium.com/max/1024/1*9QRFQdpO2f59GsN2KsE9XA.png", title:"CS204", course:"DAA",desc:"INFORMATION REGARDING THE COURSE CS204"},
//     {index:"15",image:"https://hardwarebee.com/wp-content/uploads/2020/04/logic-design-feature.png", title:"CS206", course:"LD",desc:"INFORMATION REGARDING THE COURSE CS206"},
//     {index:"16",image:"https://miro.medium.com/max/400/0*zeeThlxTBBJmUpOP.png", title:"CS202", course:"AUTOMATA",desc:"INFORMATION REGARDING THE COURSE CS202"}
// ];

// import { Component } from "react";
// import axios from "axios";

// class Info extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         subjects: [],
//       };
//     }
  
//     componentDidMount() {
//       axios.get("/subject").then((response) => {
//         this.setState({ subjects: response.data });
//         console.log(response.data);
//       });
//     }
  
//     render() {
//       const { subjects } = this.state;
//       var CardInfo = [];
//       for (let i = 0; i < subjects.length; i++) {
//         let x = {};
//         x.index = subjects[i].index;
//         x.image = subjects[i].image;
//         x.title = subjects[i].title;
//         x.course = subjects[i].course;
//         x.desc = subjects[i].desc;
//         CardInfo.push(x);
//       }
//       return (
//         <><div>{ CardInfo }</div></>
//       );
//     }
//   }
  
//   export default Info;
  
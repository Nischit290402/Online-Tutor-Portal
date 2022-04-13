import React from 'react';
// import './st.css'
function Student1()
{
    const myStyle={

backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3)),url('https://capitolmagnet.org/wp-content/uploads/2020/12/Online-Learning-Landing-Page-Main-Image.gif')",
backgroundSize:'100% 100%',
backgroundRepeat: 'no-repeat',
width:'100%',
height:'350px',

color:'white',
 display:'flex',
alignItems:'center',
justifyContent:'center',
fontSize:67,
// objectFit:'cover',
//position:'absolute',
};
return (
     <div style={myStyle} >
          {/* <img src="https://thumbs.dreamstime.com/z/online-learning-concept-distance-education-student-teacher-group-vector-78550163.jpg" 
            alt = "Geeks Image" className='image' /> */}
       {/* <strong>STUDENT HOME PAGE</strong>  */}
         </div>
    );
}
export default Student1;

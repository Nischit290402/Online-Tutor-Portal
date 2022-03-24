import React from 'react';

function Title() {
    
    const myStyle = {
        backgroundImage: "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://static01.nyt.com/images/2020/04/12/business/10View-illo/10View-illo-videoSixteenByNineJumbo1600.jpg')",
        backgroundRepeat: 'no-repeat',
        // width:'100%',
        height: '450px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 67,
        //position:'absolute',
    };
    
    return (
        <div style={myStyle}>
            <div ><strong>ONLINE TUTOR PORTAL</strong> </div>
        </div>
    );
}
export default Title;
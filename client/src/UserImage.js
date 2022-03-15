import React from "react";
import ProfileUi from "react-profile-card";

function UserImage() {
  return (
    <div>
      <ProfileUi
        imgUrl="https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg"
        name="Tutor Name"
        designation="Designation"
      />
    </div>
  );
}

export default UserImage;

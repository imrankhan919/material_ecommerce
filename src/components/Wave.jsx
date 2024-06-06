import React from "react";

const Wave = () => {
  return (
    <svg
      style={{ position: "absolute", top: 40, zIndex: -1 }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#f3f4f5"
        fillOpacity="1"
        d="M0,32L40,32C80,32,160,32,240,74.7C320,117,400,203,480,213.3C560,224,640,160,720,128C800,96,880,96,960,106.7C1040,117,1120,139,1200,133.3C1280,128,1360,96,1400,80L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      ></path>
    </svg>
  );
};

export default Wave;

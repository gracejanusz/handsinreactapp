import React, { useRef, useEffect } from "react";

const Webcam = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
      }
    };

    setupCamera();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <video
        ref={videoRef}
        width="640"
        height="480"
        autoPlay
        muted
        style={{ borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", transform: 'scaleX(-1)'}}
      />
    </div>
  );
};

export default Webcam;


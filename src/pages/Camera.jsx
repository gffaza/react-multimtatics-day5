import React, { useRef, useEffect, useState } from "react";

export default function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [streaming, setStreaming] = useState(false);
  const width = 320;
  const [height, setHeight] = useState(0);

  const handleCanPlay = () => {
    if (!streaming) {
      const video = videoRef.current;
      if (video) {
        const computedHeight = video.videoHeight / (video.videoWidth / width);
        const validHeight = isNaN(computedHeight) ? width / (4 / 3) : computedHeight; // Fix: Corrected `isNan` to `isNaN`

        setHeight(validHeight);

        video.setAttribute("width", width);
        video.setAttribute("height", validHeight); // Update height after it's calculated
        canvasRef.current.setAttribute("width", width);
        canvasRef.current.setAttribute("height", validHeight);
        setStreaming(true);
      }
    }
  };

  const clearPhoto = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);
    setPhoto(canvas.toDataURL("image/png"));
  };

  const takePicture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      const data = canvas.toDataURL("image/png");
      setPhoto(data);
    } else {
      clearPhoto();
    }
  };

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (err) {
        console.error("An error occurred", err);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Camera Component</h1>
      <div className="flex flex-col items-center">
        <div className="relative">
          <video
            ref={videoRef}
            onCanPlay={handleCanPlay}
            className="rounded-lg border border-gray-300"
            style={{ display: streaming ? "block" : "none", 
                margin: '0 auto', 
                width: '20%', 
                height: 'auto'  }}
          />
          <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>
        <button
          onClick={takePicture}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Take Picture
        </button>
        {photo && (
          <img
            src={photo}
            alt="Captured"
            className="mt-4 border rounded-lg shadow-md"
          />
        )}
      </div>
    </div>
  );
}

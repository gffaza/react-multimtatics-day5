import React, { useRef } from "react";

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
        setHeight(isNan(computedHeight) ? width / (4 / 3) : computedHeight);

        video.setAttribute("width", width);
        video.setAttribute("height", height);
        canvasRef.current.setAttribute("height", computedHeight);
        canvasRef.current.setAttribute("width", width);
        setStreaming(true);
      }
    }
  };

  const clearPhoto = () =>{
    
  }
  return <div>Camera</div>;
}

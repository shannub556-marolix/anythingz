import React, { useRef, useEffect } from 'react';

export default function CameraCapture() {
  const videoRef = useRef();
  const canvasRef = useRef();

  const biometricDeviceIP = '192.168.1.100';
  const biometricDevicePort = 1234;
  let socket;

  const handleCapture = () => {
    // Capture the current frame from the video stream
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get the captured image data as a base64-encoded string
    const imageData = canvas.toDataURL('image/jpeg');
    console.log(imageData); // You can now use the image data for further processing or display

    // Stop the video stream
    video.srcObject.getTracks().forEach((track) => track.stop());
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Assign the camera stream to the video element
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.log('Error accessing camera:', error);
    }
  };

  useEffect(() => {
    // Establish a WebSocket connection when the component mounts
    socket = new WebSocket(`ws://${biometricDeviceIP}:${biometricDevicePort}`);

    socket.onopen = () => {
      console.log('Connected to biometric device');
      // Send a command to request logs
      socket.send('GET_LOGS');
    };

    socket.onmessage = (event) => {
      // Process the received data (parse, store, display, etc.)
      console.log('Received data:', event.data);
    };

    socket.onclose = () => {
      console.log('Connection closed');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Clean up the WebSocket connection on component unmount
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} width="400" height="300"></video>
      <canvas ref={canvasRef} width="400" height="300"></canvas>
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={handleCapture}>Capture</button>
    </div>
  );
}

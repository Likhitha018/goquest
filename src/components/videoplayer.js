import React, { useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null); // To store the uploaded video URL
  const [originalText, setOriginalText] = useState("This is the original dialogue."); // Sample original text
  const [translatedText, setTranslatedText] = useState("This is the translated dialogue."); // Sample translated text

  // Function to handle the uploaded video file
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file); // Create a URL for the uploaded file
      setVideoSrc(videoUrl);
    }
  };

  // Function to play/pause the video
  const playPauseVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="video-player">
      {/* File Upload Input */}
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        className="mb-4"
      />

      {/* Video Element */}
      {videoSrc ? (
        <div>
          <video ref={videoRef} width="100%" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause Button */}
          <button
            onClick={playPauseVideo}
            className="bg-blue-500 text-white mt-4 px-4 py-2 rounded"
          >
            Play / Pause
          </button>

          {/* Dialogue Display and Editable Fields */}
          <div className="dialogue-section mt-6">
            <h3 className="text-xl font-bold mb-2">Current Dialogue</h3>
            {/* Original Text */}
            <div className="mb-4">
              <label className="block font-semibold">Original Text:</label>
              <textarea
                value={originalText}
                onChange={(e) => setOriginalText(e.target.value)}
                className="w-full p-2 border rounded"
                rows="2"
              />
            </div>

            {/* Translated Text */}
            <div className="mb-4">
              <label className="block font-semibold">Translated Text:</label>
              <textarea
                value={translatedText}
                onChange={(e) => setTranslatedText(e.target.value)}
                className="w-full p-2 border rounded"
                rows="2"
              />
            </div>
          </div>
        </div>
      ) : (
        <p>Please upload a video file to play.</p>
      )}
    </div>
  );
};

export default VideoPlayer;

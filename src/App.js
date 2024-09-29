import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import VideoPlayer from "../src/components/videoplayer"  ;
import AudioRecorder from "../src/components/AudioRecorder";
import DialogueEditor from "../src/components/DialogueEditor";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoPlayer />} />
        <Route path="/audio" element={<AudioRecorder />} />
        <Route path="/dialogue" element={<DialogueEditor />} />
      </Routes>
    </Router>
  );
};

export default App;

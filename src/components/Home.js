import React from "react";
import VideoPlayer from "../components/videoplayer";
import AudioRecorder from "../components/AudioRecorder";
import DialogueEditor from "../components/DialogueEditor";
import { Link } from "react-router-dom";
import "../../src/App.css";
import backgroundImage from "../../src/components/downloadgoquest.jpg";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Container with padding */}
      <div className="container mx-auto px-2 py-2">
        {" "}
        {/* 10px padding */}
        {/* Navbar */}
        <nav className="flex justify-between items-center p-4 bg-gray-900 shadow-md">
          <div className="text-3xl font-bold">Dubbify</div>
          <div className="flex space-x-6">
            <Link
              to="/video"
              className="hover:text-red-500 transition duration-300"
            >
              Video Player
            </Link>
            <Link
              to="/audio"
              className="hover:text-red-500 transition duration-300"
            >
              Audio Recorder
            </Link>
            <Link
              to="/dialogue"
              className="hover:text-red-500 transition duration-300"
            >
              Dialogue Editor
            </Link>
          </div>
        </nav>
        {/* Hero Section */}
        <header
          className="h-[1000px] bg-cover bg-center flex items-center justify-center relative"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-extrabold mb-2">
              Create Dubs Effortlessly
            </h1>
            <p className="text-xl mb-4">
              Seamlessly integrate audio, video, and text for powerful dubbing.
            </p>
            <Link
              to="/get-started"
              className="bg-red-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </header>
        {/* Grid Layout for Components */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Video Player</h2>
            <VideoPlayer />
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Audio Recorder</h2>
            <AudioRecorder />
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Dialogue Editor</h2>
            <DialogueEditor />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Dubbify. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;

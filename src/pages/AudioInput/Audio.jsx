import "./Audio.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from "react";
import axios from 'axios';
/* import video from "../../assets/vid.mp4" */

const Audio = () => {
    const [transcript, setTranscript] = useState('');
    const [punctuatedTranscript, setPunctuatedTranscript] = useState('');
    const [fileURL, setFileURL] = useState(null);
    const [videoURL, setVideoURL] = useState(null);  // State to hold the video URL
    const { transcript: liveTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const [selectedFile, setSelectedFile] = useState(null);  // State to hold the selected file

    if (!browserSupportsSpeechRecognition) {
        return <p>Browser does not support speech recognition.</p>;
    }

    const startListening = () => {
        setTranscript('');
        SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setTranscript(liveTranscript);
        punctuateText(liveTranscript);
    };

    const punctuateText = (text) => {
        axios.post('http://localhost:5000/punctuate', { text })
            .then(response => {
                const punctuated = response.data.punctuated_text;
                setPunctuatedTranscript(punctuated);
                const blob = new Blob([punctuated], { type: 'text/plain' });
                const file = new File([blob], "transcript.txt", { type: 'text/plain' });
                setFileURL(URL.createObjectURL(file));
            })
            .catch(error => {
                console.error('Error adding punctuation:', error);
            });
    };

    const sendTranscriptToServer = () => {
        const file = new File([new Blob([punctuatedTranscript], { type: 'text/plain' })], "transcript.txt", { type: 'text/plain' });
        const formData = new FormData();
        formData.append('file', file);
        
        axios({
            method: 'post',
            url: 'http://localhost:5000/upload',
            data: formData,
            responseType: 'blob'  // Important: indicates that the response should be treated as a Blob
        }).then(response => {
            const videoBlob = new Blob([response.data], { type: 'video/mp4' });
            setVideoURL(URL.createObjectURL(videoBlob));
        }).catch(error => {
            console.error('Error sending transcript to server:', error);
        });
    };

    return (
        <div className="atv-container">
            <h2>Videogen.ai</h2>
            <div className="main-content">
                {punctuatedTranscript || transcript || liveTranscript}
            </div>
            <div className="btn-style">
                <button onClick={startListening}>Start Listening</button>
                <button onClick={stopListening}>Stop Listening </button>
                <button onClick={sendTranscriptToServer}>Get Video</button>
            </div>
            <div className="vid-cont">
            {videoURL && (
                    <div className="vid-inner-cont">
                        <video controls style={{ width: "100%", marginTop: "20px" }}>
                            <source src={videoURL} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        
                        <a href={videoURL} download="generated_video.mp4">
                            Download Video
                        </a>
                        
                    </div>
                )}
            </div>

        </div>
    );
};

export default Audio;


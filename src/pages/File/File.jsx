import React, { useState } from "react";
import "./File.css";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import video from "../../assets/vid.mp4"

const File = () => {
    const [videoURL, setVideoURL] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsDisabled(false);
    };

    const sendFileToServer = (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (!selectedFile) {
            alert("Please select a file first!");
            return;
        }
        const formData = new FormData();
        formData.append('file', selectedFile);
        
        axios({
            method: 'post',
            url: 'https://ttv-server.onrender.com/upload',
            data: formData,
            responseType: 'blob'
        }).then(response => {
            const videoBlob = new Blob([response.data], { type: 'video/mp4' });
            setVideoURL(URL.createObjectURL(videoBlob));
            setIsLoading(false);
        }).catch(error => {
            console.error('Error sending file to server:', error);
            setIsLoading(false);
        });
        
    };

    return (
        <div className="ftv-container">
            <h2>Voxslide.ai</h2>
            <form id="form-file-upload" onSubmit={sendFileToServer}>
                <div className="upload-cont">
                    <input type="file" id="input-file-upload" multiple style={{ display: 'none' }} onChange={handleFileChange} />
                    <label htmlFor="input-file-upload" id="label-file-upload">
                        <div className="upload-text">
                            <p> <a className="browse-link">Upload</a> your text file here</p>
                        </div>
                    </label>

                    <div className="upload-btn">
                        <button type="submit" disabled={isDisabled} id="submit-btn">
                            <div className="btn-text">
                                <p>Get Video</p>
                            </div>
                        </button>
                    </div>
                </div>
            </form>

            <div className="vid-cont">
                {isLoading ? (
                    <Bars
                    height="80"
                    width="80"
                    color="#C142D6"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />
                ) : videoURL && (
                    <div className="vid-inner-cont">
                        <video controls >
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

export default File;

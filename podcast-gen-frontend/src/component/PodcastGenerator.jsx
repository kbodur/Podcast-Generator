import React, { useState } from 'react';
import axios from 'axios';
import { FaMicrophone } from 'react-icons/fa';
import '../App.css';

function PodcastGenerator() {
    const [transcript, setTranscript] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [recording, setRecording] = useState(false);
    let recognition = null;

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const startRecording = () => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert("Tarayıcınız ses tanımayı desteklemiyor.");
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.lang = 'tr-TR, en-EN';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
            setRecording(true);
        };

        recognition.onresult = (event) => {
            const speechResult = event.results[0][0].transcript;
            setTranscript((prev) => prev + " " + speechResult);
        };

        recognition.onerror = (event) => {
            console.error("Hata:", event.error);
        };

        recognition.onend = () => {
            setRecording(false);
        };

        recognition.start();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!transcript) {
            alert("Lütfen bir transkript girin veya ses kaydı yapın.");
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post("http://localhost:5001/generate", {
                transcript: transcript,
            });

            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error submitting request:", error.response ? error.response.data : error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <div className="container">
                <button
                    onClick={startRecording}
                    style={{ backgroundColor: 'white', border: 'none', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}
                    title="Ses Kaydet"
                >
                    <FaMicrophone color="white" size={24} />
                </button>

                <h1>Podcast Generator</h1>

                <button>
                    <label className="upload-btn">
                        Upload Audio
                        <input type="file" accept="audio/*" onChange={handleFileChange} style={{ display: 'none', background: "orange" }} />
                    </label>
                </button>

                {file && (
                    <div style={{ marginTop: '10px' }}>
                        <p><strong>Selected File:</strong> {file.name}</p>
                        <audio controls>
                            <source src={URL.createObjectURL(file)} type={file.type} />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                )}

                <textarea
                    placeholder="Paste your transcript here or use the microphone 🎤"
                    value={transcript}
                    onChange={(e) => setTranscript(e.target.value)}
                />

                <button onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Generating...' : 'Generate Podcast Magic ✨'}
                </button>
            </div>
        </div>
    );
}

export default PodcastGenerator;

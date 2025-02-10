# Podcast Generator

Podcast Generator is a web application that allows users to convert speech into text and generate podcasts from transcripts. Users can either record their voice or upload an audio file to generate a transcript and create a podcast.

## Features
- 🎙️ **Speech-to-Text:** Record your voice and transcribe it automatically.
- 📂 **Upload Audio Files:** Upload an audio file to transcribe and listen to it.
- 📝 **Edit Transcripts:** Manually edit or paste a transcript before processing.
- ✨ **Generate Podcasts:** Submit the transcript to generate a podcast.

---

## Tech Stack

### Frontend (React)
- **React** (JavaScript library for UI development)
- **Axios** (HTTP client for API requests)
- **React Icons** (For UI icons, e.g., microphone icon)
- **CSS** (Custom styles for UI design)
- **Web Speech API** (For speech recognition)

### Backend (Node.js & Express)
- **Node.js** (JavaScript runtime environment)
- **Express.js** (Backend framework for API handling)
- **Whisper API / Google Speech-to-Text API** (For converting audio to text)
- **Multer** (For handling file uploads)
- **FFmpeg** (For processing audio files)

---

## Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/kbodur/Podcast-Generator.git
cd podcast-generator
```

### 2️⃣ Install Dependencies
#### Frontend:
```bash
cd frontend
npm install
```

#### Backend:
```bash
cd backend
npm install
```

### 3️⃣ Run the Application
#### Start Backend Server:
```bash
cd backend
node server.js
```

#### Start Frontend React App:
```bash
cd frontend
npm start
```

---

## Usage
1. Click on the 🎤 microphone button to start recording.
2. Upload an audio file if you prefer file-based transcription.
3. Edit or review the transcript in the text area.
4. Click **"Generate Podcast Magic ✨"** to process the transcript.

---

## Future Improvements
- 🎨 Improve UI/UX with better styling.
- 🎵 Add background music or effects to generated podcasts.
- 🌎 Support multiple languages for transcription.
- ☁️ Deploy the application online.

---

## Contributing
Feel free to contribute by creating issues and pull requests. Fork the repo and improve it!

---

## License
This project is licensed under the MIT License.


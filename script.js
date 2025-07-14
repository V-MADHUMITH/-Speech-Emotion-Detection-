// ---- Mocked emotion prediction for demo ----
function predictEmotion(audioBlob) {
  // In a real app, send audioBlob to backend ML model or API for emotion detection
  // This mock randomly selects an emotion for demonstration purposes
  const emotions = [
    { label: "Happy", emoji: "😄", suggestion: "Keep smiling! How about sharing your joy with a friend?" },
    { label: "Sad", emoji: "😢", suggestion: "It's okay to feel sad. Try listening to your favorite music or talking to someone you trust." },
    { label: "Angry", emoji: "😡", suggestion: "Take a deep breath. Maybe step outside or try a short walk to calm down." },
    { label: "Surprised", emoji: "😲", suggestion: "Surprises can be exciting! Want to write about what surprised you?" },
    { label: "Neutral", emoji: "😐", suggestion: "Feeling calm is great. Would you like to try a short meditation?" },
    { label: "Fearful", emoji: "😨", suggestion: "If something's worrying you, consider reaching out to a friend or family member." },
    { label: "Disgusted", emoji: "🤢", suggestion: "Maybe take a moment to refresh or get some fresh air." }
  ];
  // Pick random for demo
  return new Promise(resolve => {
    setTimeout(() => {
      const pick = emotions[Math.floor(Math.random() * emotions.length)];
      resolve(pick);
    }, 1200);
  });
}

// ---- UI functions ----
function showResult(emotion) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Detected Emotion: <b>${emotion.label}</b> <span style="font-size:2em">${emotion.emoji}</span>`;
  document.getElementById('suggestion').innerText = emotion.suggestion;
}

function clearResult() {
  document.getElementById('result').innerHTML = '';
  document.getElementById('suggestion').innerText = '';
}

// ---- Upload audio option ----
document.getElementById('predict-upload').onclick = async () => {
  const fileInput = document.getElementById('audio-upload');
  if (!fileInput.files[0]) {
    alert('Please select an audio file.');
    return;
  }
  clearResult();
  const blob = fileInput.files[0];
  showResult({label: "Predicting...", emoji: "⏳", suggestion: ""});
  const emotion = await predictEmotion(blob);
  showResult(emotion);
};

// ---- Record audio option ----
let mediaRecorder, audioChunks = [], recordedBlob = null;

const startBtn = document.getElementById('start-record');
const stopBtn = document.getElementById('stop-record');
const predictRecordBtn = document.getElementById('predict-record');
const audioPlayer = document.getElementById('recorded-audio');

startBtn.onclick = async () => {
  clearResult();
  audioPlayer.src = "";
  recordedBlob = null;
  audioChunks = [];
  startBtn.disabled = true;
  stopBtn.disabled = false;
  predictRecordBtn.disabled = true;
  if (!navigator.mediaDevices) {
    alert("Your browser doesn't support audio recording.");
    return;
  }
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
  mediaRecorder.onstop = () => {
    recordedBlob = new Blob(audioChunks, { type: 'audio/webm' });
    audioPlayer.src = URL.createObjectURL(recordedBlob);
    predictRecordBtn.disabled = false;
  };
  mediaRecorder.start();
};

stopBtn.onclick = () => {
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
};

predictRecordBtn.onclick = async () => {
  if (!recordedBlob) {
    alert("No audio recorded!");
    return;
  }
  clearResult();
  showResult({label: "Predicting...", emoji: "⏳", suggestion: ""});
  const emotion = await predictEmotion(recordedBlob);
  showResult(emotion);
};
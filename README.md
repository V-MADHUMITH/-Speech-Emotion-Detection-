# -Speech-Emotion-Detection-
# Project Title: Speech Emotion Detection Web Application

## Overview

The Speech Emotion Detection project is a full-stack web application that leverages machine learning and digital signal processing to classify human emotions from audio input. The system enables users to either upload an audio file or record their voice in real time. After processing the audio, the application predicts the speaker’s emotional state—such as happiness, sadness, anger, or neutrality—displays a relevant emoji, and provides an AI-generated suggestion based on the detected emotion.

## Objectives

- **To accurately detect and classify emotions from speech using machine learning techniques.**
- **To provide a seamless and interactive user experience for both audio file upload and live voice recording.**
- **To ensure secure and personalized access through user authentication (sign up and login).**
- **To offer actionable or comforting suggestions to users based on their emotional state.**

## Key Features

- **User Authentication:**  
  Users must sign up or log in using their email and password. If a user attempts to log in with an unregistered email, they are redirected to the sign-up page. Only registered users can access the emotion prediction features.
- **Audio Input Options:**  
  Users can choose to upload a pre-recorded audio file or record their voice directly via the browser.
- **Emotion Prediction:**  
  The system processes the audio and predicts the emotional state using advanced machine learning models (or a mocked-up system for demo purposes).
- **Visual Feedback:**  
  The detected emotion is displayed along with a matching emoji for intuitive understanding.
- **AI Suggestions:**  
  Based on the detected emotion, the system provides personalized suggestions or motivational messages to support the user.
- **User Flow:**  
  The application ensures a smooth flow from authentication to emotion prediction, enhancing usability and engagement.

## System Architecture

- **Frontend:**  
  Built with HTML, CSS, and JavaScript for a responsive and interactive user interface.  
  - Handles user authentication, audio input (upload/record), and displays prediction results.
- **Backend:**  
  (For real implementation) A backend server (e.g., Python Flask, Django, or Node.js) handles:
  - User data storage and authentication (email/password, sessions).
  - Audio processing and feature extraction (e.g., MFCC, chroma features).
  - Emotion classification using a pre-trained machine learning model.
- **Database:**  
  Stores user credentials and, optionally, user history or statistics.

## Workflow

1. **User Registration/Login:**  
   Users create an account with their email and password. Login checks if the email exists and prompts for password; if not registered, users are redirected to sign up.
2. **Audio Input:**  
   After authentication, users can upload an audio file or record their voice.
3. **Emotion Detection:**  
   The system processes the audio input, extracts features, and predicts the emotion.
4. **Results Display:**  
   The predicted emotion, emoji, and AI suggestion are shown to the user.
5. **User Experience:**  
   The application ensures only authenticated users can access emotion analysis, and guides users appropriately through registration and login.

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (vanilla)
- **Backend:** Python (Flask/Django) or Node.js (for real implementation)
- **Machine Learning:** scikit-learn, Keras, TensorFlow, or PyTorch for emotion classification models
- **Audio Processing:** librosa, numpy (for feature extraction)
- **Authentication:** Secure password handling (bcrypt, hash functions), session management
- **Database:** SQLite, MySQL, or MongoDB

## Use Cases

- **Mental Health & Wellbeing:**  
  Offers users feedback and supportive suggestions based on their emotions.
- **Education:**  
  Can be used in e-learning platforms to gauge student engagement or mood.
- **Entertainment & Gaming:**  
  Adds emotional interactivity to games or apps.
- **Customer Service:**  
  Detects caller emotion in support centers for better customer experience.

## Challenges & Limitations

- **Emotion Prediction Accuracy:**  
  Real-world accuracy depends on model quality and diversity of training data.
- **Privacy:**  
  Secure handling of user data and audio files is essential.
- **Browser/Device Compatibility:**  
  Audio recording may not work on all browsers without HTTPS.

## Future Enhancements

- Integrate real-time backend ML models for accurate predictions.
- Add support for more nuanced emotions and multiple languages.
- Store user emotion history for personalized feedback.
- Implement email verification and password recovery.
- Deploy to cloud for scalability and availability.

## Conclusion

This project demonstrates practical integration of machine learning, audio signal processing, and secure web application development. By providing emotion-aware feedback, it showcases the potential of AI-driven applications in improving user experience, wellbeing, and human-computer interaction.


output:
<img width="1919" height="915" alt="Image" src="https://github.com/user-attachments/assets/77088b84-8333-47ca-8fd7-d3d0b0df52d4" />

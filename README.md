A supportive learning platform tailored for children with autism — designed for parents, caregivers, and educators to foster inclusive growth through personalized tools, progress tracking, and interactive activities.

🌟 Features

🧠 Personalized learning modules for speech, behavior, and cognitive skills

💬 Caregiver-friendly interface with simple tools

📊 Progress tracking and visual analytics

🎮 Interactive games: pronunciation, drag-drop, gesture-based quizzes

📅 Daily routine planner with class/section customization

🔒 Secure user authentication and profile management

📥 Exportable reports and CSV/Excel tools

🛠 Tech Stack

Frontend:

React + Tailwind CSS

MediaPipe for gesture recognition

SpeechRecognition API

Backend:

Node.js + Express.js

MongoDB (Mongoose)

RESTful APIs using Express Router

🚀 Getting Started

1. Clone the repository

git clone https://github.com/rachitchettri/Autism.git
cd autism-welfare-hub

2. Install dependencies

Client:

cd client
npm install

Server:

cd server
npm install

3. Run the project

Client:

npm start

Server:

npm run dev
```bash
python manage.py runserver

📁 Project Structure

├── client               # React Frontend
│   ├── assets           # Images & resources
│   ├── components       # Reusable UI parts
│   └── pages            # Route-based components
│
├── server               # Express Backend
│   ├── routes           # API routes
│   ├── controllers      # Business logic
│   ├── models           # Mongoose models
│   └── utils            # Helpers & middleware

├── client               # React Frontend
│   ├── assets           # Images & resources
│   ├── components       # Reusable UI parts
│   └── pages            # Route-based components
│
├── server               # Django Backend
│   ├── apps             # Routine, Auth, Game APIs
│   ├── templates        # Admin & export templates
│   └── static           # Static files (admin panel)

🧑‍💻 Job React Native 📱

Job React Native is a mobile application built using React Native with Expo. The app allows users to search for job listings using the Search API provided through RapidAPI. Users can search for jobs based on keywords and view job details such as title, company, and location.

🎉 Features

🔍 Job Search: Search for jobs using the Search API from RapidAPI.
📝 View Job Details: View detailed information for each job listing (title, company, location, etc.).
📱 Cross-platform: Built with React Native and Expo, works seamlessly on both iOS and Android.
🧭 Navigation: Utilizes the Expo Router for efficient routing and navigation in the app.
🛠️ Technologies

React Native: A framework for building native apps using React.
Expo: A framework and platform for universal React applications that simplifies the development and testing process.
EAS (Expo Application Services): For cloud-based builds and updates.
RapidAPI: Integrated with Search API to fetch job listings.
🚀 Getting Started

Follow these steps to get started with the project locally:

📥 Prerequisites
Ensure you have the following installed:

Node.js (version 16+ recommended)
Expo CLI: To run and build the app locally.
Install Expo CLI globally:

npm install -g expo-cli
Git: To clone the repository.
🔥 Clone the Repository
Clone the repository to your local machine:

git clone https://github.com/yourusername/job-react-native.git
cd job-react-native
📦 Install Dependencies
Install the required dependencies with npm:

npm install
🏃 Run the Development Server
Start the development server with Expo:

expo start
This will open the Expo developer tools in your browser, and you can scan the QR code using the Expo Go app on your mobile device (available on iOS and Android).

🌍 Using the RapidAPI Search API

The app integrates with the Search API from RapidAPI to fetch job listings. To use the API, you'll need to create a RapidAPI account and obtain your API key.

1️⃣ Create a RapidAPI Account
Sign up for an account at RapidAPI.
Find the Search API (or any job search API) and get your API key.
2️⃣ API Integration
Once you have the API key, you can integrate it into your app. 

🗂️ Project Structure

The project is organized as follows:

/job-react-native
│
├── /assets # Static assets like images, fonts, etc.

├── /src # Main source code for the app

│ ├── /components # Reusable UI components

│ ├── /screens # Screens (e.g., Job search, Job details)

│ ├── /services # API calls and other business logic

│ └── /navigation # Navigation setup (using Expo Router)

├── /node_modules # Installed npm dependencies

├── /android # Android-specific build files

├── /ios # iOS-specific build files

├── app.json # Expo app configuration

├── eas.json # EAS build configuration (for cloud builds)

├── package.json # Project configuration and dependencies

└── README.md # This file

⚙️ EAS Build Configuration

For building and submitting the app using EAS (Expo Application Services), configure your eas.json file for the project.

You can modify the bundleIdentifier and package values to match your app’s details.

🐛 Troubleshooting

If you encounter issues with building or running the app, try these solutions:

1️⃣ Clean the Project (for Android)
cd android
./gradlew clean
cd ..
2️⃣ Clear Expo Cache
expo start -c
3️⃣ Build the App
To build the app using EAS:

For Android:

eas build --platform android
For iOS:

eas build --platform ios
🤝 Contributing

Feel free to fork the project and submit pull requests if you'd like to contribute! Please follow these steps:

Fork the repository.
Create a feature branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
📝 License

Tutorial link : https://www.youtube.com/watch?v=mJ3bGvy0WAY&t=2773s

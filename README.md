# React Weather App

This project is a simple weather application built with React. The app lets users search for any city and displays the current weather using real-time data from the OpenWeatherMap API. The goal was to practice working with APIs, React components, props, state, and hooks like `useEffect`.

---

## Features
- Search for weather by city name  
- Displays temperature, description, humidity, feels-like, and weather icon  
- Uses props to pass data between components  
- `useState` for data handling  
- `useEffect` for loading weather when the city changes  
- Simple UI with a weather card layout  

---

## API Used
**OpenWeatherMap – Current Weather API**  
https://openweathermap.org/current

Example endpoint used in this project:

https://api.openweathermap.org/data/2.5/weather?q={city}&appid=YOUR_API_KEY&units=metric



## How to Run the Project

1. Clone the repository:
https://github.com/yourusername/weather-app.git

2. Install dependencies:
npm install

3. add your API key
- open the scr/App.js
- replace my api key with yours

4. Run the app
- npm start

5. Oepn the app in browser or it open by itself. usually port 3000
- somthing like this: http://localhost:3000

## Screenshots

## App:
![WeatherReactAppLabTest2](https://github.com/user-attachments/assets/803cbda4-f2f5-463d-8339-73dccc1f5047)

## postman verication to API:
![TorontoPostmanAPItest](https://github.com/user-attachments/assets/ec43b941-4b01-42aa-a6cf-c2c16101bbe2)
![LondonPostmanAPItest](https://github.com/user-attachments/assets/91a4f9a7-3cd7-44ec-853b-142988223bfe)


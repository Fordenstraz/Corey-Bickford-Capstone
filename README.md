# Welcome to FRIZL!

## (Flexible Resource and Implementation Zone for Lessons)

## This application is in developement

### If you would like to take a look around before it is finished you can follow these steps:

1. The first step is to set up a developement environment, if you don't have one already:
  - [Download Microsoft Visual Studio Code](https://code.visualstudio.com/Download "Download VSCode")
  - [Download Node.js](https://nodejs.org/en/download/package-manager "Node.js download")
  - Download the zipped version of this project, or [Clone this repository to your machine](https://github.com/Fordenstraz/Corey-Bickford-Capstone.git "Clone this repo")

2. Next, navigate to this project in whatever directory it has been installed:
     - Right-click onm the folder and select "Open with Code", next to the blue VSCode icon
     - Open a terminal window by pressing "CTRL + SHIFT + ` " all at once
     - In the terminal navigate to the root folder of the project `CD parent_folder/projects/Corey-Bickford-Capstone`
  
3. Then run `npm install` to install all project dependencies.

4. Fill in both of the .env.sample files, one in each project folder:
     - For the 'frizl-frontend' .env file you can use "http://localhost:8080" as the "VITE_API_URL"
     - For the 'frizl-server' .env file you only need to fill in "PORT=5050", and "CORS_ORIGIN=http://localhost:5173"

### Now you are ready to go take a peak at FRIZL:

#### The App
To run the app navigate to `CD /frizl-frontend`, then enter `npm start`.
The app will now be hosted locally, on port '5173'.
Open a web browser and go to [The locally hosted app](http://localhost:5173/ "FRIZL, hosted on port 5173").
The login page does not require any credentials at the moment. Hitting the "Login" button will take you through to the dashboard.

#### The Server
To run the server navigate to `CD /frizl-server`, then enter `npm start`.
A confirmation message will pop up in the terminal to alert you of a success, and tell you what port the server is running on. 
You will now be able to test out any of the API calls! [You can use Postman for API testing](https://www.postman.com/downloads/ "Download Postman")
(admittedly, there isn't much to explore here yet.)

# ticker_application instructions

Simple instructions on starting ticker application

1) Unzip and extract both the ticker-backend and ticker-ui file directories
   OR git clone from their respective repositories.
2) Access the ticker-backend folder directory through the command prompt (e.g cd Users/Downloads....).
3) Type in the command `npm install` to setup the dependencies for the backend.
4) Access the ticker-ui folder directory and repeat step 3.
5) Once dependencies are setup, start up the ticker-backend server by typing in	
`node server.js`. (command must be typed within ticker-backend directory)
6) Once backend is setup and running, setup the frontend by typing in `npm start`
within the UI folder directory. Click on `Yes` when the prompt `Would you like to run the app
on another port` pops up in the command prompt.
7) Once everything is setup, if successful, the application page will show up 
and it will display the latest 5 rows of transactions.
8) The table will update itself when the price is updated.
**<span style="color:red">Paused due to a change in the IMDB API policies that interrupts its free service.</span>**
  
  
  <img src="https://cdn.discordapp.com/attachments/894702938386210896/997024365529014302/Logo.png" width="350" title="Logo Image">

Web App where you can find series or movies to watch. It works by selecting genres and then the titles will be displayed sorted by their rating on review sites.

First you have to create the .env file with the information/variables provided in the ".env-template" file by entering your own Api Key from the IMDB site. (Link to create an account and get the key for free: https://imdb-api.com/).

Then run ```npm install``` in the terminal to install the dependencies and finally run ```npm run start``` to start the application.

Please note that the free Api Key is limited to 100 queries per day. For each general search, one query is taken into account, while for the search for "more info/Go to IMDB" or "trailer" once the general search is carried out, each of these will be taken as one more query.



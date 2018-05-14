# `Github viewer` — AngularJS apps

App to see information about github users and it's repositories.
1. The app will display the list of first 30 github users(Username, avatar, link to home page and link to their repositories), http://localhost:8000/#!/users. You can:
 - Display more users with button in the botton of the page
 - Go to the home page of each user(home page will be open on a new tab)
 - Go to repositories page(http://localhost:8000/#!/users/{userId}/repositories) 
 
2. The app will display the github user's repositories page. You can:
 - See all the repositories paginated
 - Go to repostory home page
 - See the number of open issues
 - See the number of forks

## Tools used
The follow app is created with:
 1. Angular 1.5
 2. Bower 1.7
 2. Bootstrap 4
 3. font awesome
## Usage
1. Install NodeJs(last LTS version)
2. intall bower global, `npm install -g bower`
3. On the app root path execute `npm install`
4. then `bower install`
5. then `npm start`. This will serve the app in http://localhost:8000.
6. Open any browser and go to http://localhost:8000.

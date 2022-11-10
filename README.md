# IBM CIC Whiteboard App
This project has been developed over the course of 8 hours as a result of the IBM CIC hiring test.
When working on this project I wanted to showcase my skills as a fullstack developer, and I have therefore chosen to work with a mixture of frontend and backend, through the use of React, Material UI and Firebase.

## Case and technologies
I have chosen to work with the Virtual Whiteboard case, as this seemed like the most interesting case, and the one where I would best be able to showcase my skills.
The app consists of a main page, a login page, a signup page, and a 'forgot password' page, all of which have been made using react. I have chosen to work with react because I have some experience from previous projects, and I think it is a powerful tool for developing web apps, and the bootstrapping process is very fast and easy, so I can start doing actual work quickly.
The backend of the app is primarily handled through Firebase, here I have used Firestore for the persistence of data, and Auth for login/signup/forgot password. I have chosen to use Firebase because it is a fast and easy way to set up a persistence backend, as well as an authentication service, again by reducing the time it takes to set up these process, I can focus on what I really want to work with: The application itself.
I have chosen to use a couple of icons from the Material-UI library in order to make the application more user-friendly.
I would have preferred to be able to wrap the project in a docker container so it would be easy to deploy, but as I don't have a lot of experience (yet) working with docker, I have chosen to put my focus elsewhere, namely on the app itself.

## The result
I have chosen to make a small web app where anyone can sign up, to access a virtual whiteboard.
Once you are signed up and logged in to the application, you can create notes, which can be moved around, edited, and deleted again.
If you forget your password or want to change it, there is also a possibility to get a 'reset password' email to reset it.
Users are only able to edit and delete their own notes, however anyone is able to move a note, no matter who has placed it.
Notes are editable by clicking on their text, and when creating a new note, the default text has a hint saying how to edit it.
Icons from Material-UI have been used to provide affordances for the users, to try to make it easy to see how to interact with the app.

## Future ambitions / possibilities
If I had more time, I would have liked to flesh out the functionality of the app further.
I would like to make notes resizable, as well as able to carry embeds, if someone makes a note with a link to a video or an image.
I would have also liked to make more role management, so a user can be appointed as an admin or moderator, and manipulate all notes instead of just their own.
Signatures on notes so you can see who has posted what would also be useful, as well as the possibility for users to pick a nickname for the site.
The general UI of the app could also be improved significantly, as it is very barebones right now.
There are a few issues with the drag-and-drop feature of the notes currently, if you drag a note over another note with a higher Z-index, it grabs that note instead. I am not sure how to resolve this currently, but would like to fix this if I kept working on the project.
Finally, it would be useful to be able to host multiple boards on the app, so everyone doesn't have to share one board, in case the app is used by multiple groups or teams.

## Final notes
I hope you enjoy this small application that I have made, I certainly enjoyed making it. 
It's always fun to work on small projects like this.


# Build instructions (default react instructions)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
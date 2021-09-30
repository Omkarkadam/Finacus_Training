# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Project-1: Creating a Textutils app.

Description of our app: It is a text document editor. It will contain a Text box in which we will be adding our text.

Some of its features will be:

Word Counting.
Removing Extra spaces.
Capitalizing the text of the document.
Adding Lowercase and uppercase to the text.
Adding Bootstrap to our React App (Textutils)

Bootstrap: It is the framework of CSS. With the help of Bootstrap, you can easily put UI components to your Application. To access Bootstrap click here.

In the Documentation of Bootstrap, we will find the starter template which has two main things for adding bootstrap in our application.

1. Bootstrap bundle with popper: It contains the Jquery files, Bootstrap.js, and popper.js files. Copy the code and paste it inside the body tag of  index.html of your react application.



Figure 1.3: Adding JS of Bootstrap

 

2. Bootstrap CSS: It contains the CSS files to enhance your application. Copy the code of Bootstrap CSS and add it inside the head tag of Index.html( In the Public folder) of your application.



Figure 1.4: Adding CSS of Bootstrap

Now we can use the components of Bootstrap in our Application. Open App.js and Remove the Previous content from return(). Let’s begin creating our application.



Figure 1.5: Function-based component

 

Navbar of our app

Get the Navbar component from the Bootstrap Component section and paste it inside the return(). Make sure of the following things while doing so:

Close those tags which don't have a closing tag. 
Replace the ‘class’ keyword with ‘ClassName’.
Replace href= “#” with href= “/”
The code must be in one tag or use a JSX fragment.
 

Edit the Bootstrap component

You can override the Bootstrap CSS code and replace it with your desired one. You can even delete those components which aren’t required.

Point to remember: Whenever you are building the app for production, you should use the npm run build command instead of npm start to host your application.

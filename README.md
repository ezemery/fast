This project was bootstrapped with NextJS.

### How it works
The website is made up of pages. Pages are divided into components. Reusable components are stored in the shared directory. Pages are connected to the store and can pass props down to needing components. We try to reduce number of connected components.

We use the pattern start => Success/Error for our async actions. All async actions has a corresponding reducer and selectors(if needed). We are not rigid on our pattern. We hope to be more disciplined.

## Technologies
The project is made up of interesting technologies like:

- Redux: A predictable state for Javascript apps. We have used redux to hold our shareable state. You can find more [here](https://redux.js.org/introduction/getting-started)

- Contentful: We are Fast and we launch products Fast. Contentful allows us to achieve this. Our contents are being managed by contentful. Read [more](https://www.contentful.com/get-started/) on how to get started.

- Redux-thunk: Since we are using redux to hold our app state, redux is design to handle synchronous actions by default. But we need to talk to systems outside our app. Redux-thunk will manage our async actions. It acts as a middleware that dispatches actions for us. Read more [here](https://github.com/reduxjs/redux-thunk)

- Styled-compomponent: We are gradually migrating to styled-components. We believe CSS-in-Js is the future, hence the migration. Find more [here](https://www.styled-components.com/)

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Deployment

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


### `yarn start`

Starts the project on port 3000







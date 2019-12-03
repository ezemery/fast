This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

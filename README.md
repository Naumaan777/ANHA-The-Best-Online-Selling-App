# ANHA-The-Best-Online-Selling-App


## Overview 📖

This is a React application that simulates a basic e-commerce platform. The application demonstrates the use of React components, state management with Redux, routing with react-router, and API integration.

## Tech Stack Used 💻

- HTML
- CSS
- JS
- NextJS
- Sanity
- Integrating API for data collection and display

## Features 🌟

- **Redux for State Management**: The application uses Redux for state management. Alternatively, React's Context API can be used.

- **Header**: The header displays a navigation bar with links to Home, Cart, and (optional) About pages.

- **Home**: The home page displays a list of products. Each product has a title, image, price, and an "Add to Cart" button.

- **ProductPage**: This page displays detailed information about a single product. This page is accessible by clicking on a product in the Home page.

- **Cart**: The cart page displays the items added to the cart. Each item has a title, price, and a "Remove from Cart" button.

## Use 🌐

`Routes`

- `/product/:id`: This route loads the ProductPage component, where :id is the dynamic parameter representing the product ID.

- `/cart`: This route loads the Cart component.

The Header component is always visible at the top of the page, regardless of which route is active.

`State Management`

The application uses Redux or React's Context API to manage the application's state, particularly for storing and updating the items in the cart. Actions and reducers (if using Redux) or a context provider (if using Context API) are implemented to handle adding and removing items from the cart.





## Demo 📸

### URL : 

- Home Page/Landing Page



- Cart Directory Page




- Sell Item List Page



- Payment Page




## Getting Started with Create Next App 🚀

In the project directory, pls run this several commands:

- `npm start`: Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes the single build dependency from your project.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

## How to Run This Project Locally

1. Clone this repository and navigate into it:
    ```
    git clone <repo-url>
    cd <repo-name>
    ```

2. Install all dependencies:
    ```
    npm install
    ```

3. Navigate into the `sanity-ecommerce` folder and install all Sanity dependencies:
    ```
    cd sanity-ecommerce
    npm install
    ```

4. Create a `.env.local` file in the root directory and add the following:

    ```env
    # SANITY
    # Go to the API section of your Sanity project, create a new token and copy it
    # Choose token permissions depending on your needs
    # @link https://www.sanity.io/manage
    NEXT_PUBLIC_SANITY_TOKEN=''

    # STRIPE
    # Go to the developers section of your Stripe account and copy the keys
    # @see https://dashboard.stripe.com/test/apikeys
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=''
    NEXT_PUBLIC_STRIPE_SECRET_KEY=''
    ```

5. Run the following command to start Next.js:
    ```
    npm run dev
    ```

6. Open a new terminal tab, navigate into the `sanity-ecommerce` folder and run the following command to start Sanity Studio:
    ```
    cd sanity-ecommerce
    npm run dev
    ```

7. Go to `http://localhost:3000` to see the app.
8. Go to `http://localhost:3333` to see the Sanity Studio and upload content there.

> **Note:** If you instead need to update content in Sanity Studio for the production version, go to [this link](https://emanuelefavero-ecommerce.sanity.studio/desk).

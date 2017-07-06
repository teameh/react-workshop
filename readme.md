# React Workshop

This repo contains the exercises for a workshop that I give.

It's build a small product list app from scratch with React, Redux, Reselect and React-Css-Modules. Each commit improves the app a bit. Yes it looks ugly and useless, that is not the point.

# Installation

    npm install

# Usage

Build for development

    npm start

Build for deployment

    npm run build

Test

    npm run test

    npm run test:watch

## More Information:

* **React Lifecycle:**

    ![Lifecycle](https://staminaloops.github.io/undefinedisnotafunction/images/react-lifecycle.jpg)

* **Redux:**

    Docs: http://redux.js.org/

    Repo: https://github.com/reactjs/redux

    Video Course: https://egghead.io/courses/getting-started-with-redux

    Redux Flow animated gif: https://mobile.twitter.com/vyacheslav_de/status/728201787191267329/photo/1

* **Reselect:**

    https://github.com/reactjs/reselect

* **Styles:**

    React Css Modules:  https://github.com/gajus/react-css-modules

    Css Modules: https://github.com/css-modules/css-modules

* **Unit Tests:**

    Mocha: https://mochajs.org/

    Chai: http://chaijs.com/guide/styles/#expect / http://chaijs.com/api/bdd/

    Skin-Deep: https://github.com/glenjamin/skin-deep/tree/v0.16.0

## Code Commits:

This is a list of commits hashes of this repo, check the git log for details.
The bullet points are possible exercises you can do.

1. 758ec1f - Hello World
    * Fix proptypes warning
    * Experiment with changing the props of the component
    * Create and include a subcomponent

2. 63f3362 - Subcomponents
    * Add another event handler to one of the components

3. f2221a6 - Product details
    * Create a seperate subcomponent for the 'product details'

4. c84edc1 - Details in own component
    * Highlight the selected product (e.g. bold or underline)

5. 25edf1f - Remove bind in jsx
    * Don't update ProductDetailView when the props don't change

6. 4b1bc3e - Added Redux
    * Connect subcomponent

7. 6adc85a - Added ProductInputView
    * Implement the rest of the code that we need to add new products

8. 80e2dd8 - Adding product finished

9. ad334a6 - Added unit test for adding new product

10. afccdff - Filter products
    * Create a filter using reselect

11. c2ce6db - Filter using reselect
    * Create something else with reselect

12. 413add2 - Added test for component
    * Add more unit tests

13. 8d52424 - Added styles to ProductView
    * Add more styles

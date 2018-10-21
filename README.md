## This is my Personal Website

[![CircleCI](https://circleci.com/gh/Asjas/Personal-Webpage.svg?style=shield)](https://circleci.com/gh/Asjas/Personal-Webpage)
[![BrowserStack Status](https://www.browserstack.com/automate/badge.svg?badge_key=TTJqTEZDclFuV3c1UHVpeGNCL1hsaGZXbXU3OG04VzFuNjNDRExxdFRiND0tLVV1N2ZsOGo4N211dGptaTFHaEhCYlE9PQ==--451520ee32398ab5e14c4e497ba8651498182be5)](https://www.browserstack.com/automate/public-build/<badge_key>)

This project uses the following tech stack:

- Front-End
  - Next.js
  - Styled Components
  - Downshift
  - Formik
  - React Testing Library
  - Storybook

### Getting Started

To get the website up and running locally, you can clone this repo using the following command.

```git
git clone git@github.com:Asjas/Personal-Webpage.git
```

Then execute the following commands to get it installed and running.

```sh
cd Personal-Webpage
git checkout feat/move-to-nextjs
npm install
npm run dev
```

This will start a local server on `http://localhost:3000` that you can open in your browser.

### Storybook

This project uses Storybook.js. To run storybook you can use the following command.

```sh
npm run storybook
```

This will open a new tab in your browser on `http://localhost:9000`. You can then use Storybook to see how the components appear in each story.

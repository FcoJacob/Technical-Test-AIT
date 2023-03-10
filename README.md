# Technical_Test_Azertium

### Task requirements

Feel free to spend all the time you want on the exercise as long as the following requirements are met.

- Please complete the user story below.
- Your code should compile (if necessary) and run in one step. It is ok if there is a build process.
- JavaScript should be used as a platform.
- Feel free to use whatever frameworks / libraries / packages you like.
- Styles can be added with frameworks, libraries, plain css, preprocessors or postprocessors, be imaginative!
- You must use this placeholder URL for getting the images: https://jsonplaceholder.typicode.com/photos

### Nice to have:

- Include tests is a plus.
- The images can’t pop or flicker, they must appear smoothly on the screen.

### User Story

- As a user visiting the root URL
- I can see a grid of images that fill the screen on load
- When I scroll the browser, I see more images loaded
- When I click an image It is removed from the list and disappears

### Acceptance criteria

- The grid should be responsive, showing 2 columns on small devices and more as the device width growths

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

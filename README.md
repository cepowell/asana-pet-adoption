# Cait Powell's Asana WebDev Take-Home Exercise

<b><em> Grading Choice: </em> Growth Focus</b>

### To run this project

Clone git repository. In the root directory, run `npm install` and then `npm start`. This project uses `http-server` to run a local server; the `package.json` file is configured to use the instance of `http-server` in the `node_modules` folder rather than a global installation, but if by chance there is an error, it may be helpful to run `npm install -g http-server`.

### Features
 - All images of dogs for adoption are dynamically loaded from the provided `dogs.json` file - to modify the dogs for adoption, simply modify that file.
 - Images are lazy-loaded, so that only images intersecting the viewport are loaded. This will allow the adoption team to include large numbers of dogs on the page without requiring the browser to load all dog images at once.
 - Image gallery and full-screen image are responsive, and full screen image can be closed with a click or via the escape key.
 - Build tooling enforces correct JavaScript and CSS syntax and minifies JavaScript and CSS before serving it to the browser, further increasing site speed.

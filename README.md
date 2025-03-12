# Description
A [yhwh-script](https://github.com/yhwh-script) project with [SQLite WASM](https://www.npmjs.com/package/@sqlite.org/sqlite-wasm) and simple examples.

# HowTo use
You can create Single File Web-Components in dedicated `.html` files inside the `public/elements` folder. `npm run dev` and `npm run build` will generate maps in `src/elements/index.js` which are being fetched in the `/src/main.js` script for defining your CustomElements.

Please understand that the project structure is leaned on [valid-custom-element-names](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name), i.e. using a dash ("-") is mandatory.

In `/src/publicApis/index.js` you can define APIs for your custom-elements (for example to the SQLite module) via the window object.

Just call:
    npm install
    npm run dev

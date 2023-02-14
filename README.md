# Tredici

[tredici](https://www.npmjs.com/package/tredici) is a simple and modern library that can help you build anything you want.

To install it, just run

```
npm install tredici
```

It includes a various range of helper functions, which include types like:

- Array functions
- String functions
- Math functions (`abs`, `sqrt`...)
- Miscellaneous (`debounce`, `throttle`, `xor`...)

It can be default imported like

```js
import tredici from "tredici";

let root = tredici.sqrt(25); // => 5

let baz = tredici.join("!!", ...["Foo,", "Bar!"]); // => "Foo,!!Bar!"
```

or you can import the single functions

```js
import { abs, xor } from "tredici";

let mod = abs(-42); // => 42

let bool = xor("Foo" == "Bar", sheep.color == "white"); // => true
```

This library is work in progress, and many functions will be added through time.

(and it means 13 in italian ;D, absolutely not inspired by [undici](https://www.npmjs.com/package/undici))

# proxy-tree

## Usage

``` javascript
const proxyTree = require("proxy-tree");

const tree = proxyTree((path, args) => {
	console.log(path, args);
});

tree.a.b.c.d.e.f.g("Hello, World!");

// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ] [ 'Hello, World!' ]
```

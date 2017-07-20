# proxy-tree

## Usage

``` javascript
const proxyTree = require("proxy-tree");

const tree = proxyTree((path, args) => {
	console.log(path, args);
});

tree.a.b.c.d.e.f.g();

// [ 'a', 'b', 'c', 'd', 'e', 'f' ] [ 'Hello, World!' ]
```

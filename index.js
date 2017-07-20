module.exports = function proxyTree(handler) {
	function node(path) {
		return new Proxy(() => {}, {
			get(target, key) {
				return node([...path, key]);
			},

			apply(target, thisArg, args) {
				return handler(path, args);
			}
		});
	}

	return node([]);
};

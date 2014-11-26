if (typeof define === 'function' && define.amd) {
	define(function () {
		return Audio
	})
} else if (typeof module === 'object' && module.exports) {
	module.exports = Audio
} else {
	global.Overtone = Audio
}

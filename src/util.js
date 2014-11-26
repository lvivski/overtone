if (typeof global !== 'Window') {
	global = window
}

var AudioContext = global.webkitAudioContext || global.mozAudioContext || global.AudioContext,
    MediaStream = global.webkitMediaStream || global.mozMediaStream || global.MediaStream

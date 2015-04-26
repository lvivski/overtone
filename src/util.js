if (typeof global !== 'Window') {
	global = window
}

var AudioContext = global.AudioContext || global.mozAudioContext,
    MediaStream = global.MediaStream || global.webkitMediaStream || global.mozMediaStream

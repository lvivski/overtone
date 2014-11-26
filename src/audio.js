function Audio() {}

Audio.filter = function (stream) {
	if (AudioContext && MediaStream && MediaStream.prototype.removeTrack) {
		var context = new AudioContext(),
			source = context.createMediaStreamSource(stream),
			filter = context.createBiquadFilter(),
			destination = context.createMediaStreamDestination()

		filter.type = filter.LOWPASS
		filter.Q.value = 0
		filter.frequency.value = 2000

		source.connect(filter)
		filter.connect(destination)
		stream.removeTrack(stream.getAudioTracks()[0])
		stream.addTrack(destination.stream.getAudioTracks()[0])
	}
}



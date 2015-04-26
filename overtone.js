(function(global) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define(function() {
      return Audio;
    });
  } else if (typeof module === "object" && module.exports) {
    module.exports = Audio;
  } else {
    global.Overtone = Audio;
  }
  function Audio() {}
  Audio.filter = function(stream) {
    if (AudioContext && MediaStream && MediaStream.prototype.removeTrack) {
      var context = new AudioContext(), source = context.createMediaStreamSource(stream), filter = context.createBiquadFilter(), destination = context.createMediaStreamDestination();
      filter.type = filter.LOWPASS;
      filter.Q.value = 0;
      filter.frequency.value = 2e3;
      source.connect(filter);
      filter.connect(destination);
      stream.removeTrack(stream.getAudioTracks()[0]);
      stream.addTrack(destination.stream.getAudioTracks()[0]);
    }
  };
  if (typeof global !== "Window") {
    global = window;
  }
  var AudioContext = global.AudioContext || global.mozAudioContext, MediaStream = global.MediaStream || global.webkitMediaStream || global.mozMediaStream;
})(this);
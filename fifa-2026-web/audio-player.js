(function () {
  var AUDIO_URL = 'https://raw.githubusercontent.com/jaredgg17/audio/main/Shakira%2C%20Burna%20Boy%20-%20Dai%20Dai%20(Audio).mp3';

  var audio = new Audio(AUDIO_URL);
  audio.loop = true;
  audio.volume = 0.7;

  function saveState() {
    sessionStorage.setItem('wc26_audioTime', audio.currentTime);
    sessionStorage.setItem('wc26_audioPlaying', !audio.paused ? 'true' : 'false');
  }

  window.addEventListener('pagehide', saveState);
  window.addEventListener('beforeunload', saveState);

  window.wc26Audio = {
    triggerBall: function () {
      audio.currentTime = 0;
      audio.play().catch(function () {});
      sessionStorage.setItem('wc26_audioPlaying', 'true');
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    var savedTime = parseFloat(sessionStorage.getItem('wc26_audioTime') || '0');
    var wasPlaying = sessionStorage.getItem('wc26_audioPlaying') === 'true';

    if (wasPlaying) {
      audio.currentTime = savedTime;
      audio.play().catch(function () {});
    }
  });
})();

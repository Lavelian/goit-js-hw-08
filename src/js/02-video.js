import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
player.on('timeupdate', throttle(onPlay, 600));

let timeSeconds = localStorage.getItem('videoplayer-current-time');

if (!timeSeconds) {
  return;
} else {
  player.setCurrentTime(timeSeconds);
}

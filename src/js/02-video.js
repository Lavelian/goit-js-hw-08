import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY_VIMEO = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(STORAGE_KEY_VIMEO, data.seconds);
};

function setTime() {
  let timeSeconds = localStorage.getItem(STORAGE_KEY_VIMEO);
  if (timeSeconds) {
    player.setCurrentTime(timeSeconds);
  }
}

setTime();
player.on('timeupdate', throttle(onPlay, 600));

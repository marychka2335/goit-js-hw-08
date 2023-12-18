import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (savedTime !== null) {
  player.setCurrentTime(savedTime);
}
function onPlay(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify({seconds}));
}

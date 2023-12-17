import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(onPlay, 1000));


function onPlay(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(onPlay, 1000));

try {
    const currentVideoOptions = localStorage.getItem("videoplayer-current-time");
    const seconds = JSON.parse(currentVideoOptions).seconds;
    player.setCurrentTime(seconds)
} catch (error) {
    console.log(error.message)
}

function onPlay(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}

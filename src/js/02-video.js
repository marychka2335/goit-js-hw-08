import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const updateCurrentTime = time => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
  };    

player.on('timeupdate', throttle(onPlay, 1000));
const currentVideoOptions = localStorage.getItem("videoplayer-current-time");
const seconds = JSON.parse(currentVideoOptions).seconds;
player.setCurrentTime(seconds);

function onPlay(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify({seconds}));
};

const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const channelSlider = document.getElementById('channel-slider');
const channelName = document.getElementById('channel-name');
const channels = document.querySelectorAll('.channel');

const stationList = [
  {
    name: 'Channel 1',
    src: 'zvuky/test1.mp3'
  },
  {
    name: 'Channel 2',
    src: 'zvuky/test2.mp3'
  },
  {
    name: 'Channel 3',
    src: 'zvuky/test3.mp3'
  },
  {
    name: 'Channel 4',
    src: 'zvuky/test4.mp3'
  },
  {
    name: 'Channel 5',
    src: 'zvuky/test5.mp3'
  }
];

let currentChannel = 0;


channelSlider.setAttribute('max', stationList.length - 1);

function loadChannel(index) {
  currentChannel = index;
  audio.src = stationList[index].src;
  channelName.textContent = stationList[index].name;

  channels.forEach(c => c.classList.remove('active'));
  channels[index].classList.add('active');
  channelSlider.value = index;
}

playBtn.addEventListener('click', () => audio.play());
pauseBtn.addEventListener('click', () => audio.pause());

channelSlider.addEventListener('input', e => {
  loadChannel(Number(e.target.value));
  audio.play();
});

channels.forEach(ch => {
  ch.addEventListener('click', () => {
    const index = Number(ch.dataset.index);
    loadChannel(index);
    audio.play();
  });
});

loadChannel(0);

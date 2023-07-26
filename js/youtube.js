var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'JgzkfO8nYKo',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "JgzkfO8nYKo"
    },
    events: {
      onReady: function (event)  {
        event.target.mute();
      },
    },
  });
}


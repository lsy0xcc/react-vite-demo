import { useEffect, useRef } from 'react';
// import shaka from 'shaka-player/dist/shaka-player.compiled.debug';

let shaka: any;
if (import.meta.env.MODE === 'development') {
  // @ts-expect-error
  shaka = await import('shaka-player/dist/shaka-player.compiled.debug');
} else {
  // @ts-expect-error
  shaka = await import('shaka-player');
}

export default function VideoPlayer() {
  const videoRef = useRef(null);
  useEffect(() => {
    const onError = (...params: unknown[]) => {
      console.error(params);
    };
    const manifestUri =
      'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';
    const init = async () => {
      shaka.polyfill.installAll();
      if (shaka.Player.isBrowserSupported()) {
        console.log('here');
        const video = document.getElementById('video');
        const player = new shaka.Player(video);
        player.addEventListener('error', onError);
        try {
          await player.load(manifestUri);
          console.log('The video has now been loaded!');
        } catch (e) {
          console.error(e);
        }
      } else {
        console.error('Browser not supported!');
      }
    };
    init();
  }, []);
  return (
    <video
      id="video"
      width="640"
      poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
      controls
      autoPlay
      ref={videoRef}
    />
  );
}

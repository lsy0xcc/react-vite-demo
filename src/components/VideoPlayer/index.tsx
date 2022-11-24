/* eslint-disable @typescript-eslint/no-unused-vars */
import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
// import shaka from 'shaka-player/dist/shaka-player.compiled.debug';
import 'shaka-player/dist/controls.css';

let shaka: any;
if (import.meta.env.MODE === 'development') {
  // @ts-expect-error
  shaka = await import('shaka-player/dist/shaka-player.ui.debug');
} else {
  // @ts-expect-error
  shaka = await import('shaka-player/dist/shaka-player.ui');
}

const videoContainerCss = css`
  width: fit-content;
`;
// const manifestUri =
//   'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

export default function VideoPlayer({ manifestUri }: { manifestUri: string }) {
  const videoRef = useRef(null);
  const containerRef = useRef<any>(null);
  const initRef = useRef(true);
  const [videoPlayer, setVideoPlayer] = useState<any>(null);
  // const [videoUi, setVideoUi] = useState<any>(null);

  useEffect(() => {
    let player: any;
    let ui: any;
    // initRef.current = false;
    const onError = (...params: unknown[]) => {
      console.error(params);
    };
    const init = async () => {
      shaka.polyfill.installAll();
      if (shaka.Player.isBrowserSupported()) {
        player = new shaka.Player(videoRef.current);
        player.addEventListener('error', onError);
        ui = new shaka.ui.Overlay(
          player,
          containerRef.current,
          videoRef.current,
        );
        ui.configure({
          addSeekBar: false,
          controlPanelElements: [
            'play_pause',
            'time_and_duration',
            'spacer',
            'mute',
            'volume',
            'overflow_menu',
            'fullscreen',
          ],
          overflowMenuButtons: ['quality'],
        });

        // try {
        //   await player.load(manifestUri);
        //   console.log('The video has now been loaded!');
        // } catch (e) {
        //   console.error(e);
        // }
        setVideoPlayer(player);
      } else {
        console.error('Browser not supported!');
      }
    };
    if (initRef.current) {
      initRef.current = false;
      init();
    }
    return () => {};
  }, []);

  useEffect(() => {
    if (videoPlayer) {
      videoPlayer.load(manifestUri);
    }
  }, [manifestUri, videoPlayer]);
  return (
    <div data-shaka-player-container ref={containerRef} css={videoContainerCss}>
      <video
        data-shaka-player
        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
        ref={videoRef}
      />
    </div>
  );
}

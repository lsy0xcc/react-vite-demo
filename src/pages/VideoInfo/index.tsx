import VideoPlayer from '../../components/VideoPlayer';

export default function index() {
  return (
    <div>
      <VideoPlayer manifestUri="https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd" />
    </div>
  );
}

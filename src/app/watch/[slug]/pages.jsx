import { useRouter } from 'next/router';

const VideoPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Now Playing: {slug.replace("-", " ")}</h1>
      <video controls>
        <source src={`/videos/${slug}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPage;
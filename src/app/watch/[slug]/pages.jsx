
import { useParams } from "next/navigation";
const  Watch = () => {
  
 const { slug } = useParams() || {}; //
  

  return (
    <div>
      <h1>Now Playing: {slug.replace("-", " ")}</h1>
      <video controls>
        <source src={`/videos/${slug}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
};

export default Watch;






import { Video_Uri } from "@/app/layout";
// import Video from 'next-video';
// import { uri } from "../../page.jsx";
export default async function VideoPreview({ params }) {
    const uri = "https://www.stream.xxxvideoss.site"

    Video_Uri
    const { id } = await params; // Ensure params is awaited properly
    if (!params) return <div>Loading...</div>; // Handle case where params is not ready
    const res = await fetch(`${uri}/api/stream/video?id=${id}`, { cache: "no-store" });
    let video_data = await res.json().then((data) => data);
    if (!video_data) return <div>Loading...</div>; // Handle case where video is not ready
    if (video_data.error) return <div>{video.error}</div>; // Handle error case

    console.log(video_data);

    let video =Video_Uri+ video_data.video;
    if (!video) return <div>Loading...\n Error !</div>; // Handle case where video is not ready

    return (
        <main>
            <video controls width="640">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <br/>

            <div className="flex">
            {/* <Video src="https://pub-a919e0e7442047299d7072ac1b2ab5d0.r2.dev/temp_video.mp4"/> */}
            </div>
            <div className="footer">
                <h1>{video_data.title}</h1>
                <hr/>
                <p>Duration: {video_data.duration}</p>
                <br/>
                <h3>tags : <span> </span> 
                {video_data.tagsList.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                        {index !== video_data.tagsList.length - 1 && ", "}
                    </span>
                ))}
                    </h3>
                
            </div>
        </main>
    );
}



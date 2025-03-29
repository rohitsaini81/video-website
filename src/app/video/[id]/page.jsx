// import { uri } from "../../page.jsx";
export default async function VideoPreview({ params }) {
    const uri = "https://www.stream.xxxvideoss.site"

    const { id } = await params; // Ensure params is awaited properly
    if (!params) return <div>Loading...</div>; // Handle case where params is not ready
    const res = await fetch(`${uri}/api/stream/video?id=${id}`, { cache: "no-store" });
    let video_data = await res.json().then((data) => data);
    if (!video_data) return <div>Loading...</div>; // Handle case where video is not ready
    if (video_data.error) return <div>{video.error}</div>; // Handle error case

    let video =video_data.video.split("/") 
    video = `${uri}/files/${video[video.length - 1]}`;

    return (
        <main>
            <video controls width="640">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <br/>
            <div className="footer">
                <h1>{video_data.title}</h1>
                <hr/>
                <p>Duration: {video_data.duration}</p>
                <br/>
                {video_data.title ==video_data.tag ?<></>:
                <h3>tags : <span>{video_data.tag}</span></h3>
                }
            </div>
        </main>
    );
}



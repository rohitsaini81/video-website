export default async function VideoPreview({ params }) {
    const res = await fetch(`http://127.0.0.1:8080/search?id=${params.id}`, { cache: "no-store" });
    const video = await res.json();

    return (
        <main>
            <h1>{video.title}</h1>
            <p>Duration: {video.duration}</p>
            <video controls width="640">
                <source src={video.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="footer">
                <h3>tags : <span>{video.tag}</span></h3>
            </div>
        </main>
    );
}



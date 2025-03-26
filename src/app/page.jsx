import Card from "./components/Card.jsx";
const uri = "http://stream.xxxvideoshub.in"
// Adjust import path if needed
export default async function HomePage() {
  let videos = [];

  try {
    const response = await fetch("http://stream.xxxvideoshub.in/api/stream/videos", { cache: "no-store" }); 
    videos = await response.json();
  } catch (error) {
    console.error("Error fetching videos:", error);
  }

  return (
    <>
      <hr />
      <h1><span className="gulabi">Sweets</span></h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {videos.map((data, index) => (
          <Card
            key={index}
            id={data.id}
            image={data.image}
            title={data.title}
            duration="2h 30m"
          />
        ))}
      </div>
    </>
  );
}

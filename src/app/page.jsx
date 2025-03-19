import Card from "./components/Card";
import axios from "axios";

export default async function HomePage() {
  const response = await axios("http://127.0.0.1:8080/videos");
  const videos = await (response.data)

  return (
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
  );
}

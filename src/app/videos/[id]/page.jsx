// import { uri } from "../../page.jsx";
export default async function Videos({ params }) {
    const uri = "https://www.stream.xxxvideoss.site/api/stream/category?type=";
    let Category = "";
      const { id } = await params; 
      if(id === "1") Category = "Amateur";
      if(id === "2") Category = "Anal";
        if(id === "3") Category = "Asian";
        if(id === "4") Category = "BBW";
        if(id === "5") Category = "BDSM";
        if(id === "6") Category = "Big Boobs";
        if(id === "7") Category = "Big Butts";
        if(id === "8") Category = "Blowjob";
        if(id === "9") Category = "Creampie";

      if (!params) return <div>Loading...</div>; // Handle case where params is not ready
      const res = await fetch(`${uri}+${"porn"}`, { cache: "no-store" });
      console.log(res)
      if (!res.ok) {
          throw new Error("Failed to fetch data");
      }
      return (
          <main>
              <h1>Category : {Category}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* {res.json().map((video) => (
                      <div key={video.id} className="p-4 border rounded">
                          <h2>{video.title}</h2>
                          <img src={video.image} alt="X" />
                          <p>{video.duration}</p>
                      </div> */}
                  {/* ))} */}
              </div>
          </main>
      );
  }
  
  
  
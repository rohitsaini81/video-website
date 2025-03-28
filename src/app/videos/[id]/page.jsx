// import { uri } from "../../page.jsx";
export default async function Videos({ params }) {
    const uri = "https://www.stream.xxxvideoss.site"
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
    //   const res = await fetch(`${uri}/api/stream/video?id=${id}`, { cache: "no-store" });

  
      return (
          <main>
              <h1>Category : {Category}</h1>
              <div className="footer">
                <h3>Copyright 2025 rohit saini</h3>
              </div>
          </main>
      );
  }
  
  
  
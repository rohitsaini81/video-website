


export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.toString(); // Get all query parameters as a string
  // console.log("query : ",query)
  // const externalUrl = `https://www.stream.xxxvideoss.site/api/stream/category?${query}`;
    const externalUrl = `http://localhost:3000/api/stream/category?${query}`;
  // console.log("externalUrl : ",externalUrl)

  try {
    const response = await fetch(externalUrl);
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Allow frontend to access it
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

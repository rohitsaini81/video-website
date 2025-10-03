import Link from "next/link";

export default function Card({ id, image, title, duration }) {
  const uri = "https://pub-a919e0e7442047299d7072ac1b2ab5d0.r2.dev";
  const altImage = "/dance.gif";
  console.log("Image URL:", image);
  let image2 = image === "false" || image === false ? altImage : `${uri}/files/${image.split("/").pop()}`;

  return (
    <div className="w-full sm:w-60 bg-pink-100 border border-pink-200 rounded-lg shadow-lg overflow-hidden">
      <Link href={`/watch/${title}`}>
        <img className="w-full h-[40%] object-cover" src={image2} alt={title} />
      </Link>
      <div className="p-4 text-center">
        <Link href={`/watch/${title}`}>
          <p className="text-lg font-bold text-gray-800">{duration}</p>
        </Link>
        <p className="text-gray-700 mt-1">{title}</p>
        <Link
          href={`/watch/${title}`}
          className="mt-4 inline-block bg-pink-200 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-pink-300 transition"
        >
          Watch and More
        </Link>
      </div>
    </div>
  );
}

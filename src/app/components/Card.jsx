import Link from "next/link";
// import { uri } from "../layout";
export default function Card({ id, image, title, duration }) {
    const uri = "https://www.stream.xxxvideoss.site";
    const altImage = "/dance.gif";

    // Check if `image` is invalid
    let image2 = (image =="false" || image === false) ? altImage : `${uri}/files/${image.split("/").pop()}`;

    // const video2 = "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"

    return (
        <>
            <div className="w-[10rem] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/video/${id}`}>
                <img className="w-[100px] mx-auto bg-gray-30 0rounded-t-lg" src={image2} alt="%" unoptimized="true" />
                </Link>
                <div className="">
                    <Link href={`/video/${id}`}>
                        <p className="font-bold tracking-tight text-gray-900 dark:text-white">{duration}</p>
                    </Link>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{title}</p>
                    <Link href={`/video/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Watch and More
                        {/* <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg> */}
                    </Link>
                </div>
            </div>

        </>
    )
}

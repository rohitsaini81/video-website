import Link from "next/link";
import Search from "@/app/components/Search";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 shadow-md py-3 px-6">
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-between items-center mx-4">
        <div className="flex space-x-6 m-0.5">
          <Link className="text-pink-600 font-semibold hover:text-pink-800" href="/">Home</Link>
          <Link className="text-pink-600 font-semibold hover:text-pink-800" href="/about">About</Link>
        </div>
        <div className="ml-5">
          <Search />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col items-center md:hidden mx-4">
        <div className="flex space-x-6">
          <Link className="text-pink-600 font-semibold hover:text-pink-800" href="/">Home</Link>
          <Link className="text-pink-600 font-semibold hover:text-pink-800" href="/about">About</Link>
        </div>
        <div className="block md:hidden mt-3 w-full">
          <Search />
        </div>
      </div>

      <hr className="my-3 border-pink-300" />
      
      {/* Category Links */}
      <div className="flex flex-wrap justify-center gap-6 mx-4">
        <Link className="text-gray-700 hover:text-pink-600" href="/category/teen">Hot Teens</Link>
        <Link className="text-gray-700 hover:text-pink-600" href="/category/cumshot">cumshot</Link>
        <Link className="text-gray-700 hover:text-pink-600" href="/category/breasts">Big Boobs</Link>
        <Link className="text-gray-700 hover:text-pink-600" href="/category/new">New Fresh Porn</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import Search from "./components/Search";
import GoogleAnalytics from "./Components/GoogleAnalytics";
import Link from 'next/link';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">


   <body>
<GoogleAnalytics />
        <header>
          <nav>
            <Link className="gulabi" href="/">Home</Link> | <Link className="gulabi" href="/about">About</Link> |
            <Search />
            <br />
            <hr />
            <Link className="gulabi" href="/videos/1">Amateur</Link> |
            <Link className="gulabi" href="/videos/2">Anal</Link>  |
            <Link className="gulabi" href="/videos/3">Asian</Link>  |
            <Link className="gulabi" href="/videos/4">BBW</Link>  |
            <Link className="gulabi" href="/videos/5">BDSM</Link>  |
            <Link className="gulabi" href="/videos/6">Big Boobs</Link>  |
            <Link className="gulabi" href="/videos/7">Big Butts</Link>  |
            <Link className="gulabi" href="/videos/8">Blowjob</Link>  |
            <Link className="gulabi" href="/videos/9">Creampie</Link>




            
            
            
            
            
            </nav>
        </header>
        <main>{children}</main>
        <footer>© 2025 My Website</footer>
      </body>
    </html>
  );
}

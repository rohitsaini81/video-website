import Search from "./components/Search";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Link from 'next/link';
import "./globals.css";

export let Video_Uri = "https://pub-a919e0e7442047299d7072ac1b2ab5d0.r2.dev/"
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
            <Link className="gulabi" href="/category/Amateur">Amateur</Link> |
            <Link className="gulabi" href="/category/Anal">Anal</Link>  |
            <Link className="gulabi" href="/category/Asian">Asian</Link>  |
            <Link className="gulabi" href="/category/new">New</Link>  |
            




            
            
            
            
            
            </nav>
        </header>
        <main>{children}</main>
        <footer>© 2025 My Website</footer>
      </body>
    </html>
  );
}

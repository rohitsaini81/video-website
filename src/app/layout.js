import Search from "./components/Search";
import Link from 'next/link';
import "./globals.css";
export const uri = "https://stream.xxxvideoshub.in"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link className="gulabi" href="/">Home</Link> | <Link className="gulabi" href="/about">About</Link> |
            <Search />
            <br />
            <hr />
            <Link className="gulabi" href="/videos/1">category 1</Link> | <Link className="gulabi" href="/videos/2">category 2</Link> | <Link className="gulabi" href="/videos/3">category 3</Link> | <Link className="gulabi" href="/videos/4">category 4</Link>
            | <Link className="gulabi" href="/videos/5">category 5</Link> | <Link className="gulabi" href="/videos/6">category 6</Link> | <Link className="gulabi" href="/videos/7">category 7</Link> | <Link className="gulabi" href="/videos/8">category 8</Link>
            | <Link className="gulabi" href="/videos/9">category 9</Link> | <Link className="gulabi" href="/videos/10">category 10</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2025 My Website</footer>
      </body>
    </html>
  );
}

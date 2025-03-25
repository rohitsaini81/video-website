import Search from "./components/Search";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a className="gulabi" href="/">Home</a> | <a className="gulabi" href="/about">About</a> |
            <Search />
            <br />
            <hr />
            <a className="gulabi" href="/videos/1">category 1</a> | <a className="gulabi" href="/videos/2">category 2</a> | <a className="gulabi" href="/videos/3">category 3</a> | <a className="gulabi" href="/videos/4">category 4</a>
            | <a className="gulabi" href="/videos/5">category 5</a> | <a className="gulabi" href="/videos/6">category 6</a> | <a className="gulabi" href="/videos/7">category 7</a> | <a className="gulabi" href="/videos/8">category 8</a>
            | <a className="gulabi" href="/videos/9">category 9</a> | <a className="gulabi" href="/videos/10">category 10</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2025 My Website</footer>
      </body>
    </html>
  );
}

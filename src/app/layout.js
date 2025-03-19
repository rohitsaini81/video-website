import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2025 My Website</footer>
      </body>
    </html>
  );
}

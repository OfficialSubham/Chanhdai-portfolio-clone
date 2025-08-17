import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-futura antialiased [--pattern-fg:var(--color-line)]/8 bg-primary text-white`}
      >
        {children}
      </body>
    </html>
  );
}

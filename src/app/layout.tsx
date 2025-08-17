import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-futura antialiased [--pattern-fg:var(--color-neutral-900)]/5 bg-primary text-white`}
      >
        {children}
      </body>
    </html>
  );
}

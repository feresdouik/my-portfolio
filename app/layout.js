import "./globals.css";

export const metadata = {
  title: "Feres Douik — Software Developer",
  description: "Portfolio of Feres Douik — web development, Python, AI applications and automation.",
  openGraph: {
    title: "Feres Douik — Software Developer",
    description: "Web development, Python, AI applications and automation.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

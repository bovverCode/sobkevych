import "./globals.css";

export const metadata = {
  title: "Sobkevych Web Development",
  description: "Sobkevych Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

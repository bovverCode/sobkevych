import "@/app/styles/globals.scss";
import { Raleway } from 'next/font/google';

const raleway = Raleway();

export const metadata = {
  title: "Sobkevych Web Development",
  description: "Sobkevych Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className}>
        {children}
    </html>
  );
}

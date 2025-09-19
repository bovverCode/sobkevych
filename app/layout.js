import "@/app/styles/globals.scss";
import { Raleway, Press_Start_2P } from 'next/font/google';

const raleway = Raleway();
export const logoFont = Press_Start_2P({
  weight: '400'
});

export const metadata = {
  title: "Sobkevych Web Development",
  description: "Sobkevych Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className}>
      <body>
        {children}
      </body>
    </html>
  );
}

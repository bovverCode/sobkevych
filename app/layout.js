import "@/app/styles/globals.scss";
import { Raleway } from 'next/font/google';

const raleway = Raleway();

export const metadata = {
  title: "Sobkevych Web Development",
  description: "Sobkevych Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className} suppressHydrationWarning>
      <head>
        <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    const html = document.documentElement;
                    const theme = localStorage.hasOwnProperty('schema') ? localStorage.getItem('schema') : 'light';
                    html.dataset.theme = theme;
                  } catch (e) {}
                })();
              `,
            }}
         />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

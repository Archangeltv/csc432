import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import CookiesModal from "@/components/CookiesModal";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "URL Shortener - Simplify & Share Your Links",
  description:
    "Experience the power of simplicity with URL Shortener! Shorten, customize, and track your URLs for free. Enhance your digital marketing & improve link sharing with our user-friendly platform.",
  keywords:
    "URL shortener,Link management,Short link,Custom URL,Digital marketing tool,Link tracking,Free URL shortener,Shareable links,Online marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {" "}
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-vis/dist/style.css"
        />
      </head>
      <script
        async
        src="https://kit.fontawesome.com/a7908c27f8.js"
        crossorigin="anonymous"
        strategy="lazyOnload"
      ></script>

      <body className={poppins.className}>
        <CookiesModal />
        {children}
      </body>
    </html>
  );
}

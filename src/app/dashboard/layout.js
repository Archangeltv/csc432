import "./../globals.css";
import { Inter, Poppins } from "next/font/google";
import CookiesModal from "@/components/CookiesModal";

import DashNav from "@/components/dashboard/DashNav";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard - URL Shortener",
  description: "Manage your links with ease.",
  keywords:
    "URL shortener,Link management,Short link,Custom URL,Digital marketing tool,Link tracking,Free URL shortener,Shareable links,Online marketing",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <script
        async
        src="https://kit.fontawesome.com/a7908c27f8.js"
        crossorigin="anonymous"
        strategy="lazyOnload"
      ></script>

      <body className={poppins.className}>
        <div className="flex">
          <DashNav />
          {children}
        </div>
      </body>
    </html>
  );
}

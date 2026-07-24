import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import SiteCursorBackground from "@/components/site-cursor-background";

export const metadata = {
  title: "Xai – Intelligence Workspace",
  description: "An interactive AI product experience that transforms raw data into structured intelligence, insight, and automations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <SiteCursorBackground />
        <div className="site-content-veil" aria-hidden="true" />
        <div className="site-bg">
          <div className="mesh mesh-one" />
          <div className="mesh mesh-two" />
          <div className="mesh mesh-three" />
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

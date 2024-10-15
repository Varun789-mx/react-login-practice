
import localFont from "next/font/local";
import { Videocard } from "./components/Videocard";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [Title, setTitle] = useState({
    title: "Shahruk khan latest video",
    views: "47mn",
    Img:"/image.png",
    name: "MRWHOSETHEBOSS",
    
  });
  return (
    <div>
      <Videocard Title={Title} />
    </div>
  );
}

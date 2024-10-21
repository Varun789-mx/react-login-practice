import localFont from "next/font/local";
import { Appbar } from "./components/Appbar";

import { useState } from "react";
import { Videogrid } from "./components/Videogrid";

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
    views: "47mn || 5 days ago",
    Img: "/image.png",
    name: "MRWHOSETHEBOSS",
    thumb: "/photo.jpg",
  });
  return (
    <div>
      <Appbar />
      <Videogrid />
    </div>
  );
}

import { Videocard } from "./Videocard";

const Videos = [
    {
        title: "Shahruk khan latest video",
        views: "47mn || 5 days ago",
        Img:"/image.png",
        name: "MRWHOSETHEBOSS",
        thumb:"/photo.jpg"
      }, {
        title: "Shahruk khan latest video",
        views: "47mn || 5 days ago",
        Img:"/image.png",
        name: "MRWHOSETHEBOSS",
        thumb:"/photo.jpg"
      }, {
        title: "Shahruk khan latest video",
        views: "47mn || 5 days ago",
        Img:"/image.png",
        name: "MRWHOSETHEBOSS",
        thumb:"/photo.jpg"
      }, {
        title: "Shahruk khan latest video",
        views: "47mn || 5 days ago",
        Img:"/image.png",
        name: "MRWHOSETHEBOSS",
        thumb:"/photo.jpg"
      }, {
        title: "Shahruk khan latest video",
        views: "47mn || 5 days ago",
        Img:"/image.png",
        name: "MRWHOSETHEBOSS",
        thumb:"/photo.jpg"
      }, {
        title: "Shahruk khan latest video",
        views: "47mn || 5 days ago",
        Img:"/image.png",
        name: "MRWHOSETHEBOSS",
        thumb:"/photo.jpg"
      }, {
        title: "Shahruk khan latest video",
        views: "47mn || 5 days ago",
        Img:"/image.png",
        name: "MRWHOSETHEBOSS",
        thumb:"/photo.jpg"
      }
];

export const Videogrid = ()=> {
  return (
    <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4">
      {Videos.map((video: any) => (
        <div>
          <Videocard Title={video} />
        </div>
      ))}
    </div>
  );
}

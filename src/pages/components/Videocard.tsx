export function Videocard({Title}:any) {
  return (
    <div>
      <img className="rounded-xl" src={Title.Img} />
      <div className="grid grid-cols-12 pt-4">
        <div className="col-span-1">
          <img
            className="h-20 w-20 rounded-full col-start-2"
            src="/photo.jpg"
          />
        </div>
        <div className="col-span-11 pl-5">
          <div>{Title.title}</div>
          <div className="col-start-11 text-gray-400 text-base">
            {Title.name}
          </div>
          <div className="col-span-11 text-gray-400 text-base">
            {Title.views}
          </div>
        </div>
      </div>
    </div>
  );
}

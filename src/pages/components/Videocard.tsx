export function Videocard({Title}:any) {
  return (
    <div className="p-3">
      <img className="rounded-xl" src={Title.Img} />
      <div className="grid grid-cols-12 pt-4">
        <div className="col-span-1">
          <img
            className="h-10 w-10 rounded-full col-start-2"
            src={Title.thumb}
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

import { Searchbar } from "./Searchbar";

export const Appbar = () => {
  return (
    <div className="flex justify-between">
      <div>Youtube</div>
      <div>
        <Searchbar />
      </div>
      <div>Sign in</div>
    </div>
  );
};

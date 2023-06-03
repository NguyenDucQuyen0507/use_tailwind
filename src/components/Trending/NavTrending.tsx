import { BiTime } from "react-icons/bi";
import { Movie } from "./moviesData";

const NavTrending = ({ movie }: { movie: Movie }) => {
  return (
    <div className="bg-primary rounded-md shadow-md shadow-primary relative overflow-hidden hover:shadow-lg hover:shadow-primary cursor-pointer">
      <img src={movie.src} alt="" className="w-full" />
      <div className="p-4 text-white">
        <h4 className="text-red-50 text-base">{movie.title}</h4>
        <p className="text-red-50">{movie.main}</p>
      </div>
      <div className="flex justify-between items-center bg-cyan-50 absolute top-2 left-2 rounded p-1 min-w-[20%]">
        <BiTime />
        <h4 className="text-base">{movie.runtime}</h4>
      </div>
    </div>
  );
};

export default NavTrending;

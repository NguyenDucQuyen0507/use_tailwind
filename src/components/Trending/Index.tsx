import { moviesData } from "./moviesData";
import NavTrending from "./NavTrending";
const Index = () => {
  return (
    <>
      <h3 className="border-b-2 border-primary mt-6">Trending</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-12 rounded-sm mt-6">
        {moviesData.map((item, index) => (
          <NavTrending movie={item} key={index} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn hover:scale-125 transition ease-linear duration-300">
          Learn more
        </button>
      </div>
    </>
  );
};

export default Index;

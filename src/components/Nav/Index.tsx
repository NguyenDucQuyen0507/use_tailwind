import { useState } from "react";
import { BiHomeAlt, BiMoviePlay, BiInfoCircle, BiMenu } from "react-icons/bi";
import NavItem from "./NavItem";
const size = "1.5rem";
const items = [
  { label: "Home", icons: <BiHomeAlt size={size} />, active: true },
  { label: "Movies", icons: <BiMoviePlay size={size} /> },
  { label: "About", icons: <BiInfoCircle size={size} /> },
];
const NavHandle = () => (
  <>
    {items.map((item, index) => (
      <NavItem props={item} key={index} />
    ))}
  </>
);
// const NavItemsContainer = () => (
//   <>
//     {items.map((item, index) => (
//       <NavItem props={item} key={index} />
//     ))}
//   </>
// );
const Index = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="h-full bg-cyan-400">
      <div className="flex mx-4 justify-between items-center md:block">
        <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right">
          Phimmoi.net
        </h4>
        <BiMenu
          size={size}
          className="cursor-pointer md:hidden"
          onClick={() => setIsMenu(!isMenu)}
        />
      </div>
      <ul className={`mx-4 my-2 md:block ${isMenu ? "" : "hidden"} `}>
        <NavHandle />
      </ul>
    </div>
  );
};

export default Index;

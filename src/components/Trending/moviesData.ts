// import BatmanBegin from "../../assets/img/batman_begin.jpg";
// import Dune from "../../assets/img/dune.jpg";
// import Sing from "../../assets/img/sing_2.jpg";
// import Spider from "../../assets/img/spider_man.jpg";
// import Thedark from "../../assets/img/the_dark_knight_rises.jpg";
// import ThedarkK from "../../assets/img/the_dark_knight.jpg";

// export interface Movies {
//   src: string;
//   title: string;
//   main: string;
//   runtime: string;
// }
// export const renderMovies: Movies[] = [
//   {
//     src: BatmanBegin,
//     title: "Bat man biginer",
//     main: "Nguyen Duc Quyen",
//     runtime: "120m",
//   },
//   {
//     src: Dune,
//     title: "Bat man biginer",
//     main: "Nguyen Duc Quy",
//     runtime: "120m",
//   },
//   {
//     src: Sing,
//     title: "Bat man biginer",
//     main: "Nguyen Duc Quyen",
//     runtime: "120m",
//   },
//   {
//     src: Spider,
//     title: "Bat man biginer",
//     main: "Nguyen Duc Quyen",
//     runtime: "120m",
//   },
//   {
//     src: Thedark,
//     title: "Bat man biginer",
//     main: "Nguyen Duc Quyen",
//     runtime: "120m",
//   },
//   {
//     src: ThedarkK,
//     title: "Bat man biginer",
//     main: "Nguyen Duc Quyen",
//     runtime: "120m",
//   },
// ];
import BatmanBegins from "../../assets/img/batman_begins.jpg";
import Dune from "../../assets/img/dune.jpg";
import Sing2 from "../../assets/img/sing_2.jpg";
import SpiderMan from "../../assets/img/spider_man.jpg";
import TDKRises from "../../assets/img/the_dark_knight_rises.jpg";
import TDK from "../../assets/img/the_dark_knight.jpg";

export interface Movie {
  src: string;
  title: string;
  main: string;
  runtime: string;
}

export const moviesData: Movie[] = [
  {
    src: BatmanBegins,
    title: "Batman Begins",
    main: "Christian Bale",
    runtime: "120m",
  },
  { src: Dune, title: "Dune", main: "Timothée Chalamet", runtime: "120m" },
  { src: Sing2, title: "Sing 2", main: "Matthew McConaughey", runtime: "120m" },
  {
    src: SpiderMan,
    title: "Spider-Man: No Way Home",
    main: "Tom Holland",
    runtime: "120m",
  },
  {
    src: TDKRises,
    title: "The Dark Knight Rises",
    main: "Christian Bale",
    runtime: "120m",
  },
  {
    src: TDK,
    title: "The Dark Knight",
    main: "Christian Bale",
    runtime: "120m",
  },
];

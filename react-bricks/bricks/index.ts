import { types } from "react-bricks";
import { website } from "react-bricks-ui";
import Hero from "./Hero";
import HeroUnit from "./MyHeroUnit";
import Thumbnail from "./Thumbnail";

// React Bricks UI + Custom HeroUnit brick
const bricks: types.Brick<any>[] = [...website, Hero, HeroUnit, Thumbnail];

export default bricks;

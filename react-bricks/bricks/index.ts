import { types } from 'react-bricks'
import { website } from 'react-bricks-ui'
import HeroUnit from './MyHeroUnit'
import Thumbnail from './Thumbnail'

// React Bricks UI + Custom HeroUnit brick
const bricks: types.Brick<any>[] = [...website, HeroUnit, Thumbnail]

export default bricks
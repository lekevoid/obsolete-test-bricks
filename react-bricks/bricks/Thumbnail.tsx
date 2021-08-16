import React from 'react'
import { types } from 'react-bricks'

const Thumbnail: types.Brick = () => {
  return <div className="p-6 text-center">Thumbnail</div>
}

Thumbnail.schema = {
  name: 'thumbnail',
  label: 'Thumbnail',
  getDefaultProps: () => ({}),
  sideEditProps: [],
}

export default Thumbnail
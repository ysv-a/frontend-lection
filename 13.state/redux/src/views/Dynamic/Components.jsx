import { createElement } from 'react'
import { Image, Text, Video } from './FeedComponents'

const Components = {
  image: Image,
  text: Text,
  video: Video,
}

export function DynamicFeed(block) {
  return createElement(Components[block.component], {
    key: block._uid,
    data: block.data,
  })
}

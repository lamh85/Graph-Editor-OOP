import { Polygon } from './polygon.js'

class Square extends Polygon {
  constructor({ length, width, coordinates }) {
    const validatedSize = length || width

    super({
      length: validatedSize,
      width: validatedSize,
      coordinates
    })
  }
}

export { Square }

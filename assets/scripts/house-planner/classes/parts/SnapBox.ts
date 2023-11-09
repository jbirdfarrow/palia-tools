import Konva from 'konva'
import uniqid from 'uniqid'
import type { GridSizing } from '../../types/ConfigOptions'
import { Direction } from '../../imports'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'
import type Dimensions from '@/assets/scripts/utils/types/dimensions'
import { toScale, unscale } from '@/assets/scripts/house-planner/classes/utils/helpers'

export type SnapBoxRect = Konva.Rect & {
  id: string
}

export default class SnapBox {
  private _id: string
  private _baseCoords: Coordinates
  private _baseDimensions: Dimensions
  private _offsetCoords: Coordinates
  private _offsetDimensions: Dimensions
  private _rect: SnapBoxRect
  private _rotation: number = 0
  private _gridSizing: GridSizing

  constructor(
    {
      x, y, width, height,
      offsetX = 0, offsetY = 0,
      offsetWidth = 0, offsetHeight = 0,
      rotation = 0,
    }: {
      x: number
      y: number
      width: number
      height: number
      offsetX?: number
      offsetY?: number
      offsetWidth?: number
      offsetHeight?: number
      rotation?: number
    },
    id: string = uniqid(),
    gridSizing: GridSizing,
  ) {
    this._id = id
    this._gridSizing = gridSizing

    this._baseCoords = { x, y }
    this._baseDimensions = { width: toScale(width, gridSizing), height: toScale(height, gridSizing) }
    this._offsetCoords = { x: toScale(offsetX, gridSizing), y: toScale(offsetY, gridSizing) }
    this._offsetDimensions = { width: toScale(offsetWidth, gridSizing), height: toScale(offsetHeight, gridSizing) }

    this._rect = new Konva.Rect({
      x: this._baseCoords.x,
      y: this._baseCoords.y,
      width: this._baseDimensions.width + this._offsetDimensions.width,
      height: this._baseDimensions.height + this._offsetDimensions.height,
      stroke: 'rgba(0, 0, 0, 10)',
      dash: [10, 10],
      strokeWidth: 1,
      id: this._id,
      offsetX: toScale(offsetX + (width + offsetWidth) / 2, gridSizing),
      offsetY: toScale(offsetY + (height + offsetHeight) / 2, gridSizing),
      rotation,
    }) as SnapBoxRect
  }

  get rect(): SnapBoxRect {
    return this._rect
  }

  updateCoords({ x, y }: Coordinates) {
    this._baseCoords = { x, y }

    this._rect.x = x
    this._rect.y = y
  }

  updateRotation(rotation: number) {
    this._rotation = rotation
    this._rect.rotation = rotation
  }

  getCoords(direction: Direction): Coordinates {
    const { x, y } = this._baseCoords
    const { width, height } = this._baseDimensions
    const offsetX = this._offsetCoords.x
    const offsetY = this._offsetCoords.y

    switch (direction) {
      case Direction.North:
        return {
          x: (x - offsetX),
          y: (y - offsetY) - (height / 2),
        }
      case Direction.East:
        return {
          x: (x - offsetX) + (width / 2),
          y: (y - offsetY),
        }
      case Direction.South:
        return {
          x: (x - offsetX),
          y: (y - offsetY) + (height / 2),
        }
      case Direction.West:
        return {
          x: (x - offsetX) - (width / 2),
          y: (y - offsetY),
        }
    }
  }

  get x(): number {
    return this._rect.x()
  }

  get y(): number {
    return this._rect.y()
  }

  get copy(): SnapBox {
    const width = unscale(this._baseDimensions.width, this._gridSizing)
    const height = unscale(this._baseDimensions.height, this._gridSizing)
    const offsetWidth = unscale(this._offsetDimensions.width, this._gridSizing)
    const offsetHeight = unscale(this._offsetDimensions.height, this._gridSizing)
    const offsetX = unscale(this._offsetCoords.x, this._gridSizing)
    const offsetY = unscale(this._offsetCoords.y, this._gridSizing)

    return new SnapBox(
      {
        x: this._baseCoords.x,
        y: this._baseCoords.y,
        width,
        height,
        offsetX,
        offsetY,
        offsetWidth,
        offsetHeight,
        rotation: this._rotation,
      },
      this._id,
      this._gridSizing,
    )
  }
}

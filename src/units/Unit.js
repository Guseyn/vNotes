'use strict'

class Unit {
  constructor (draw, size, proportion, x, y) {
    this.draw = draw
    this.size = size
    this.proportion = proportion
    this.x = x
    this.y = y
    this.sizeCoefficient = 10
  }

  body () {
    throw new Error('this method must return body of unit')
  }

  svg () {
    const body = this.body()
    const width = this.size * this.sizeCoefficient
    const height = width / this.proportion
    body.size(width, height)
    body.move(this.x, this.y)
    return this.draw.svg()
  }
}

module.exports = Unit

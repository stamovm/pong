const SPEED = 0.02

export default class Paddle {
  constructor(paddleElement) {
    this.paddleElement = paddleElement
    this.reset()
  }
  get position() {
    return parseFloat(
      getComputedStyle(this.paddleElement).getPropertyValue('--position')
    )
  }

  set position(val) {
    this.paddleElement.style.setProperty('--position', val)
  }

  reset() {
    this.position = 50
  }

  update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position)
  }
}

import Ball from './Ball.js'
import Paddle from './Paddle.js'

const ball = new Ball(document.getElementById('ball'))
const playerPaddle = new Paddle(document.getElementById('player-paddle'))
const aiPaddle = new Paddle(document.getElementById('ai-paddle'))

let lastTime
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime

    // ball.update(delta)
    aiPaddle.update(delta, ball.y)
  }
  lastTime = time
  window.requestAnimationFrame(update)
}

document.addEventListener('mousemove', (e) => {
  playerPaddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)

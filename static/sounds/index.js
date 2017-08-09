// Set list of available sounds
const soundboard = [
  { command: 'fireball', src: 'fireball.wav' },
  { command: 'explosion', src: 'explosion.flac' }
]

// Add proper path to files
soundboard.map(item => {
  item.src = `/sounds/${item.src}`
})

export default soundboard

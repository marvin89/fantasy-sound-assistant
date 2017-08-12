<template>

</template>

<script>
// Load Howler library
import { Howl } from 'howler'
import soundboard from '../static/sounds'

// Load annyang library
if (process.BROWSER_BUILD) {
  window.annyang = require('annyang')
}

export default {
  name: 'voice-recognizer',

  mounted () {
    const annyang = (window || {}).annyang

    if (annyang) {
      const commands = {}
      soundboard.map(item => {
        commands[item.command] = () => (new Howl({ src: item.src })).play()
      })

      annyang.addCallback('result', (phrases) => {
        const bestMatch = phrases[0]

        console.log(bestMatch)

        bestMatch.split(' ').map(word => {
          if (commands.hasOwnProperty(word)) {
            commands[word]()
          }
        })
      })

      // annyang.setLanguage('ro-RO')

      annyang.start({ autoRestart: true, continuous: true })
    }
  }
}
</script>

<style>

</style>

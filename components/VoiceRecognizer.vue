<template>
  <a id="sound-trigger" href="">Sound trigger</a>
</template>

<script>
// Load Howler library
// import { Howl } from 'howler'
import soundboard from '../static/sounds'

// Load annyang library
if (process.BROWSER_BUILD) {
  window.annyang = require('annyang')
}

export default {
  name: 'voice-recognizer',

  data () {
    return {
      commands: {},
      durations: {}
    }
  },

  mounted () {
    const annyang = (window || {}).annyang

    if (annyang) {
      soundboard.map(item => {
        if (Array.isArray(item.command)) {
          item.command.map(c => {
            this.commands[c] = item.src
          })
        } else {
          this.commands[item.command] = item.src
        }
        this.durations[item.command] = item.duration
      })

      annyang.addCallback('result', (phrases) => {
        const bestMatch = phrases[0]

        findMatch(this.commands, this.durations, bestMatch.split(' '))
      })

      // annyang.setLanguage('ro-RO')

      annyang.start({ autoRestart: true, continuous: true })
    }

    function findMatch (matchList, durationList, sourceList, wordCount = 1) {
      if (!sourceList.length) {
        return
      }

      const phrase = sourceList.slice(0, wordCount).join(' ').trim()

      if (matchList[phrase]) {
        const soundTrigger = document.getElementById('sound-trigger')
        soundTrigger.setAttribute('href', matchList[phrase])
        soundTrigger.click()

        return setTimeout(() => findMatch(matchList, durationList, sourceList.slice(wordCount)), durationList[phrase])
      } else {
        return (wordCount + 1) > sourceList.length
          ? findMatch(matchList, durationList, sourceList.slice(1))
          : findMatch(matchList, durationList, sourceList, ++wordCount)
      }
    }
  }
}
</script>

<style>
  #sound-trigger {
    visibility: hidden;
    position: absolute;
  }
</style>

<template>
  <section class="container">
    <div>
      <h1 class="title">
        Fantasy Sound Assistant
      </h1>
      <voice-recognizer/>
    </div>
  </section>
</template>

<script>
import VoiceRecognizer from '~/components/VoiceRecognizer'

export default {
  components: {
    VoiceRecognizer
  }
}
</script>

<style>
.container {
  background: #111 url(~static/images/bg.png) center no-repeat;
  background-size: cover;
  color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  filter: grayscale(1);
  animation: colorize 1s linear forwards 1s;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  font-weight: 300;
  color: #EEE;
  line-height: 1;
  padding: 1.5rem;
  border-radius: 1.5rem;
  text-shadow: 2px 2px 0 #000;
  font-size: 5rem;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn 2s linear forwards 2s;
}


@keyframes fadeIn {
  100% {
    opacity: 1;
  }
}


@keyframes colorize {
  100% {
    filter: none;
  }
}


</style>

<template>
  <div class="fsa-logo">
    <img src="~static/images/logo.svg" alt="Fantasy Sound Assistant">
  </div>
</template>

<style>
.fsa-logo {
  display: inline-block;
  animation: fadeIn 2s linear forwards 3s;
  width: 100%;
  max-width: 380px;
  opacity: 0;
}

@keyframes fadeIn {
  100% {
    opacity: 1;
  }
}
</style>

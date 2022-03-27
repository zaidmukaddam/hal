<!-- eslint-disable prettier/prettier -->
<template>
  <div class="max-w-lg px-8 py-4">
    <h1 class="text-2xl font-bold">hal</h1>
    <p class="mt-4 font-mono text-sm font-bold">
      <i>acronym for</i>
      <br />
      <br />
      "Highs and Lows"
    </p>
    <hr class="my-4" />
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/kryYux_Ws9o"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      class="w-full h-64 rounded-lg"
    ></iframe>
    <hr class="my-4" />
    <p class="mt-4">
      hal is an interactive guided journey to reduce anxiety, manage stress and
      improve your health & happiness.
    </p>
    <p class="mt-4">
      We want to help people who are stressed, anxious, or depressed realise they have the ability to control their condition and take actionable steps to improve their mental health.
    </p>
    <hr class="my-4" />
    <p class="mt-4 font-mono text-xs">
      Built with <a class="text-yellow-500" href="https://vuejs.org">Vue</a> +
      <a class="text-yellow-500" href="https://nuxtjs.org">Nuxt</a> +
      <a class="text-yellow-500" href="https://tailwindcss.com">Tailwind</a> +
      <a class="text-yellow-500" href="https://firebase.google.com">Firebase</a>
      <br />
      Hosted on
      <a class="text-yellow-500" href="https://vercel.com/">Vercel</a>
      <br />
      Images from
      <a class="text-yellow-500" href="https://www.flaticon.com">Flaticon</a>
      <br />
      Animations from
      <a class="text-yellow-500" href="https://lottiefiles.com">Lottiefiles</a>
      <br />
      Snippets from
      <a class="text-yellow-500" href="https://codepen.io">CodePen</a>
      <br />
      Thanks to
      <a class="text-yellow-500" href="https://www.google.com">Google</a>,
      <a class="text-yellow-500" href="https://stackoverflow.com">Stack Overflow</a>
      and
      <a class="text-yellow-500" href="https://github.com">GitHub</a>
    </p>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  head() {
    return {
      title: `About - ${this.$store.state.name}`,
    }
  },
}
</script>

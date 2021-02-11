<template>
    <div class="content">
        <TopBar/>
        <Nuxt/>
        <p id="copyright">© {{ new Date().getFullYear() }}</p>
    </div>
</template>

<script>
import TopBar from '~/components/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>

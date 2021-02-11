<template>
    <div class="content">
        <TopBar/>
        <Nuxt/>
        <p id="copyright">© {{ new Date().getFullYear() }}</p>
    </div>
</template>

<script>
import $ from 'jquery'
import TopBar from '~/components/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar
  },
  mounted () {
    const day = new Date()
    const hr = day.getHours()

    if ((hr >= 18 && hr <= 23) || (hr >= 0 && hr <= 7)) {
      if (!($('body').hasClass('stealth'))) {
        $('.content').addClass('stealth')
        $('body').addClass('stealth')

        this.stealthCheck = true
      }
    }
  }
}
</script>

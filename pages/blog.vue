<template>
    <div class="blog">
        <p>Blog coming soon</p>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  mounted () {
    $('.top #brand #subheading').attr('src', '/_nuxt/assets/img/blog.svg')
    $('.top #brand').addClass('active')
  }
}
</script>

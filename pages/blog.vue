<template>
    <div class="blog">
        <p>Blog coming soon</p>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  mounted () {
    $('.top #brand #subheading').attr('src', '/headings/blog.svg')
    $('.top #brand').addClass('active')
  }
}
</script>

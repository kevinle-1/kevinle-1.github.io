<template>
    <div class="projects">
        <p>Projects coming soon</p>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  mounted () {
    $('.top #brand #subheading').attr('src', '/headings/projects.svg')
    $('.top #brand').addClass('active')
  }
}
</script>

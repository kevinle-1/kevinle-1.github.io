<template>
    <div class="index">
        <ul>
            <li><NuxtLink to="/blog">blog<img id="arrow" src="~/assets/img/next.svg"/></NuxtLink></li>
            <li><NuxtLink to="/projects">projects<img id="arrow" src="~/assets/img/next.svg"/></NuxtLink></li>

            <br/>

            <li><a target="_blank" href="#">email<img id="arrow" src="~/assets/img/new.svg"/></a></li>
            <li><a target="_blank" href="#">twitter<img id="arrow" src="~/assets/img/new.svg"/></a></li>
            <li><a target="_blank" href="#">github<img id="arrow" src="~/assets/img/new.svg"/></a></li>
            <li><a target="_blank" href="#">linkedin<img id="arrow" src="~/assets/img/new.svg"/></a></li>

            <br/>
            <li><a target="_blank" href="#">résumé<img id="arrow" src="~/assets/img/new.svg"/></a></li>
        </ul>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  mounted () {
    $('.top #brand #subheading').attr('src', '')
    $('.top #brand').removeClass('active')
  }
}
</script>

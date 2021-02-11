<template>
    <div class="index">
        <ul>
            <li><NuxtLink to="/blog">blog<img id="arrow" src="~/assets/img/symbols/next.svg"/></NuxtLink></li>
            <li><NuxtLink to="/projects">projects<img id="arrow" src="~/assets/img/symbols/next.svg"/></NuxtLink></li>

            <br/>

            <li><a target="_blank" href="mailto:contact@kevinle.com.au">email<img id="arrow" src="~/assets/img/symbols/new.svg"/></a></li>
            <li><a target="_blank" href="https://twitter.com/kevinle_1">twitter<img id="arrow" src="~/assets/img/symbols/new.svg"/></a></li>
            <li><a target="_blank" href="https://github.com/kevinle-1">github<img id="arrow" src="~/assets/img/symbols/new.svg"/></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/kevinle14">linkedin<img id="arrow" src="~/assets/img/symbols/new.svg"/></a></li>

            <br/>
            <li><a target="_blank" href="/files/kevin-le-resume-pub2021.pdf">résumé<img id="arrow" src="~/assets/img/symbols/new.svg"/></a></li>

            <br/>

            <li><img id="switch" src="~/assets/img/symbols/bulb.svg"/></li>
        </ul>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  mounted () {
    $('.top #brand #subheading').attr('src', '')
    $('.top #brand').removeClass('active')

    $('#switch').click(function () {
      $('.content').toggleClass('stealth')
      $('body').toggleClass('stealth')
    })
  }
}
</script>

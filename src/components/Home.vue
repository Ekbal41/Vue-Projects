<template>
    <div>
       <Hero />
       <About />
       <Portfolio/>
    </div>
</template>


<script>

import Hero from "./Hero.vue";
import About from "./About.vue";
import Portfolio from "./Portfolio.vue";
export default {
    components: {
        Hero,
        About,
        Portfolio,
    }
}
</script>
<style></style>
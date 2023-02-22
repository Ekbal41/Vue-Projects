<template>
    <div>
       <Hero />
       <About />
       <Portfolio/>
       <Reactweb/>
       <FormSubmit />
      
     
    </div>
</template>


<script>

import Hero from "./Hero.vue";
import About from "./About.vue";
import Portfolio from "./Portfolio.vue";
import Reactweb from "./Reactweb.vue";
import FormSubmit from "./FormSubmit.vue";
export default {
    components: {
        Hero,
        About,
        Portfolio,
        Reactweb,
        FormSubmit,
    }
}
</script>
<style></style>
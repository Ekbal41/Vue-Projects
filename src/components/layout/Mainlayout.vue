<template>
    <Header />
    <slot />
    <Footer />
</template>
<script>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
export default {
    name: 'Mainlayout',
    components: {
        Header,
        Footer

    }
}
</script>
<style></style>
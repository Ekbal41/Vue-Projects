<template>
    <div class="container w-50 my-4">
        <h1 style="text-align: center; color: teal;">Log In Form</h1>
        <form @submit.prevent="onSubmit">
            <label class="label" for="name">Name</label>
            <input class="form" autocomplete="off" type="text" id="name" name="name" v-model="name">
            <label class="label" for="email">Email</label>
            <input class="form" autocomplete="off" type="email" id="email" name="email" v-model="email">
            <label class="label" for="message">Message</label>
            <textarea class="form" autocomplete="off" id="message" name="message" v-model="message"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            console.log(this.name, this.email, this.message);
            this.name = '';
            this.email = '';
            this.message = '';
        }
    }
}
</script>
<style scoped>
.form {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    border: 2px solid black;
}

.label {
    color: teal;
    font-weight: bold;
    margin-bottom: 0.5rem;
    padding-right: 200px;
}

button {
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 2px solid black;
    border-radius: 4px;
    background-color: teal;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
}
</style>
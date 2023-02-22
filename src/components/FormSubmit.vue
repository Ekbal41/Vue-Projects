<template>
    <div class="container w-50 my-4">
        <h1 style="text-align: center; color: #38b883;">Form Example</h1>
        <form @submit.prevent="onSubmit">
            <label class="label" for="name">Name</label>
            <input class="form" autocomplete="off" type="text" placeholder="Name" id="name" name="name" v-model="name">
            <label class="label" for="email">Email</label>
            <input class="form" autocomplete="off" type="email" placeholder="Email" id="email" name="email" v-model="email">
            <label class="label" for="message">Message</label>
            <textarea class="form" autocomplete="off" id="message" placeholder="Say something ..." name="message" v-model="message"></textarea>
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
    width: 100%;
    border: none;
    border: 1px solid #38b883;
    outline: none;
    padding: 5px 10px;
    border-radius: 10px;
}

.label {
    color:gray;
    font-weight: bold;
    margin-bottom: 0.5rem;
    padding-right: 200px;
    margin-top: 10px;

}

button {
    margin-top: 10px;
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #38b883;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
}
</style>
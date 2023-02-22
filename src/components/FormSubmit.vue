<template>
    <div class="container maindiv">
        <h1 style="text-align: center; color: #38b883; text-transform: uppercase;">Contact me</h1>
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
    padding: 10px 10px;
    border-radius: 10px;
    color:#35495e;
}
.maindiv{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 100px;
}
form{
   width: 50%;
   
    border: 1px solid #38b883;
    padding: 30px;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 100px;

}

.label {
    color:#35495e;
    font-weight: lighter;
    margin-bottom: 0.5rem;
    padding-right: 200px;
    margin-top: 10px;

}

button {
    background-color: #35495e;
    border: 1px solid #f5f5f5;
    border-radius: 10px;
    padding: 10px 20px;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 20px;
    width: 100%;
    text-transform: uppercase;
    border: 2px solid #35495e;
    font-weight: bold;
    margin-bottom: 40px;
    align-self: start;

}

button:hover {

    background-color: rgb(255, 255, 255);
    color: #35495e;
    border: 2px solid #35495e;
}
@media screen and (max-width: 600px) {
    form{
        width: 90%;
    }
}
</style>
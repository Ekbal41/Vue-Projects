<template>
    <div class="container mt-80 ">
        <div class="row maindiv ">
            <div class="col-md-6 col-sm-1 sec-one ">
                <h1>Wellcome to Vue project website</h1>
                <p class="intro">Vue is a framework and ecosystem that covers most of the common features needed in frontend
                    development. </p>
                <button class="mt-3">Learn More</button>
            </div>
            <div class="col-md-6 col-sm-1 cborder ">

                <img src="../assets/vue3.jpeg" alt='vue' />
              

            </div>
        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.sec-one {
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.mt-80 {
    margin-top: 80px;
}

.cborder {
    /* border: 5px solid #35495e;
    border-radius: 30px; */
    



}

button {
    background-color: #35495e;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    padding: 10px 20px;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 200px;
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

h1 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: teal;
    font-family: Arial, Helvetica, sans-serif;
}

.intro {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #35495e;
    font-family: Arial, Helvetica, sans-serif;

}

img {
    height: 300px;
    margin: 0 30px;
    position: relative;
    width: 90%;
    object-fit: cover;
    border-radius: 20%;


}

.secondimg {
    height: 200px;
    position: absolute;
    bottom: 70px;
    right: 50px;
}
</style>
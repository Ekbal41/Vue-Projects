<template lang="">
    <div class=" container  maindiv">
    
    <h1 class="title">Vue Counter</h1>
    <p :class="{ 'down':count < 0, 'up':count >= 0 }">
        {{ count }}
    </p>
    <div class="btn-div">
    <button class="custom-btn " @click="downCount"><i class="bi bi-arrow-down-square"></i></button>
    <button class="custom-btn" @click="resetCount"><i class="bi bi-x-square"></i></button>
    <button class="custom-btn" @click="upCount"><i class="bi bi-arrow-up-square"></i></button>
   
    </div>
    <div class="btn-div mb-5" style="margin-bottom: 10p">
    <button class="custom-btn " @click="autoDown"><i class="bi bi-arrow-down-square-fill"></i></button>
    <button class="custom-btn" @click="stop"><i class="bi bi-slash-square-fill"></i></button>
    <button class="custom-btn" @click="autoUp"><i class="bi bi-arrow-up-square-fill"></i></button>
    </div>
    


    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            upInt: null,
            downInt: null,

        }
    },
    methods: {
        upCount() {
            this.count++
        },
        resetCount() {
            this.count = 0
        },
        downCount() {
            this.count--
        },
        autoUp() {
            clearInterval(this.downInt)

            this.upInt = setInterval(() => {
                this.count++
            }, 500)
        },
        autoDown() {
            clearInterval(this.upInt)

            this.downInt = setInterval(() => {
                this.count--

            }, 500);
        },
        stop() {
            clearInterval(this.upInt)
            clearInterval(this.downInt)


        }

    }

}
</script>
<style scoped>
.title {
    color: #38b883;
    font-weight: bold;
    text-align: center;
  
}

.maindiv{
    border: 1px solid #38b883;
    margin-top: 50px;
    border-radius: 10px;
    width: 50%;
}

.down {
    color: red;
    text-align: center;
  
}

.up {
    color: gray;

    text-align: center;
    
}

.btn-div {
    display: flex;
    justify-content: center;
    margin-top: 25px;

}
p{
    font-size: 100px;
 
}

.custom-btn {
   border: 1px solid white;
 color: #38b883;
 font-size: 30px;
   
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
.custom-btn:hover{
    border: 1px solid #38b883;
}


@media screen and (max-width: 600px){

    .maindiv{
        width: 90%;
      padding: 0;
      margin-left: 20px;
    }
}
</style>
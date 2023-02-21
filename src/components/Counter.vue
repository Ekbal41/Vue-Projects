<template lang="">
    <div>
    <h1 class="title">Vue Counter</h1>
    <h2 :class="{ 'down':count < 0, 'up':count >= 0 }">
        {{ count }}
    </h2>
    <div class="btn-div">
    <button class="custom-btn " @click="downCount">DOWN COUNT</button>
    <button class="custom-btn" @click="resetCount">RESET</button>
    <button class="custom-btn" @click="upCount">UP COUNT</button>
   
    </div>
    <div class="btn-div mb-5" style="margin-bottom: 10p">
    <button class="custom-btn " @click="autoDown">AUTO DOWN</button>
    <button class="custom-btn" @click="stop">STOP</button>
    <button class="custom-btn" @click="autoUp">AUTO UP</button>
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
    color: teal;
    font-weight: bold;
    text-align: center;
    margin-top: 100px;
}

.down {
    color: red;
    text-align: center;
    font-size: 50px;
}

.up {
    color: gray;

    text-align: center;
    font-size: 50px;
}

.btn-div {
    display: flex;
    justify-content: center;
    margin-top: 25px;

}

.custom-btn {
    background-color: teal;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
}
</style>
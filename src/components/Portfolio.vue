<template lang="">
    <div class="container maindiv">
        <h1 style="text-align: center">All the Vue projects</h1>
        <div class="grid">
            <div class="item">
                <img src="../assets/vue3.jpeg" alt="project image" />
                <p class="intro">
                    <span class="index">13</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptas?</p>
                <div><button>See project</button> <button class="git" style="margin-left: 30px">Github</button></div>
            </div>
            <div class="item">
                <img src="../assets/vue3.jpeg" alt="project image" />
                <p class="intro">
                    <span class="index">13</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptas?</p>
                <div><button>See project</button> <button class="git" style="margin-left: 30px">Github</button></div>
            </div>
            <div class="item">
                <img src="../assets/vue3.jpeg" alt="project image" />
                <p class="intro">
                    <span class="index">13</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptas?</p>
                <div><button>See project</button> <button class="git" style="margin-left: 30px">Github</button></div>
            </div>
            <div class="item">
                <img src="../assets/vue3.jpeg" alt="project image" />
                <p class="intro">
                    <span class="index">13</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptas?</p>
                <div><button>See project</button> <button class="git" style="margin-left: 30px">Github</button></div>
            </div>
            <div class="item">
                <img src="../assets/vue3.jpeg" alt="project image" />
                <p class="intro">
                    <span class="index">13</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptas?</p>
                <div><button>See project</button> <button class="git" style="margin-left: 30px">Github</button></div>
            </div>
            <div class="item">
                <img src="../assets/vue3.jpeg" alt="project image" />
                <p class="intro">
                    <span class="index">13</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptas?</p>
                <div><button>See project</button> <button class="git" style="margin-left: 30px">Github</button></div>
            </div>
            <div class="item">
                <img src="../assets/vue3.jpeg" alt="project image" />
                <p class="intro">
                    <span class="index">13</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptas?</p>
                <div><button>See project</button> <button class="git" style="margin-left: 30px">Github</button></div>
            </div>
            <div class="item">
                <img src="../assets/vue3.jpeg" alt="project image" />
                <p class="intro">
                    <span class="index">13</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptas?</p>
                <div><button>See project</button> <button class="git" style="margin-left: 30px">Github</button></div>
            </div>
           

        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
h1{
    color: #38b883;
   font-weight: bold;
}

.intro{
    color: #35495e;
    font-family: Arial, Helvetica, sans-serif;

}
.maindiv{
    padding-left: 100px;
  
    margin-top: 100px;
    margin-bottom: 100px;
}
.grid{
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    
}
img{
    height: 190px;
    width: 250px;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 10px;
    transition: 0.5s;
    border: 1px solid #38b883;
}
img:hover{
    opacity: 0.7;
   
}
.item{
    border-radius: 10px;
    margin-left: 30px;
margin-bottom: 20px;
    border: 1px solid #38b883;
    padding: 10px;
   
    width: 270px;
    background-color: aliceblue;
}
button{
   border: none;
   background-color: aliceblue;
   padding: 5px 8px;
   font-weight: bold;
   text-transform: uppercase;
   color: #38b883;
   border-radius: 10px;
   outline: none;
}
button:hover{
    background-color: #edf6f2;
    
}
.index{
    font-weight: bolder;
    color: #38b883;
    font-size: 20px;
}
.git{
    border: none;
}

@media screen and (max-width: 600px){
    .grid{
        flex-direction: column;
    }
}
</style>
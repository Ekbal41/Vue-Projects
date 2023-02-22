<template lang="">
    <div class="container maindiv" >
        <div>
            <img class="photo" src="../assets/man.jpg" alt="man" />
        </div>
        <div class="skill">
            <h1>About Me & My skills</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sed ex facilis dicta ad quis a placeat, praesentium inventore, consequuntur fugit illum recusandae cumque asperiores sit totam pariatur, adipisci ipsa. Voluptatum nesciunt explicabo magnam similique aspernatur dolorum temporibus libero a ipsam, suscipit nisi, consequuntur vel deserunt, autem fugit reiciendis quo.</p>
            <div>
               <img class="icon" src="../assets/css-3.png" alt="css" />
               <img class="icon" src="../assets/html-5.png" alt="html" />
               <img class="icon" src="../assets/js.png" alt="js" />
               <img class="icon" src="../assets/react.png" alt="react" />
               <img class="icon" src="../assets/vue.svg" alt="vue" />


               <img class="icon" src="../assets/python.png" alt="python" />
               <img class="icon" src="../assets/laravel.png" alt="laravel" />
               <img class="icon" src="../assets/database.png" alt="database" />
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
p{
    color: #35495e;
    font-size: 1.2rem;
}
.icon{
    height: 40px;
    margin-right: 20px;
}

.photo{
    height: 300px;
    margin: 20px;
    border-radius: 30px;
}
.maindiv{
    display: flex;
    margin-top: 100px;
    margin-bottom: 100px;
}
.skill{
    margin: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

@media screen and (max-width: 600px) {
    .maindiv{
        flex-direction: column;
    }
    .photo{
        height: 200px;
        margin-left: 100px;
    }
    .skill{
        margin: 20px;
    }
    .icon{
        margin-top: 10px;
    }
}
    
</style>
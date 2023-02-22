<template lang="">
    <div class="container">
        <div class="r-maindiv" >
            <div>
                <img class="r-img" src="../assets/vue3.jpeg" alt="react web site">
            </div>

            <div class="r-text">
                <p class="title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, voluptatem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quidem molestias accusamus qui possimus adipisci id in ipsa eius doloribus tempore molestiae voluptates? Alias natus nostrum, rem voluptatem dolore omnis temporibus at officia quos id corporis deleniti in tempora asperiores quaerat reprehenderit laboriosam facilis ut animi suscipit iure delectus. Iusto.</p>
                <a class="linkbutton">visite now</a>
            </div>
          
        </div>
        
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.r-img {
    height: 200px;
    border-radius: 10px;
  
    object-fit: cover;
    border: 1px solid #38b883;
}

.r-maindiv {
    display: flex;
    padding: 10px;
    border: 1px solid #38b883;
    border-radius: 10px;
    margin-bottom: 100px;

}

.r-text {
    padding: 10px;
    padding-left: 20px;
}

.linkbutton {
    border: none;
    background-color: aliceblue;
    padding: 5px 8px;
    font-weight: bold;
    text-transform: uppercase;
    color: #38b883;
    border-radius: 10px;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    float: right;
    border: 1px solid #38b883;
}

.linkbutton:hover {
    background-color: #edf6f2;

}

.title {
    color: #38b883;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 0;

}

p {
    color: #35495e;
}

@media screen and (max-width: 600px) {
    .r-maindiv {
       
       
        flex-direction: column;
    }

    .r-text {
       
        padding-left: 0px;
    }
    .r-img{
        width: 345px;
    }
}</style>
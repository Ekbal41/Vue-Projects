<template>
    <div class=" mt-5">
        <div class="container topdiv">
            <div class="input-div">
                <h1 class="title">Todo App</h1>
                <div>
                <input type="text" class="form" placeholder="Enter Todo" v-model="todo">
                <button class="custom-btn" @click="addTodo">Add</button>
            </div>
            </div>
            <div class="maindiv">

                <div v-for=" t,index in reversedTodo" :key="index" class="singeltodo">
                    <div class="todo">
                        <span class="pin">{{ index + 1 }}</span>
                        {{t}}
                        
                    </div>
                    <div>
                        <button @click="onDelete(index)" class="delete-btn"><i class="bi bi-trash3"></i></button>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
          todos  : [],
          todo : '',
        }
    },
    methods: {
        addTodo(){
            this.todos.push(this.todo)
            this.todo = ''
           
        },
        onDelete(index){
            this.todos.splice(index,1)

        }

    },
    created(){
        window.addEventListener('keydown', e =>{
            if(e.key === 'Enter'){
                this.addTodo()
            }
        })

    },
    computed:{
        //reverse all todos
        reversedTodo(){
            return this.todos.reverse()
        }
        

    }
}
</script>
<style scoped>
.maindiv {

    margin-top: 10px;
}
.topdiv{
    border: 1px solid #38b883;
    width: 70%;
    padding: 20px;
    border-radius: 10px;
}

.todo {
    color: gray;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 15px;
    margin: auto 0;
    position: relative;

}
.pin{
color: #38b883;
  font-weight: bolder;
  font-size: 50px;
  position: absolute;
  top: -40px;
  left: -30px;
  font-family: cursive;
}

.singeltodo {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border: 1px solid #38b883;
    border-radius: 10px;
    width: 80%;

    margin: 20px auto;
}

.title {
    color: #38b883;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    
}

.custom-btn {
    background-color: #38b883;
    color: white;
    border: none;

   padding: 11px 20px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;

}

input {
    border: none;
    border: 1px solid #38b883;
    outline: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    color:#38b883;
    margin-left: 20px;
    width: 400px;
    padding: 10px 20px;



}

.delete-btn {
    background-color: rgb(255, 255, 255);
    color: red;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    margin-left: 20px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
}

.input-div {
    display: flex;
    justify-content: center;


}

@media screen and (max-width: 600px){
    .maindiv {
        width: 100%;
        padding: 20px;
        padding-top: 0;
    }
    .topdiv{
        width: 90%;
    }
    .input-div{
        flex-direction: column;
        margin-left: 10px;
       
    }
    .todo {
        font-size: 12px;
        padding-left: 10px;
    }
    .pin{
        font-size: 30px;
        top: -20px;
        left: -10px;
    }
    .singeltodo {
        width: 100%;
    }
    .custom-btn {
        padding: 11px 10px;
    }
    input {
        width: 220px;
        padding: 10px 10px;
        margin-left: 10px;
    }
    .title{
        margin-bottom: 40px;
    }
    .delete-btn {
        padding: 10px 10px;
        margin-left: 10px;
    }
}
</style>
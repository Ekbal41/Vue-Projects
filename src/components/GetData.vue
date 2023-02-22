<template lang="">
    <div>
       
        <div class="table-responsive container">
            <div class="title"><h1 >Get Data</h1>
            <div>
              
                <input type="text" placeholder="Search" v-model="search">
                <button @click="onSearch" class="custom-btn">Search</button>
            </div>
        </div>
            <table class="table ">
                <thead>
                    <tr>
                        <th scope="col">INDEX</th>
                        <th scope="col">TODO</th>
                        <th scope="col">STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="todo in filteredTodos" :key="todo.id">
                        <td>{{todo.id}}</td>
                        <td>{{todo.title}}</td>
                        <td>{{todo.completed}}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            todos : [],
            search: ''

        }
    },
    methods:{
        onSearch(){
            var newData = this.todos.filter(todo => todo.title.includes(this.search))
            this.todos = newData
        }

    },
    computed:{
        filteredTodos(){
            if (this.search){
                return this.todos.filter(todo => todo.title.includes(this.search))
            }else{
                return this.todos
            }
        }

    },
    mounted(){
        // api endpint https://jsonplaceholder.typicode.com/todos

        fetch('https://jsonplaceholder.typicode.com/todos',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()
        ).then(data=> {
            this.todos = data
           
        });
       
    }
    
}
</script>
<style scoped>
.title {
    color: #38b883;
    font-weight: bold;
   
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    
}
.custom-btn {
    background-color: #38b883;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 5px 20px;
    margin-left: 10px;
}
input{
    border: none;
    border-bottom: 1px solid #38b883;
    outline: none;
    padding: 5px 10px;
    border-radius: 10px;
}
    
</style>
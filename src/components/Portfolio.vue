<template lang="">
    <div class="container maindiv">
        <h1 style="text-align: center">All the Vue projects</h1>
        <div class="grid">



            <div v-for="project, index in projects" class="item" v-motion-slide-visible-left>
                <img   :src="project.image" alt="project image" />
                <p class="intro">
                    <p class='project-name'>
                        <span class="index">{{index + 1}}</span>
                        {{project.title}}
                    </p>
                    {{project.description}}
                </p>
                <div>
                    <a class=" git linkbutton" :href="project.link">
                        see project
                    </a>
              
                    <a class="git linkbutton" :href="project.github" style="margin-left: 30px">
                        Github
                    </a>
                </div>
            </div>
           
          
            
           

        </div>
        
    </div>
</template>
<script>
import projects from '../data/projects'
export default {

    data() {
        return {
            projects: projects,

        }
    }


}
</script>
<style scoped>
h1 {
    color: #38b883;
    font-weight: bold;
}

.intro {
    color: #35495e;
    font-family: Arial, Helvetica, sans-serif;

}

.maindiv {
    padding-left: 100px;
   
    margin-top: 100px;
    margin-bottom: 100px;
}

.project-name {
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    color: #35495e;
    font-weight: bold;
    margin-bottom: 0;

}

.grid {
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;

}

img {
    height: 190px;
    width: 250px;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 10px;
    transition: 0.5s;
    border: 1px solid #38b883;
}

img:hover {
    opacity: 0.7;

}

.item {
    border-radius: 10px;
    margin-left: 30px;
    margin-bottom: 20px;
    border: 1px solid #38b883;
    padding: 10px;

    width: 270px;
    background-color: aliceblue;
}

button {
    border: none;
    background-color: aliceblue;
    padding: 5px 8px;
    font-weight: bold;
    text-transform: uppercase;
    color: #38b883;
    border-radius: 10px;
    outline: none;
}

button:hover {
    background-color: #edf6f2;

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
}

.linkbutton:hover {
    background-color: #edf6f2;

}

.index {
    font-weight: bolder;
    color: #38b883;
    font-size: 20px;
    margin-right: 10px;

}

.git {
    border: none;
}

@media screen and (max-width: 600px) {
    .grid {
        flex-direction: column;
    }

    .maindiv {
        padding-left: 30px;
    }
}</style>
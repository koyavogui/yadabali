<template>
  <div style="margin-top:100px" >
  <div class="row">
    <div 
    v-for="(item,index) in items"
    :key="'recette-item'.concat(index)"  
    class="card col-md-3  mt-3 ml-4" style="width: 18rem;">
        <img :src="item.image" class="card-img-top" alt="..." style="height: 8rem;">
        <div class="card-body">
            <h5 class="card-title">{{item.nom}}</h5>
            <p class="card-text">{{item.description}}</p>
            <p class="card-text">{{item.calorie}}</p>
            <p class="card-text">{{item.difficulte}}</p>
            <p class="card-text">{{item.temps_de_cuissons}}</p>
            <p class="card-text">{{item.nombre_personne}}</p>
            <p class="card-text">{{item.categorie}}</p>
            <a href="#" @click="addRecette" v-show="!$store.state.user || ($store.state.user && $store.state.user.role === 'apprenti')  " class="btn btn-primary">Apprendre</a>
        </div>
    </div>    
  </div>
  </div>
</template>

<script>
import AjoutRecette from "./AjoutRecette";

export default {
    components:{
        AjoutRecette
    },
    async mounted(){
        let res = await this.$axios({
            method:'get',
            url:this.$app.dev_api.concat("recettes"),
        })
        this.items = res.data
    },
    data(){
        return {
            items:[],
            recette:{
                nom:'',
                description:'',
                calorie:'',
                difficulte:'',
                temps_de_cuissons:'',
                nombre_personne:'',
                categorie:''
            }
    }
    },
    methods:{
        addRecette(){
            if (!this.$store.state.user) {
                this.$router.push({name:'registration'})
            }
        }
    }
}

</script>

<style>

</style>

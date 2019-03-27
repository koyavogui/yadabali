<template>
  <div class="mt-5" >
  <div>
      <b-button class="ml-2 mt-4" v-b-modal.addrecette  >Ajouter une reccette</b-button>
  </div>
        <b-modal hide-footer id="addrecette" title="Ajouter une recette">
                <div>
                    <ajout-recette />
                </div>
        </b-modal>
  <div class="row">
    <div class="card col-md-3  mt-3 ml-4" style="width: 18rem;">
        <img src="" class="card-img-top" alt="..."style="height: 8rem;">
        <div class="card-body">
            <h5 class="card-title">Card </h5>
            <p class="card-text">Some quick example text to build on</p>
            <a href="#" class="btn btn-primary">Apprendre</a>
        </div>
    </div>
    <div class="card col-md-3  mt-3 ml-4" style="width: 18rem;">
        <img src="" class="card-img-top" alt="..."style="height: 8rem;">
        <div class="card-body">
            <h5 class="card-title">Card </h5>
            <p class="card-text">Some quick example text to build on</p>
            <a href="#" class="btn btn-primary">Apprendre</a>
        </div>
    </div>
    <div class="card col-md-3  mt-3 ml-4" style="width: 18rem;">
        <img src="" class="card-img-top" alt="..."style="height: 8rem;">
        <div class="card-body">
            <h5 class="card-title">Card </h5>
            <p class="card-text">Some quick example text to build on</p>
            <a href="#" class="btn btn-primary">Apprendre</a>
        </div>
    </div>
    <div class="card col-md-3  mt-3 ml-4" style="width: 18rem;">
        <img src="" class="card-img-top" alt="..."style="height: 8rem;">
        <div class="card-body">
            <h5 class="card-title">Card </h5>
            <p class="card-text">Some quick example text to build on</p>
            <a href="#" class="btn btn-primary">Apprendre</a>
        </div>
    </div>
    <div class="card col-md-3  mt-3 ml-4" style="width: 18rem;">
        <img src="" class="card-img-top" alt="..."style="height: 8rem;">
        <div class="card-body">
            <h5 class="card-title">Card </h5>
            <p class="card-text">Some quick example text to build on</p>
            <a href="#" class="btn btn-primary">Apprendre</a>
        </div>
    </div>
    <div class="card col-md-3  mt-3 ml-4" style="width: 18rem;">
        <img src="" class="card-img-top" alt="..."style="height: 8rem;">
        <div class="card-body">
            <h5 class="card-title">Card </h5>
            <p class="card-text">Some quick example text to build on</p>
            <a href="#" class="btn btn-primary">Apprendre</a>
        </div>
    </div>
    <div class="card col-md-3  mt-3 ml-4" style="width: 18rem;">
        <img src="" class="card-img-top" alt="..."style="height: 8rem;">
        <div class="card-body">
            <h5 class="card-title">Card </h5>
            <p class="card-text">Some quick example text to build on</p>
            <a href="#" class="btn btn-primary">Apprendre</a>
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
    data(){
        return {
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
}
}

</script>

<style>

</style>

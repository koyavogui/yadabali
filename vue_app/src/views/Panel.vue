<template>
    <div class="col-md-11"  style="margin-top:100px" >
        <div class="row mt-2">
            <div class="col-md-3 alert alert-success">
                One of three columns
                <h4 class="alert-heading">Well done!</h4>
                <hr>
                <p class="mb-0">Whenever you need to.</p>
            </div>
            <div class="offset-md-1 col-md-4 alert alert-success">
                One of three columns
                <h4 class="alert-heading">Well done!</h4>
                <hr>
                <p class="mb-0">Whenever you need to.</p>
            </div>
            <div class="offset-md-1 col-md-3 alert alert-success">
                One of three columns
                <h4 class="alert-heading">Well done!</h4>
                <hr>
                <p class="mb-0">Whenever you need to.</p>
            </div>
        </div>


        <div class="row">
            
            <!-- ajouter recette -->
            <button 
            v-b-modal.addrecette
            type="button" 
            class=" offset-md-11 btn btn-primary btn-sm mb-2"
            >
            Ajouter
            </button>

            <!-- Modal Component -->
            <b-modal hide-footer id="addrecette" title="Ajouter une recette">
                <div>
                    <ajout-recette />
                </div>
            </b-modal>
            
            <b-table  :fields="fields" :items="items" @row-clicked="onClickRow" > 

                <template slot="row-details" slot-scope="row">
                    <b-card>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Nom:</b></b-col>
                        <b-col>{{ row.item.nom }}</b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Description:</b></b-col>
                        <b-col>{{ row.item.description }}</b-col>
                    </b-row>

                    <b-button size="sm" >supprimer</b-button>
                    <b-button size="sm" class="ml-2" >éditer</b-button>
                    </b-card>
                </template>
            </b-table>



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
            },
            items: [
                {
                nom:'okf',
                description:'fokf',
                calorie:'ofkfl',
                difficulte:'fokfl',
                temps_de_cuissons:'fofko',
                nombre_personne:'fofko',
                categorie:'fokff',
                _showDetails:false
                }
            ],
            fields:['nom','description','calorie','difficulté','temps_de_cuissons','categorie']
        }
    },
    methods:{
        onClickRow(props){
            props._showDetails = !props._showDetails
            
        }
    }
}
</script>

<style>

</style>

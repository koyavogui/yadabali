<template>
    <div class="col-md-11"  style="margin-top:100px" >
        <div class="row mt-2">
            <div class="col-md-3 alert alert-success">
                Bienvenue
                <h4 class="alert-heading">Salut  {{$store.state.user.nom}} {{$store.state.user.prenom}} </h4>
                <hr>
                <p class="mb-0">Chers {{$store.state.user.nom}} ceci est votre espace personnel.</p>
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
                        <b-col sm="3" class="text-sm-right"><b>Catégories :</b></b-col>
                        <b-col>{{ row.item.categorie}}</b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Difficulté:</b></b-col>
                        <b-col>{{ row.item.difficulte }}</b-col>
                        <b-col sm="3" class="text-sm-right"><b>Temps de Cuissons:</b></b-col>
                        <b-col>{{ row.item.temps_de_cuissons}}</b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Description:</b></b-col>
                        <b-col>{{ row.item.description }}</b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Calorie:</b></b-col>
                        <b-col>{{ row.item.calorie}}</b-col>
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
    async mounted(){
        //console.log(this.$store.state);
        this.$root.$on("add-recette",this.addRecette)
        let res = await this.$axios({
            method:'get',
            url:this.$app.dev_api.concat("recettes"),
            params:{
                maitre:this.$store.state.user.id
            }
        })
        this.items = res.data
        
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
            ],
            fields:['nom','description','calorie','difficulté','temps_de_cuissons','categorie']
        }
    },
    methods:{
        onClickRow(props){
            props._showDetails = !props._showDetails
        },
        addRecette(recette){
            this.$set(this.items, this.items.length,recette)
        }
    }
}
</script>

<style>

</style>

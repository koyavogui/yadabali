<template>
  <div>
    <b-alert variant="success" show  v-show="success" >Recette créé avec succès</b-alert>
    <b-form>
        <b-row>
            <b-form-group 
                md="4"
                class="ml-3"
                id="exampleInputGroup1"
                label="Nom de la Recette"
                label-for="exampleInput1"
            >
                <b-form-input
                id="exampleInput1"
                type="text"
                v-model="recette.nom"
                required
                placeholder="Nom de la recette" />
            </b-form-group>
            <b-form-group 
                md="4"
                class="ml-3"
                id="exampleInputGroup1"
                label="Nombre de Personne"
                label-for="nombre_personne"
            >
                <b-form-input
                id="exampleInput1"
                type="text"
                v-model="recette.nombre_personne"
                required
                placeholder="Entrer le nombre" />
            </b-form-group>
            <b-form-group 
                md="4"
                class="ml-3"
                id="calorie"
                label="Calorie"
                label-for="calorie"
            >
                <b-form-input
                id="calorie"
                type="text"
                v-model="recette.calorie"
                required
                placeholder="Calorie" />
            </b-form-group>
            <b-form-group 
                md="4"
                class="ml-3"
                id="temps_cuisson"
                label="Temps de cuisson"
                label-for="temps_cuisson"
            >
                <b-form-input
                id="temps_cuisson"
                type="text"
                v-model="recette.temps_de_cuissons"
                required
                placeholder="Temps de cuisson" />
            </b-form-group>
        </b-row>
        <input 
        class="mt-3 px-3 form-control"
        type="file"
        placeholder="Image recette" />
        <b-form-group 
                id="description"
                label="Description"
                label-for="description"
            >
                <b-form-textarea
                id="exampleInput1"
                type="text"
                v-model="recette.description"
                required
                placeholder="Description de la recette" />
        </b-form-group>
        <b-form-group id="categorie" label="Catégorie:" label-for="exampleInput3">
          <b-form-select id="exampleInput3" :options="categorie" required v-model="recette.categorie" />
        </b-form-group>
        <b-form-group label="Difficulté">
            <b-form-radio-group 
            v-model="recette.difficulte" 
            :options="options" 
            plain name="plainInline"  class="text-primary" />
        </b-form-group>
        <b-button :disabled="loading"  block variant="primary" @click="ajouterRecette" >Ajouter</b-button>
      <!--
        <b-form-group label="Difficulté">
            <b-form-radio-group v-model="selected" :options="options" plain name="plainInline" :state="state" class="text-primary" />
        </b-form-group>
        <b-form-group>
            <b-form-file
                v-model="file"
                :state="Boolean(file)"
                placeholder="Choose a file..."
                drop-placeholder="Drop file here..."
            />
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      -->
    </b-form>
    
  </div>
</template>

<script>
export default {
    data() {
      return {
        loading:false,
        success:false,
        recette: {
            nom : '',
            description : '',
            calorie : '',
            difficulte : '',
            temps_de_cuissons : '',
            nombre_personne : '',
            categorie: null,
            image:'',
            maitre:''
        },
        categorie: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        selected: '',
        options: [
          { text: 'Facile', value: 'facile'},
          { text: 'Moyen', value: 'moyen'},
          { text: 'Difficile', value: 'Difficile', class : 'text-danger'}
        ],
        show: true
        }
      },
    methods: {
      toBase64(file){
            const frd = new FileReader()
            frd.onload = () => {
                try {
                    this.recette.image = frd.result
                    return true 
                } catch (error) {
                    return false
                }
            }
            frd.readAsDataURL(file)
      },
      async ajouterRecette(){
            //this.loading = true
            this.recette._showDetails=false
            this.recette.maitre = this.$store.state.user.id
            try {
              this.toBase64(document.querySelector("input[type=file]").files[0])   
              
            } catch (error) {
              
            }
            setTimeout(
                async () => {
                    let res = await this.$axios({
                      method:'post',
                      url:this.$app.dev_api.concat("recettes"),
                      data:this.recette
                    })
                    this.loading = false
                    this.success = true
                    this.$root.$emit("add-recette",res.data)
                    setTimeout(() => {
                        this.success = false
                    },1000)

                },3000
                )
            setTimeout(() => {
              this.success = false
            },1000)
        
        
      }
    }
     
}
</script>

<style>

</style>

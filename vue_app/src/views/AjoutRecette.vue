<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
                v-model="form.nom"
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
                v-model="form.nombre_personne"
                required
                placeholder="Entrer le nombre" />
            </b-form-group>
        </b-row>
        <b-form-group 
                id="exampleInputGroup1"
                label="Nombre de Personne"
                label-for="nombre_personne"
            >
                <b-form-textarea
                id="exampleInput1"
                type="text"
                v-model="form.nombre_personne"
                required
                placeholder="Entrer le nombre" />
        </b-form-group>
        <b-form-group id="exampleInputGroup3" label="Catégorie:" label-for="exampleInput3">
        <b-form-select id="exampleInput3" :options="categorie" required v-model="form.categorie" />
      </b-form-group>
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
      
    </b-form>
  </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
            nom : '',
            description : '',
            calorie : '',
            difficulte : '',
            temps_de_cuissons : '',
            nombre_personne : '',
            categorie: null,
          selected: [],
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
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        /* Reset our form values */
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        /* Trick to reset/clear native browser form validation state */
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
     
}
</script>

<style>

</style>

<template>
  <div >
    <div class="mt-1" >
    <form class="well">
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="nom">Nom Recette</label>
          <input type="text" class="form-control" id="nom" placeholder="Nom Recette">
        </div>
        <div class="form-group col-md-4">
          <label for="nombre_personne">Nombre personne</label>
          <input type="text" class="form-control" id="nombre_personne" placeholder="Nombre personne">
        </div>
        <div class="form-group col-md-4">
          <label for="Temps_de_cuissons" class="flabel-control">Temps de cuissons</label>
          <input type="text" class="form-control" id="Temps_de_cuissons" placeholder="Temps de cuissons">
        </div>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" id="description" rows="3"></textarea>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="Categorie">Categorie</label>
          <select id="Categorie" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label for="Ingredient">Ingrdient</label>
          <select id="ingredient" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </select>
        </div>
      </div>
      <div class="form-group ">
        <label>Difficulté</label>
            <div class="row mx-1 ">
                <div class="custom-control custom-radio col-md-4">
                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                    <label class="custom-control-label text-success" for="customRadio1">facile</label>
                </div>
                <div class="custom-control custom-radio col-md-4">
                    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                    <label class="custom-control-label text-warning" for="customRadio2">Moyen</label>
                </div>
                <div class="custom-control custom-radio col-md-4">
                    <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                    <label class="custom-control-label text-danger" for="customRadio3">Difficile</label>
                </div>
        </div>
      </div>
      <b-button  block class="btn btn-primary">Ajouter</b-button>
    </form>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

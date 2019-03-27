<template>
    <div class="col-md-11">
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
            <button type="button" class=" offset-md-11 btn btn-primary btn-sm mb-2">Ajouter</button>
            <table class="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom </th>
                    <th scope="col"></th>
                    <th scope="col">Handle</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <button type="button" class="btn btn-primary col-md-3 mb-1">Voir</button>
                        <button type="button" class="btn btn-success offset-md-1 col-md-3 mb-1">Modifier</button>
                        <button type="button" class="btn btn-danger offset-md-1 col-md-3">Supprimer</button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                        <button type="button" class="btn btn-primary col-md-3 mb-1">Voir</button>
                        <button type="button" class="btn btn-success offset-md-1 col-md-3 mb-1">Modifier</button>
                        <button type="button" class="btn btn-danger offset-md-1 col-md-3 ">Supprimer</button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>
                        <button type="button" class="btn btn-primary col-md-3 mb-1">Voir</button>
                        <button type="button" class="btn btn-success offset-md-1 col-md-3 mb-1">Modifier</button>
                        <button type="button" class="btn btn-danger offset-md-1 col-md-3">Supprimer</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
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

<template>
    <div>
        <div>
        <b-navbar toggleable="lg" type="dark" :style="{backgroundColor:$app.theme.primary}" >
            <b-navbar-brand @click="$store.state.left=true;$store.state.right=true;$router.push({name:'home'})" href="#">Ya Dabali</b-navbar-brand>

            <b-navbar-toggle target="nav_collapse" />

            <b-collapse is-nav id="nav_collapse" >
            <b-navbar-nav>
                <b-nav-item>Recettes</b-nav-item>
                <b-nav-item >Marché</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Recette" />
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Recherche</b-button>
                </b-nav-form>

                <b-nav-item-dropdown right  >
                <!-- Using button-content slot -->
                    <template slot="button-content"> <font-awesome-icon icon="eye" ></font-awesome-icon> </template>
                        
                    <div v-show="$store.state.logged" >
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Deconnexion</b-dropdown-item>
                    </div>
                    
                    
                    <div class="p-2  "  v-show="!$store.state.logged" >
                        
                        <p>Connexion</p>
                        <b-form-input 
                        v-model="user.username"  
                        type="text"
                        placeholder="Nom d'utilisateur"
                        />
                        <b-form-input
                        class="mt-3" 
                        v-model="user.password"  
                        type="password"
                        placeholder="Mot de passe"
                        /> 

                        <div class="mt-3">
                            <b-button 
                            block
                            >
                            connexion
                            </b-button>
                            
                        </div>

                        <div class="mt-3" >
                            <b-button 
                            variant="link" 
                            block
                            @click="$router.push({name:'registration'})"
                            >
                            inscription
                            </b-button>
                        </div>
                    </div>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            
            </b-collapse>
        </b-navbar>
        </div>

        
    </div>
</template>

<script>
export default {
    data(){
        return {
            user:{
                username:'',
                password:''
            }
        }
    }
}
</script>

<style>

</style>

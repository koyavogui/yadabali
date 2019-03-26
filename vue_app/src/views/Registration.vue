<template>
    <div class="pr-5" >
        <h4>Inscription</h4>
        <div
        v-for="key in Object.keys(user)"
        :key="key"
        >
        <input 
        class="mt-3 px-3"
        :type="key==='photo' ? 'file' : 'text'"
        v-model="user[key]" 
        :placeholder="key" />
        </div>
        
        <b-button class="mt-3" block  @click="inscription" >S'inscrire</b-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user:{
                nom:'',
                prenom:'',
                username:'',
                password:'',
                role:'',
                photo:'',
                contact:'',
                commune:''
            }
        }
    },
    methods:{
        inscription(){
            console.log(this.user);
            
        }
    }
}
</script>

<style>

</style>

<template>
    <div style="margin-top:100px" >
        <div class="pr-5 mt-5" >
        <b-alert variant="success" show  v-show="success" >Utilisateur créé avec succès</b-alert>

        <legend>Inscription</legend>
        <div
        v-for="key in Object.keys(user)"
        :key="key"
        >

        <input 
        v-if="key !== 'photo' && key !== 'role' && key !== 'commune'"
        class="mt-3 px-3 form-control"
        :type=" key==='password' ? 'password' : 'text'"
        v-model="user[key]" 
        :placeholder="key" />

        <input 
        v-if="key === 'photo'"
        class="mt-3 px-3 form-control"
        type="file"
        :placeholder="key" />

  
        <b-form-select 
        class="mt-3 px-3 form-control"
        v-if="key === 'role' || key === 'commune'"
        v-model="user[key]" 
        :options="options[key]" 
        :placeholder="key"
        />

        </div>
        
        <b-button class="mt-3" block  @click="inscription"  :disabled="loading" >S'inscrire</b-button>
    </div>
    </div>
</template>

<script>
export default {
    async mounted(){
    
    },
    data(){
        return {
            success:false,
            loading:false,
            user:{
                nom:'',
                prenom:'',
                username:'',
                password:'',
                role:null,
                photo:'',
                contact:'',
                commune:null
            },
            options:{
                role:[
                    {
                        text:"Role",
                        value:null
                    },
                    {
                        text:"marchant",
                        value:"marchant"
                    },
                    {
                        text:"apprendre des recettes",
                        value:"apprenti"
                    },
                    {
                        text:"ajouter des recette",
                        value:"maitre"
                    },
                    {
                        text:"admin",
                        value:"admin"
                    }
                ],
                commune:[
                    {
                        text:"Commune",
                        value:null
                    },
                    {
                        text:"Cocody",
                        value:"cocody"
                    }
                ]
            }
        }
    },
    methods:{
        toBase64(file){
            const frd = new FileReader()
            frd.onload = () => {
                try {
                    this.user.photo = frd.result
                    return true 
                } catch (error) {
                    return false
                }
            }
            frd.readAsDataURL(file)
        },
        inscription(){
            this.loading = true
            
            this.toBase64(document.querySelector("input[type=file]").files[0])   
            setTimeout(
                async () => {
                    await this.$axios({
                        method:'post',
                        url:this.$app.dev_api.concat("users"),
                        data:this.user
                    })
                    this.loading = false
                    this.success = true

                    setTimeout(() => {
                        this.success = false
                    },1000)

                    this.$store.commit("set_logged",true)
                    this.$store.commit("set_user",this.user)
                    this.$router.push({name:'panel'})
                },3000
            )
            
            //let res = 
            //console.log(this.user, this.$app, this.$axios);
            
        }
    }
}
</script>

<style>

</style>

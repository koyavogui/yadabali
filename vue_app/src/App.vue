<template>
  <div id="app">
    
    <div>
      <nav-bar />
    </div>
    <b-container fluid style="padding:0px" >
      <b-row no-gutters >
        <b-col md="2" v-show="$store.state.left"  >
          <left-nav />
        </b-col>
        <b-col md="8" >
          <router-view/>
        </b-col>
        
        <b-col md="2" v-show="$store.state.left" >
          <right-nav />
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import LeftNav from '@/components/LeftNav'
import RightNav from '@/components/RightNav'
export default {
  components:{
    NavBar,
    LeftNav,
    RightNav
  }
}
</script>


<style>

</style>

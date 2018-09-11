<template>
  <section class="container">
    <div>
     <p>{{name}}</p>
     <img :src="url" alt="">
     <img src="../assets/images/2.jpg" alt="">
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import {httpGetIndexLawyer} from '~/http/api.js'
import { mapMutations} from 'vuex'
export default {
  components: {
    AppLogo
  },
  data(){
    return {
      url:"../images/gravatar.jpg",
      url2:"~assets/images/2.jpg"
    }
  },
  computed: {
    login () { return this.$store.state.todos.list },
    name(){
      return this.$store.state.login.token
    }
  },
  mounted(){
    this.axiosData()
    console.log(this.$store)
    setTimeout(()=>{
      this.setToken('2222')
    },2000)
  },
  methods:{
    axiosData(){
      httpGetIndexLawyer().then(res=>{
        console.log(res)
      })
    },
    ...mapMutations({
      setToken: 'login/setToken'
    })
  }
}
</script>

<style lang="stylus" scoped>
.container
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .title
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    font-weight: 300;
    font-size: 100px;
    color: #ccc;
    letter-spacing: 1px;


.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>


<template>
    <div>
 <h2>Go back to <router-link to="/">Home Page</router-link></h2>
<div v-if="answer !== undefined">
<h2>The expression is: {{expression}}</h2>
<h2>The answer is: {{answer}}</h2>
</div>
    </div>
</template>

<script>
import cookies from "vue-cookies";
    export default {
  
       mounted () {
        if(cookies.get(`answer`) && cookies.get(`expression`)){
            this.answer = cookies.get(`answer`);
            this.expression = cookies.get(`expression`);
        }
       },
       data() {
        return {
            answer: undefined,
            expression: undefined
        }
       },
    }
</script>

<style scoped>

</style>
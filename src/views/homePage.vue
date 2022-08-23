<template>
    <div>
<h2>This is home page</h2>
 <express-button></express-button>
    <router-link to="/answer_page">Answer Page</router-link>
    </div>
</template>

<script>
import ExpressButton from "@/components/expressButton.vue";

    export default {
        components:{
            ExpressButton
        } 
    }
</script>

<style scoped>
div{
    display:  grid;
    gap: 20px;
}
</style>
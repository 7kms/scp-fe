<style lang="less" module>
    @import '../../../assets/less/const.less';
   .mainwrap{
       background-color: @bg-body-color;
   }
    
</style>

<template>
    <div :class="$style.mainwrap">
        <MainBanner v-once/>
        <IndustryPosition  v-once :class="$style.industryPosition"/>
        <QuestionApp v-once/>
        <Solveway v-once/>
        <Feature />
    </div>
</template>

<script>
import MainBanner from './main.vue'
import IndustryPosition from './industryPosition.vue'
import QuestionApp from './questionApp.vue'
import Solveway from './solveway.vue'
import Feature from './feature.vue'
export default {
    components:{
        MainBanner,
        IndustryPosition,
        QuestionApp,
        Solveway,
        Feature
    },
    data(){
        return{
        }
    },
    created(){
    }
}
</script>
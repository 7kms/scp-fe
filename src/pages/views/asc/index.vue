<style lang="less" module>
    @import '../../../assets/less/const.less';
   .mainwrap{
       width: 100%;
       overflow: hidden;
       background-color: @bg-body-color;
   }
   .itemSpecial{
       margin-top: -56*@px2rem;
   }
</style>

<template>
    <div :class="$style.mainwrap">
        <MainBanner v-once/>
        <IndustryPosition  v-once />
        <QuestionApp v-once/>
        <Solveway v-once/>
        <BrightSpot v-once/>
        <Feature v-once/>
        <Develop v-once/>
        <SalePlan v-once/>
        <Team v-once/>
        <Aboutus v-once/>
    </div>
</template>

<script>
import MainBanner from './main.vue'
import IndustryPosition from './industryPosition.vue'
import QuestionApp from './questionApp.vue'
import Solveway from './solveway.vue'
import Feature from './feature.vue'
import BrightSpot from './brightspot.vue'
import Develop from './develop.vue'
import SalePlan from './saleplan.vue'
import Team from './team.vue'
import Aboutus from './aboutus.vue'
export default {
    components:{
        MainBanner,
        IndustryPosition,
        QuestionApp,
        Solveway,
        Feature,
        BrightSpot,
        Develop,
        SalePlan,
        Team,
        Aboutus
    }
}
</script>
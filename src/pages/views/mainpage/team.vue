<style lang="less" module>
    @import '../../../assets/less/const.less';
    @panelW: 409/20rem; @panelH: 684/20rem;
    .content{
        padding-bottom: 100/20rem;
    }
  .panelList{
      color: @font-color-normal;
      width: (409*3+2*30)/20rem;
      margin: 0 auto;
      .panel{
          width: @panelW;
          height: @panelH;
          background-color: #fff;
          box-shadow: 0 2/20rem 22/20rem 0 rgba(214,214,214,0.50);
          img{
              max-width: 100%;
              max-height: 359/20rem;
          }
          &:not(:first-child){
              margin-left: 29/20rem;
          }

          .main{
              padding: 30/20rem 40/20rem;
          }
      }
      .name,.position{
          font-size: 24/20rem;
          font-weight: bolder;
      }
      .position{
          margin-top: 10/20rem;
          margin-bottom: 20/20rem;
      }
      .desc{
          color: @font-color-normal;
          font-size: 15/20rem;
      }
  }
</style>

<template>
  <div :class="['content-item',$style.content]">
      <h3 class="item-header">团队介绍</h3>
      <div :class="['text-center','clearfix',$style.panelList]">
         <div :class="['fl',$style.panel]" v-for="(panel, index) in list" :key="index">
             <div>
                 <img :src="panel.img">
             </div>
             <div :class="$style.main">
                  <div :class="$style.name">{{panel.name}}</div>
                    <div :class="$style.postion">{{panel.position}}</div>
                    <div :class="[$style.desc,'text-left']">{{panel.desc}}</div>
             </div>
            
         </div>
      </div>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                list:[
                    {
                        img:require('@img/team-1.png'),
                        name:'倪顺元',
                        position: 'CTO',
                        desc:'毕业于北京大学，就职于中国农业银行和民生银行，负责银行核心项目以及区块链创新项目。对金融行业有近十年的工作经验也非常熟悉，作为早期从事区块链研究以及与R3组织对接的人员，倪顺元先生对区块链也非常有心得。'
                    },
                    {
                        img:require('@img/team-2.png'),
                        name:'汪冲',
                        position: 'CEO',
                        desc:'先后毕业于上海交通大学和北京大学学，曾就职于中国农业银行和中信银行，带领过网上银行，互联网金融，手机银行，Apple Pay等战略重点项目，对金融业务与系统有近十年的经验，多次从零到壹的经验，是一位连续创业者。'
                    },
                    {
                        img:require('@img/team-3.png'),
                        name:'孙爱红',
                        position: 'COO',
                        desc:'十数年市场与运营经验，曾就职于国内市场与公关公司龙头信诺传播，以及一线互联网公司360安全，制定公司的市场战略发展规划，组织与落地品牌传播、用户大会、互联网大会等市场运营活动，拥有非常丰富的市场推广与用户运营经验。'
                    }
                ]
            }
        }
    }
</script>

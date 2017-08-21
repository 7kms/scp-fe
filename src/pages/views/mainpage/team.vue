<style lang="less" module>
    @import '../../../assets/less/const.less';
    @panelW: 409*@px2rem; @panelH: 820*@px2rem;
    .content{
        padding-bottom: 100*@px2rem;
    }
  .panelList{
      color: @font-color-normal;
      width: (409*3+2*30)*@px2rem;
      margin: 0 auto;
      .panel{
          width: @panelW;
          height: @panelH;
          background-color: #fff;
          box-shadow: 0 2*@px2rem 22*@px2rem 0 rgba(214,214,214,0.50);
          img{
              max-width: 100%;
              max-height: 359*@px2rem;
          }
          &:not(:first-child){
              margin-left: 29*@px2rem;
          }

          .main{
              padding: 30*@px2rem 40*@px2rem;
          }
      }
      .name,.position{
          font-size: 24*@px2rem;
          font-weight: bolder;
      }
      .position{
          margin-top: 10*@px2rem;
          margin-bottom: 20*@px2rem;
      }
      .desc{
          color: @font-color-normal;
          font-size: 15*@px2rem;
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
                    <div :class="$style.position">{{panel.position}}</div>
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
                        desc:' 汪冲先生先后就读于上海交通大学和北京大学，毕业后就职于中国农业银行和中信银行，参与并带领过网上银行，数据仓库，互联网金融，手机银行，Apple Pay等战略重点项目，对金融业务与系统有近十年的经验。后又联合创立互联网招聘公司，魔方招聘，目前已成长为国内RPO招聘市场龙头，对互联网行业也很有心得。汪冲先生有多次从零到壹的经验，是一位连续创业者。'
                    },
                    {
                        img:require('@img/team-3.png'),
                        name:'孙爱红',
                        position: 'CMO',
                        desc:'孙爱红女士毕业于北京外国语大学，毕业后先后就职于国内市场与公关的龙头公司（信诺传播）以及一线互联网安全公司360，拥有十五年市场推广与运营经验，参与并制定公司的市场发展策略与规划，组织与落地品牌传播、用户大会、互联网大会、新品发布会等品牌推广与运营活动，拥有非常丰富的市场推广与用户运营经验。'
                    }
                ]
            }
        }
    }
</script>

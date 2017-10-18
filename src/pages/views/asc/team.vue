<style lang="less" module>
    @import '../../../assets/less/const.less';
    @panelW: 409*@px2rem; @panelH: 980*@px2rem;
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
          font-size: 18*@px2rem;
      }
  }
</style>

<template>
  <div :class="['content-item',$style.content]">
      <h3 class="item-header">Team introduction</h3>
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
                        name:'Shunyuan Ni',
                        position: 'ASC Co-founder  CTO',
                        desc:'Mr. Shunyuan Ni graduated from Peking University, joined the Agricultural Bank Chinese and Minsheng Bank then after.  Responsible for core banking project and block chain innovation project.  He has more than 10 years of experience of financing, also as the early researcher with R3.  Mr. Shunyuan Ni is very familiar with block chain.'
                    },
                    {
                        img:require('@img/team-2.png'),
                        name:'Jacky Wang',
                        position: 'ASC Labs Founder  CEO',
                        desc:'Mr. Jacky Chong graduated from Shanghai Jiao Tong University and Peking University, after graduation he worked for the Agricultural Bank Chinese and CITIC Bank, participated in and lead the Internet banking, data warehouse, Internet banking, mobile phone banking, Apple Pay and other strategic key projects, has nearly ten years of experience in financial and business systems. He co-founded the Internet recruitment company, Cubic Recruitment, has now grown to the domestic RPO recruitment market leader. Mr. Jacky Chong has many experiences from zero to one. He is a serial entrepreneur.'
                    },
                    {
                        img:require('@img/team-3.png'),
                        name:'Hannah Sun',
                        position: 'ASC Co-founder  CMO',
                        desc:'Ms. Hannah Sun graduated from Beijing Foreign Studies University, after graduation, she worked in the domestic marketing and public relationship leader company (ACC), after then joined 360 internet security company.  She has more than 15 years experiences of marketing and operation.  Planed company strategy, organize brand marketing, user conferences, brand and marketing operation, has very solid experiences about marketing.'
                    }
                ]
            }
        }
    }
</script>

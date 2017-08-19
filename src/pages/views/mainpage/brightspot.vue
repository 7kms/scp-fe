<style lang="less" module>
    @import '../../../assets/less/const.less';
    @panelW: 380/20rem;
    .content{
        padding-bottom: 73/20rem;
    }
  .panelList{
      width: (380*3+2*68)/20rem;
      margin: 0 auto;
      .panel{
          width: @panelW;
          height: @panelW;
          padding: 56/20rem 50/20rem 80/20rem;
          background-color: #fff;
          box-shadow: 0 2/20rem 22/20rem 0 rgba(214,214,214,0.50);
          img{
              max-width: 100%;
              max-height: 66.3/20rem;
          }
          &:not(:first-child){
              margin-left: 68/20rem;
          }
      }
      .title{
          font-size: 18/20rem;
          color: #316FFB;
          margin-bottom: 32/20rem;
          margin-top: 50/20rem;
      }
      .desc{
          color: @font-color-normal;
          font-size: 15/20rem;
      }
  }
</style>

<template>
  <div :class="['content-item',$style.content]">
      <h3 class="item-header">问题&应用</h3>
      <div :class="['text-center','clearfix',$style.panelList]">
         <div :class="['fl',$style.panel]" v-for="(panel, index) in list" :key="index">
             <div>
                 <img :src="panel.img">
             </div>
             <div :class="$style.title">{{panel.title}}</div>
             <div :class="[$style.desc,'text-left']">{{panel.desc}}</div>
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
                        img:require('@img/qa-foundless.png'),
                        title:'服务找不到？',
                        desc:'基于区块链，低成本高效接入全球服务，开放生态建设，携手合作伙伴，为您提供更多服务。'
                    },
                    {
                        img:require('@img/qa-trustless.png'),
                        title:'服务信不过？',
                        desc:'全场景实名制，交易记录科学保证无法篡改，假的永远真不了！'
                    },
                    {
                        img:require('@img/qa-payless.png'),
                        title:'服务付不了？',
                        desc:'商链提供信用中介与担保，并整合比特币第三方支付公司，虚拟币交易平台与当地金融机构，让您任意付，任性付。'
                    }
                ]
            }
        }
    }
</script>

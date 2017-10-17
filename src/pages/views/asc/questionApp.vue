<style lang="less" module>
    @import '../../../assets/less/const.less';
    @panelW: 409*@px2rem;
    @panelH: 460*@px2rem;
    .content{
        position: relative;
        padding-bottom: 69*@px2rem;
    }
    .panelList{
      width: (409*3+2*27)*@px2rem;
      margin: 0 auto;
      .panel{
          width: @panelW;
          height: @panelH;
          padding: 47*@px2rem 49*@px2rem 0;
          background-color: #fff;
          box-shadow: 0 2*@px2rem 22*@px2rem 0 rgba(214,214,214,0.50);
          img{
              display: block;
              margin: 0 auto;
              max-width: 100%;
          }
          &:not(:first-child){
              margin-left: 27*@px2rem;
          }
          &:nth-child(1){
              img{
                  height: 41*@px2rem
              }
              .desc{
                margin-top:30*@px2rem;
              }
          }
          &:nth-child(2){
              img{
                  height: 41*@px2rem
              }
              .desc{
                margin-top:30*@px2rem;
              }
          }
          &:nth-child(3){
              img{
                  height: 51*@px2rem
              }
              .desc{
                margin-top:25*@px2rem;
              }
          }
          .desc{
            color: @font-color-normal;
            font-size: 18*@px2rem;
         }
      }
    }
    .circle2{
        left: 0;
        top: 430*@px2rem;
        width: 269*@px2rem;
        height: 269*@px2rem;
        margin-left: -269/2*@px2rem;
        background-image: url('@img/asc/circle-2.png');
    }
</style>

<template>
  <div :class="['content-item',$style.content]">
      <h3 class="item-header">Anonymous Industry Problems</h3>
      <div :class="['text-center','clearfix',$style.panelList]">
         <div :class="['fl',$style.panel]" v-for="(panel, index) in list" :key="index">
             <img :src="panel.img">
             <div :class="[$style.desc,'text-left']">{{panel.desc}}</div>
         </div>
      </div>
      <div :class="[$style.circle2,'widget']"></div>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                list:[
                    {
                        img:require('@img/asc/un-detectable.png'),
                        desc:'Due to the region and industry limitation of the vertical service platforms, consumers could find mainstream services in the big cities. But as for small ones, high quality services or really special services are really hard to be detectable.'
                    },
                    {
                        img:require('@img/asc/un-trustful.png'),
                        desc:'Service trust is now and always will be the biggest issue of online services industry, especially for the anonymous services.  Anonymous reputation is one of the solution for this issue.  But still not enough, should the reputation platform be trusted?  Even for some platform, the reputation manipulation is one of its income items.'
                    },
                    {
                        img:require('@img/asc/un-payable.png'),
                        desc:'Since lack of trust, anonymous services are really hard to pay. Besides the provider may be outside of the country, may not want to be transferred to his/her bank account, or may payment process will last for days, even weeks.  Or simply, do you trust him/her enough to pay the service all in one time, especially for an anonymous one.'
                    }
                ]
            }
        }
    }
</script>

<style lang="less" module>
    @import '../../../assets/less/const.less';
    @itemW: 740/20rem;
    @itemH: 413/20rem;
    .content{
        background-color: #fff;
        padding-top: 40/20rem;
    }
    .list{
        position: relative;
        width: 2* @itemW;
        height: 2* @itemH;
        margin: 0 auto;
        color: @font-color-normal;
        &::before,&::after{
            content: '';
            position: absolute;
        }
        &::before{
            width: 100%;
            height: 1px;
            opacity: 0.3;
            top: 50%;
            margin-top: -1/20rem;
            left: 0;
            background-image: linear-gradient(-90deg, rgba(255,255,255,0.00) 2%, #5F6B83 16%, #5F6B83 85%, rgba(255,255,255,0.00) 99%);
        }
        &::after{
            width: 1px;
            height: 100%;
            opacity: 0.3;
            left: 50%;
            margin-left: -1/20rem;
            top: 0;
            background-image: linear-gradient(0deg, rgba(255,255,255,0.00) 2%, #5F6B83 16%, #5F6B83 85%, rgba(255,255,255,0.00) 99%);
        }
        .item{
            width: @itemW;
            height: @itemH;
            padding-top: 55/20rem;
            padding-bottom: 56/20rem;
            padding-left: 84.5/20rem;
            padding-right: 95.5/20rem;
        }
         .title{
            font-weight: bolder;
            font-size: 18/20rem;
            margin-bottom: 25/20rem;
        }
        .desc{
            font-size: 15/20rem;
        }
        .img{
           margin-top:47/20rem;
            img{
               max-height: 145/20rem;
               max-width: 145/20rem;
            }
        }
    }
   
</style>

<template>
  <div :class="['content-item',$style.content]">
      <h3 class="item-header">解决方案</h3>
      <div :class="[$style.list,'text-center']">
          <div :class="[$style.item,'fl']" v-for="(item ,index) in list" :key="index">
              <div :class="$style.title">{{item.title}}</div>
              <div :class="[$style.desc,'text-left']">{{item.desc}}</div>
              <div :class="$style.img">
                  <img :src="item.img">
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
                        img:require('@img/solve-2.png'),
                        title:'消费者',
                        desc:'发现全球优质服务，总有一款适合你，使用商链信用支付，币种疆域再不是问题。'
                    },
                    {
                        img:require('@img/solve-2.png'),
                        title:'个人及小微企业服务者',
                        desc:'钻营品质服务，征服全球消费者，跨币跨境收款，优质信誉没有界限。'
                    },
                    {
                        img:require('@img/solve-3.png'),
                        title:'行业服务平台',
                        desc:'开放访问商链信用，打通信用壁垒，塑造信用标准，劣质服务再无遁形。'
                    },
                    {
                        img:require('@img/solve-4.png'),
                        title:'生态合作伙伴',
                        desc:'接入商链信用与支付体系，整合全球品质服务，扩宽自身服务平台，拓展全球服务场景，与商链平台，与全球消费者共赢。'
                    }
                ]
            }
        }
    }
</script>

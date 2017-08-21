<style lang="less" module>
    @import '../../../assets/less/const.less';
     .list{
        width: 1221*@px2rem;
        margin: 0 auto;
     }
     .item{
         color: @font-color-normal;
         margin-bottom: 40*@px2rem;
         background-color: #fff;
         box-shadow: 0 2*@px2rem 22*@px2rem 0 rgba(214,214,214,0.50);
        .left{
            width: 480*@px2rem;
            height: 320*@px2rem;
            img{
                max-width: 100%;
            }
        }
        .right{
            padding-left:  66*@px2rem;
            padding-top:45*@px2rem;
            padding-right: 75*@px2rem;
            width: (1221-480)*@px2rem;
            .title{
                font-size: 24*@px2rem;
                font-weight: bolder;
                margin-bottom:40*@px2rem;
            }
        }
   }
</style>

<template>
  <div>
      <h3 class="item-header">商链亮点分析</h3>
      <div :class="[$style.list]">
          <div :class="[$style.item,'clearfix']" v-for="(item,index) in list" :key="index">
              <div :class="['fl',$style.left]">
                  <img :src="item.img">
              </div>
              <div :class="['fr',$style.right]">
                  <div :class="$style.title">{{item.title}}</div>
                  <div class="desc-qoute">{{item.desc}}</div>
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
                       title:'服务全球、全行业',
                       img:require('@img/brightspot-1.png'),
                       desc:'借助于区块链技术，让商链具备低成本、高效接入全球、全行业的个人和小微服务者的能力，而不仅是单一的某个地域某个行业的垂直服务平台。通过整合全球的个人和小微服务者，可以真正让服务打破限制，极大拓宽消费者的选择空间，也让跨地域跨行业的服务协作成为可能，让服务提供从量变发生质变。'
                    },
                    {
                       title:'开放生态体系',
                       img:require('@img/brightspot-2.png'),
                       desc:'不同于封闭的行业信用平台， 商链是开放的生态体系，个人和小微服务者的信用信息直接记录在区块链中，所有行业平台都可以访问并使用。也是将全球的服务者推向各个行业各个角落。此外，商链也面向全球选择生态合作伙伴，拓展信用支付的使用场景、使用行业，极大方便消费者，也实现商链的共赢发展。'
                    },
                    {
                       title:'服务全球、全行业',
                       img:require('@img/brightspot-3.png'),
                       desc:'不同于普通的虚拟货币支付体系，商链通过整合交易所和第三方支付资源，可以实现当地货币与虚拟货币之间的顺畅切换，真正解决区块链体系中的支付障碍，打通区块链生态系统应用的最后一英里。'
                    }
                ]
            }
        }
    }
</script>

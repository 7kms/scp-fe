<style lang="less" module>
    @import '../../../assets/less/const.less';
    .wrap{
        padding-top: 43*@px2rem;
        padding-bottom: 64*@px2rem;
    }
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
  <div :class="$style.wrap">
      <h3 class="item-header">ASC Advantage Analysis</h3>
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
                       title:'Serves global services of all industries',
                       img:require('@img/asc/brightspot-1.png'),
                       desc:'Different from traditional service platforms, based on blockchain technology, ASC can access global services of all industries with low cost and high efficiency.  Not restricted into single region or single industry. By integrating global personal and small company services, ASC could help to expand service scenarios, to integrate services in different regions and industries, to complete complex tasks.'
                    },
                    {
                       title:'Convenient payment experience',
                       img:require('@img/asc/brightspot-2.png'),
                       desc:'Different from traditional payment system, ASC integrates the exchange and third part payment system and local financial institutions, ASC provides a complete convenient payment solution, to solve the last mile of the payment application.  Anyone can pay any kind of currency for any service(not including drugs) in any region.'
                    },
                    {
                       title:'Open eco-system',
                       img:require('@img/asc/brightspot-3.png'),
                       desc:'Different from traditional closed anonymous reputation platform, ASC is an open eco-system.  The reputation results of personal and small business services providers are recorded into the open blockchain, any one accesses the open blockchain could use it.  With this mechanism, we could push all the service providers global.'
                    }
                ]
            }
        }
    }
</script>

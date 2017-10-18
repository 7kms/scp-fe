<style lang="less" module>
    @import '../../../assets/less/const.less';
    @itemW: 740*@px2rem;
    @itemH: 430*@px2rem;
    .content{
        background-color: #fff;
        padding-top: 40*@px2rem;
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
            margin-top: -1*@px2rem;
            left: 0;
            background-image: linear-gradient(-90deg, rgba(255,255,255,0.00) 2%, #5F6B83 16%, #5F6B83 85%, rgba(255,255,255,0.00) 99%);
        }
        &::after{
            width: 1px;
            height: 100%;
            opacity: 0.3;
            left: 50%;
            margin-left: -1*@px2rem;
            top: 0;
            background-image: linear-gradient(0deg, rgba(255,255,255,0.00) 2%, #5F6B83 16%, #5F6B83 85%, rgba(255,255,255,0.00) 99%);
        }
        .item{
            width: @itemW;
            height: @itemH;
            padding-top: 55*@px2rem;
            padding-bottom: 56*@px2rem;
            padding-left: 84.5*@px2rem;
            padding-right: 95.5*@px2rem;
        }
         .title{
            font-weight: bolder;
            font-size: 20*@px2rem;
            margin-bottom: 25*@px2rem;
        }
        .desc{
            min-height: 88*@px2rem;
            font-size: 18*@px2rem;
        }
        .img{
           margin-top:47*@px2rem;
            img{
               max-height: 145*@px2rem;
               max-width: 145*@px2rem;
            }
        }
    }
   
</style>

<template>
  <div :class="['content-item',$style.content]">
      <h3 class="item-header">ASC Solution</h3>
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
                        img:require('@img/asc/solve-1.png'),
                        title:'Consumers',
                        desc:'Consumers could find any kind of qualified services around the world, find the services suits the most, and could pay in local currency or any digital currency conveniently.  Also ASC could be the credit guarantee, the consumer could no worry to be fraud.'
                    },
                    {
                        img:require('@img/asc/solve-2.png'),
                        title:'Individual and small business providers',
                        desc:'Individual and small business providers could provide services to access the global markets anonymously, to conquer the worldwide consumers with highly qualified service and reputation.'
                    },
                    {
                        img:require('@img/asc/solve-3.png'),
                        title:'Industry platforms',
                        desc:'Industry platforms could access the ASC reputation, to access and to integrate the global services.'
                    },
                    {
                        img:require('@img/asc/solve-4.png'),
                        title:'Ecosystem partners ',
                        desc:'Ecosystem partners could not only access the reputation system, the global services, but also could use the payment system, to expand the service scenarios.'
                    }
                ]
            }
        }
    }
</script>

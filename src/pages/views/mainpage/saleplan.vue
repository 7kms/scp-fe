<style lang="less" module>
    @import '../../../assets/less/const.less';
    .wrap{
        position: relative;
    }
    .content{
        padding-top: 53*@px2rem;
        width: 1280*@px2rem;
        margin: 0 auto;
        color: @font-color-normal;
        .pen{
            margin-top: -28*@px2rem;
            background-image: url('@img/plan-pen.png');
            background-repeat: no-repeat;
            background-position: left top;
            background-size: 85*@px2rem 85*@px2rem;
            height: 85*@px2rem;
        }
        .itemTitle{
            font-weight: bolder;
            margin-bottom: 40*@px2rem;
            font-size: 24*@px2rem;
        }
        .desc{
            font-size: 15*@px2rem;
            margin-bottom: 42*@px2rem;
            }
        .planItem{
            text-align: center;
        }
        .itemList1{
            width: 930*@px2rem;
            margin: 0 auto;
           .item1{
               &:nth-child(2){
                   margin-left: 224*@px2rem;
                   margin-right: 195*@px2rem;
               }
               .img1{
                   width: 147*@px2rem;
                   margin: 0 auto;
                   img{
                       width: 100%;
                   }
               }
           }
        }
        .itemList2{
            width: 1132*@px2rem;
            margin: 0 auto;
            font-size: 15*@px2rem;
           .item2{
            //    width: 129*@px2rem;
               &:nth-child(2){
                   margin-left: 165*@px2rem;
               }
                &:nth-child(3){
                   margin-left: 186*@px2rem;
               }
                &:nth-child(4){
                   margin-left: 156*@px2rem;
               }
                .img2{
                    width: 147*@px2rem;
                   margin: 0 auto;
                   img{
                       width: 100%;
                   }
                }
           }
        }
    }
    
    .split{
        margin-top: 44*@px2rem;
        margin-bottom: 48*@px2rem;
        height: 1px;
        background: linear-gradient(-90deg, rgba(255,255,255,0.00) 2%, #5F6B83 16%, #5F6B83 85%, rgba(255,255,255,0.00) 99%);
    }
    .circle4{
        right: 216*@px2rem;
        top: 450*@px2rem;
        width: 100*@px2rem;
        height: 100*@px2rem;
        background-image: url('@img/circle-4.png');
    }
    .circle5{
        right: 281*@px2rem;
        top: 900*@px2rem;
        width: 39*@px2rem;
        height: 39*@px2rem;
        background-image: url('@img/circle-5.png');
    }
</style>

<template>
  <div :class="['content-item',$style.wrap]">
    <!-- <div :class="[$style.circle4,'widget']"></div> -->
    <!-- <div :class="[$style.circle5,'widget']"></div> -->
    <div :class="$style.content">
        <h3 :class="['item-header']">发售计划</h3>
        <div :class="$style.pen"></div>
        <div :class="['clearfix',$style.main]">
            <div :class="$style.desc">商链团队将发放基于以太坊令牌标准的SCP代币，代币总发行量为10亿，永不增发。而各位投资者购买代币除了可以享受到平台发展带来的代币增值，也可以在商链平台中通过代币来购买您所需要的服务，切实享受到平台发展带来的收益与便利。</div>
            <div :class="[$style.planItem,$style.plan1] ">
                <div :class="$style.itemTitle">SCP代币发行计划</div>
                <div :class="[$style.itemList1,'clearfix']">
                    <div :class="[$style.item1,'fl']" v-for="(item,index) in list1" :key="index">
                        <div :class="$style.img1">
                            <img :src="item.img">
                        </div>
                        <div :class="$style.desc" v-html="item.desc"></div>
                    </div>
                </div>
            </div>
            <div :class="$style.split"></div>
            <div :class="[$style.planItem,$style.plan2] ">
                <div :class="$style.itemTitle">募集资金用途</div>
                <div :class="[$style.itemList2,'clearfix']">
                    <div :class="[$style.item2,'fl']" v-for="(item,index) in list2" :key="index">
                        <div :class="$style.img2">
                            <img :src="item.img">
                        </div>
                        <div :class="$style.desc" v-html="item.desc"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                list1:[{
                    img:require('@img/plan1-1.png'),
                    desc:'ICO公开发售<span class="strong">40</span>%'
                },{
                    img:require('@img/plan1-2.png'),
                    desc:'私下募集与战略投资者<span class="strong">15</span>%'
                },{
                    img:require('@img/plan1-3.png'),
                    desc:'团队持有<span class="strong">45</span>%'
                }],
                list2:[{
                    img:require('@img/plan2-1.png'),
                    desc:'核心研发<span class="strong">50</span>%'
                },{
                    img:require('@img/plan2-2.png'),
                    desc:'安全与法务<span class="strong">10</span>%'
                },{
                    img:require('@img/plan2-3.png'),
                    desc:'运营推广<span class="strong">20</span>%'
                },
                {
                    img:require('@img/plan2-4.png'),
                    desc:'市场与商务合作<span class="strong">20</span>%'
                }]
            }
        }
    }
</script>

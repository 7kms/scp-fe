<style lang="less" module>
    @import '../../../assets/less/const.less';
    .content{
        padding-top: 53/20rem;
        width: 1280/20rem;
        margin: 0 auto;
        color: @font-color-normal;
        .pen{
            margin-top: -28/20rem;
            background-image: url('@img/plan-pen.png');
            background-repeat: no-repeat;
            background-position: left top;
            background-size: 85/20rem 85/20rem;
            height: 85/20rem;
        }
        .itemTitle{
            font-weight: bolder;
            margin-bottom: 40/20rem;
            font-size: 24/20rem;
        }
        .desc{
            font-size: 15/20rem;
            margin-bottom: 42/20rem;
            }
        .planItem{
            text-align: center;
        }
        .item{
            float: left;
        }
        .itemList1{
            width: 1020/20rem;
            margin: 0 auto;
           .item{
               &:not(:first-child){
                   margin-left: 224/20rem;
               }
               .img{
                   width: 129/20rem;
                   margin: 0 auto;
                   img{
                       width: 100%;
                   }
               }
           }
        }
        .itemList2{
           .item{
               &:not(:first-child){
                   margin-left: 125/20rem;
               }
           }
        }
    }
    
    .split{
        margin-top: 44/20rem;
        margin-bottom: 48/20rem;
        height: 1px;
        background: linear-gradient(-90deg, rgba(255,255,255,0.00) 2%, #5F6B83 16%, #5F6B83 85%, rgba(255,255,255,0.00) 99%);
    }
   
</style>

<template>
  <div :class="['content-item',$style.wrap]">
    <!-- <div :class="$style.circle"></div> -->
    <div :class="$style.content">
        <h3 :class="['item-header']">发售计划</h3>
        <div :class="$style.pen"></div>
        <div :class="['clearfix',$style.main]">
            <div :class="$style.desc">商链团队将发放基于以太坊令牌标准的SCP代币，代币总发行量为10亿，永不增发。而各位投资者购买代币除了可以享受到平台发展带来的代币增值，也可以在商链平台中通过代币来购买您所需要的服务，切实享受到平台发展带来的收益与便利。</div>
            <div :class="[$style.planItem,$style.plan1] ">
                <div :class="$style.itemTitle">SCP代币发行计划</div>
                <div :class="[$style.itemList1,'clearfix']">
                    <div :class="$style.item" v-for="(item,index) in list1" :key="index">
                        <div :class="$style.img">
                            <img :src="item.img" alt="">
                        </div>
                        <div :class="$style.text" v-html="item.desc"></div>
                    </div>
                </div>
            </div>
            <div :class="$style.split"></div>
            <div :class="[$style.planItem,$style.plan2] ">
                <div :class="$style.itemTitle">SCP代币发行计划</div>
                <div :class="[$style.itemList2,'clearfix']">
                    <div :class="$style.item" v-for="(item,index) in list2" :key="index">
                        <div :class="$style.img">
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

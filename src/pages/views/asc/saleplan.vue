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
            background-image: url('@img/asc/plan-pen.png');
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
            font-size: 18*@px2rem;
            margin-bottom: 42*@px2rem;
            }
        .planItem{
            text-align: center;
        }
        .itemList1{
            width: 1120*@px2rem;
            margin: 0 auto;
           .item1{
               width: 283*@px2rem;
               &:nth-child(2){
                   margin-left: 133*@px2rem;
                   margin-right: 127*@px2rem;
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
            width: 1142*@px2rem;
            margin: 0 auto;
            font-size: 18*@px2rem;
           .item2{
            //    width: 129*@px2rem;
               &:nth-child(2){
                   margin-left: 102*@px2rem;
               }
                &:nth-child(3){
                   margin-left: 150*@px2rem;
               }
                &:nth-child(4){
                   margin-left: 135*@px2rem;
               }
                .img2{
                    width: 129*@px2rem;
                   margin: 0 auto;
                   img{
                       width: 100%;
                   }
                }
                .desc{
                    max-width:217*@px2rem;
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
    .circle3{
        right: 203*@px2rem;
        top: 403*@px2rem;
        width: 101*@px2rem;
        height: 101*@px2rem;
        background-image: url('@img/asc/circle-3.png');
    }
    .circle4{
        left: 275*@px2rem;
        top: 903*@px2rem;
        width: 40*@px2rem;
        height: 40*@px2rem;
        background-image: url('@img/asc/circle-4.png');
    }
</style>

<template>
  <div :class="['content-item',$style.wrap]">
    <div :class="[$style.circle3,'widget']"></div>
    <div :class="[$style.circle4,'widget']"></div>
    <div :class="$style.content">
        <!-- <h3 :class="['item-header']">发售计划</h3> -->
        <div :class="$style.pen"></div>
        <div :class="['clearfix',$style.main]">
            <div :class="$style.desc">ASC labs is planning to issue ASC tokens based on Ethereum token standard, with a total 1 billion tokens, and will never to be issued again.  Besides the rapid value added of the ASC tokens, ASC tokens could also be paid for the qualified services.  So our investors could really benefits from the development of the ASC platform.</div>
            <div :class="[$style.planItem,$style.plan1] ">
                <div :class="$style.itemTitle">ASC Issue Plan</div>
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
                <div :class="$style.itemTitle">Funding Usage</div>
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
                    img:require('@img/asc/plan1-1.png'),
                    desc:'ICO plans to publicly offer <span class="text-highlight">40%</span> of the tokens'
                },{
                    img:require('@img/asc/plan1-2.png'),
                    desc:'Oriented raising and strategic investments of <span class="text-highlight">15%</span>'
                },{
                    img:require('@img/asc/plan1-3.png'),
                    desc:'The team holds <span class="text-highlight">45%</span> of the token'
                }],
                list2:[{
                    img:require('@img/asc/plan2-1.png'),
                    desc:'core system research and development<span class="text-highlight">50%</span>'
                },{
                    img:require('@img/asc/plan2-2.png'),
                    desc:'security and legal<span class="text-highlight">10%</span>'
                },{
                    img:require('@img/asc/plan2-3.png'),
                    desc:'operation<span class="text-highlight">20%</span>'
                },
                {
                    img:require('@img/asc/plan2-4.png'),
                    desc:'marketing and business cooperation work<span class="text-highlight">20%</span>'
                }]
            }
        }
    }
</script>

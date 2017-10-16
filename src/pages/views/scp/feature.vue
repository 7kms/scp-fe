<style lang="less" module>
    @import '../../../assets/less/const.less';
    .content{
        position: relative;
        height: 900*@px2rem;
        padding-top: 133*@px2rem;
        // background-color: #fff;
        background-image:url('@img/feature-bg.png');
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
       .circle{
           left: 0;
           top: 0;
           width: 100%;
           height: 200px;
           position: absolute;
           background-color: #fff;
       }
       .main{
           position: relative;
           z-index: 1;
       }
    }
    .info{
        width: 1086*@px2rem;
        margin: 74*@px2rem auto 0;
    }
    .right{
        width: 480*@px2rem;
        color: #fff;
        .title{
            font-weight: bolder;
            font-size: 24*@px2rem;
            padding-bottom: 20*@px2rem;
            border-bottom: 1px solid #fff;
        }
        .desc{
            font-size: 15*@px2rem;
            padding-top: 20*@px2rem;
        }
    }
    .left{
        @width: 147*@px2rem;
        width: 481*@px2rem;
        &>div:nth-child(odd){
            padding-left:  @width/2;
        }
        .row{
            & > div{
                &:not(:first-child){
                    margin-left: 20*@px2rem;
                }
            }
            margin-bottom: 65*@px2rem;
        }
        .hexagon{
            position: relative;
            float: left;
            z-index: 2;
            background-color: #fff;
            width: @width;
            height: 80*@px2rem;
            box-shadow: 0 2*@px2rem 14*@px2rem 0 #2B53AB;
            background-position: center;
            background-repeat: no-repeat;
            &::before,&::after{
                content:'';
                position: absolute;
                height: 0;
                width: 0;
                border-color: transparent;
                z-index: 1;
                border-left: @width/2 solid transparent;
                border-right: @width/2 solid transparent;
            }
            &::before{
                
                border-bottom: 45*@px2rem solid #fff;
                left: 0;
                bottom: 100%;
            }
            &::after{
                 border-top: 45*@px2rem solid #fff;
                 left: 0;
                 top: 100%;
            }
            &.feature1{
                background-image: url('@img/feature-1.png');
                background-size: 74*@px2rem 75*@px2rem;
                &.active{
                    background-size: 81*@px2rem 80*@px2rem;
                     background-image: url('@img/feature-1-active.png')
                }
            }
            &.feature2{
                background-image: url('@img/feature-2.png');
                background-size: 74*@px2rem 74*@px2rem;
                &.active{
                     background-size: 74*@px2rem 79*@px2rem;
                     background-image: url('@img/feature-2-active.png')
                }
            }
            &.feature3{
                background-image: url('@img/feature-3.png');
                background-size: 67*@px2rem 67*@px2rem;
                &.active{
                     background-size: 74*@px2rem 79*@px2rem;
                     background-image: url('@img/feature-3-active.png')
                }
            }
            &.feature4{
                 background-size: 70*@px2rem 69*@px2rem;
                background-image: url('@img/feature-4.png');
                &.active{
                    background-size: auto 80*@px2rem;
                    background-image: url('@img/feature-4-active.png')
                }
            }
            &.feature5{
                background-image: url('@img/feature-5.png');
                background-size: 69*@px2rem 75*@px2rem;
                &.active{
                    background-size: auto 80*@px2rem;
                    background-image: url('@img/feature-5-active.png');
                }
            }
            &.feature6{
                background-image: url('@img/feature-6.png');
                background-size: 75*@px2rem 50*@px2rem;
                &.active{
                    background-size: 82*@px2rem 62*@px2rem;
                    background-image: url('@img/feature-6-active.png');
                }
            }
            &.feature7{
                background-image: url('@img/feature-7.png');
                background-size: 69*@px2rem 69*@px2rem;
                &.active{
                    background-size:auto 80*@px2rem;
                    background-image: url('@img/feature-7-active.png')
                }
            }
        }
    }
</style>

<template>
  <div :class="['content-item',$style.content]">
    <!-- <div :class="$style.circle"></div> -->
    <div :class="$style.main">
        <h3 :class="['item-header','white']">方案特点</h3>
        <div :class="['clearfix',$style.info]">
            <div :class="[$style.left,'fl']">
                <div :class="['clearfix',$style.row]">
                    <div :class="[$style.hexagon,$style.feature1,{[$style.active]:isActive(0)}]" @click="viewFeature(0)"></div>
                    <div :class="[$style.hexagon,$style.feature2,{[$style.active]:isActive(1)}]" @click="viewFeature(1)"></div>
                </div>
                <div :class="['clearfix',$style.row]">
                    <div :class="[$style.hexagon,$style.feature3,{[$style.active]:isActive(2)}]" @click="viewFeature(2)"></div>
                    <div :class="[$style.hexagon,$style.feature4,{[$style.active]:isActive(3)}]" @click="viewFeature(3)"></div>
                    <div :class="[$style.hexagon,$style.feature5,{[$style.active]:isActive(4)}]" @click="viewFeature(4)"></div>
                </div>
                <div :class="['clearfix',$style.row]">
                    <div :class="[$style.hexagon,$style.feature6,{[$style.active]:isActive(5)}]" @click="viewFeature(5)"></div>
                    <div :class="[$style.hexagon,$style.feature7,{[$style.active]:isActive(6)}]" @click="viewFeature(6)"></div>
                </div>
            </div>
            <div :class="[$style.right,'fr']">
                <div :class="$style.title">
                    {{list[currentFeatureIndex].title}}
                </div>
                <div :class="$style.desc" v-html="list[currentFeatureIndex].desc"></div>
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
                        title:'实名制',
                        desc:'使用Ethereumn区块链的智能合约，对个人服务者和小微企业实现实名制认证。将个人的信用在区块链全网范围内实现实名制。个人通过当地的身份证或者社会服务号，和护照双层实名认证，企业通过当地企业组织机构证和企业所有者双层认证。并对每一次提供的服务，每次的使用和评价结果都进行详细的记录，一次服务，终生可追溯。'
                    },
                     {
                        title:'防篡改',
                        desc:'通过使用区块链技术，每次服务，每一次评价都在全网范围内进行记录和广播，并经过加密认证，防止不良平台对交易评价的人为修改，真正反映出服务提供者的服务质量好坏。一次欺诈，永无遁形。'
                    },
                     {
                        title:'全球全行业接入',
                        desc:'依托于Ethereum成熟的区块链网络，可以实现低成本的对全球全行业个人和小微企业服务者的信用接入，服务行业第一次实现全球资源调配。英国的管家服务，意大利的设计服务，菲律宾的家政服务，新加坡的导游服务可以任你选择。'
                    },
                     {
                        title:'信用无死角',
                        desc:'借用区块链本身开放的技术，商链也采用开放的态度来搭建生态系统。任何人都可以接入商链中查看服务提供者的信用情况，打破目前垂直行业中不同平台的信用壁垒，实现信用无死角，彻底掐断不良服务提供者逐个平台欺诈的可能性。'
                    },
                     {
                        title:'信用支付中介',
                        desc:'使用智能合约技术，商链可以作为信用服务中介，为服务双方提供可信的支付服务。服务前双方约定付款的批次以及标准，写入智能合约。只有达到标准才能完成每次付款，并确保达到标准后一定如约付款，商链作为中间方也提供担保服务，让双方真正实现无担忧交易。'
                    },
                     {
                        title:'便捷支付',
                        desc:'通过接入虚拟币交易平台，比特币第三方支付公司，Ethereumn平台，以及当地金融机构，在金融监管允许范围内，商链可以实现任何地域、任何行业、任何币种的便捷支付，真正打通区块链全球支付的最后一英里。让全球服务调配不在存在障碍。'
                    },
                    {
                        title:'开放生态',
                        desc:'商链采用完全开放的态度来打造生态体系，共建良好的信用基础，拓展信用服务和智能服务场景。任何人都可以通过共有区块链的方式来获取个人和小微服务者的信用情况，并可以基于此来搭建信用应用。<br/>另一方面，商链也会在全球各行业选择合作伙伴，植入服务信用和便捷支付，商链也会选取几个样板领域自己构建应用，共同拓展信用服务场景和全球化服务场景。'
                    }
                ],
                currentFeatureIndex:0
            }
        },
        
        methods:{
            viewFeature(num){
                this.currentFeatureIndex = num;
            },
            isActive(index){
                return this.currentFeatureIndex == index;
            }
        }
    }
</script>

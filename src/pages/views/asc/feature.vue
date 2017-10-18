<style lang="less" module>
    @import '../../../assets/less/const.less';
    .content{
        position: relative;
        height: 869*@px2rem;
        padding-top: 60*@px2rem;
        color: #fff;
        background-color: #2D343E;
    }
    .info{
        width: 1086*@px2rem;
        margin: 81*@px2rem auto 0;
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
            font-size: 18*@px2rem;
            padding-top: 20*@px2rem;
        }
    }
    .left{
        @width: 159*@px2rem;
        width: 521*@px2rem;
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
            height: 90*@px2rem;
            box-shadow: 0 2*@px2rem 14*@px2rem 0 #2B53AB;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 159*@px2rem 184*@px2rem;
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
                background-image: url('@img/asc/feature-1.png');
                &.active{
                     background-image: url('@img/asc/feature-1-active.png')
                }
            }
            &.feature2{
                background-size: 138*@px2rem 155*@px2rem;
                background-image: url('@img/asc/feature-2.png');
                &.active{
                     background-image: url('@img/asc/feature-2-active.png')
                }
            }
            &.feature3{
                background-image: url('@img/asc/feature-3.png');
                &.active{
                     background-image: url('@img/asc/feature-3-active.png')
                }
            }
            &.feature4{
                margin-left: 0 !important;
                width: 181*@px2rem;
                box-shadow: none;
                background-color: transparent;
                background-size: 105*@px2rem 55*@px2rem;
                background-image: url('@img/asc/title.png');
                &::before{
                    border-bottom-color: transparent;
                }
                &::after{
                    border-top-color: transparent;
                }
            }
            &.feature5{
                margin-left: 0 !important;
                background-image: url('@img/asc/feature-5.png');
                background-size: 150*@px2rem 170*@px2rem;
                &.active{
                    background-image: url('@img/asc/feature-5-active.png');
                }
            }
            &.feature6{
                background-image: url('@img/asc/feature-6.png');
                &.active{
                    background-image: url('@img/asc/feature-6-active.png');
                }
            }
            &.feature7{
                background-image: url('@img/asc/feature-7.png');
                &.active{
                    background-image: url('@img/asc/feature-7-active.png')
                }
            }
        }
    }
</style>

<template>
  <div :class="['content-item',$style.content]">
    <div :class="$style.main">
        <h3 :class="['item-header','white']">ASC solution characteristics</h3>
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
                        title:'Anonymous Reputation',
                        desc:'Using Ethereum blockchain and the smart contracts, we could build anonymous reputation for every individual or small business services provider.  On one side, any provider could access to the whole network by any kind of identity, like username and password, or social card info.  All the identity information will be hashed to identity code to protect the privacy.  On the other side, the ASC could track every service comment and payment, though the service is anonymous, the whole reputation of the provider shall be recorded and traced.'
                    },
                     {
                        title:'Tamper proofing',
                        desc:'By using the blockchain technology, every service, every evaluation will be recorded and broadcasted within the whole network.  Also through encryption and authentication, any manipulation and tampering will be prevented.  Once fraud, never to hide.'
                    },
                     {
                        title:'Global services of all industries',
                        desc:'Relying on the mature blockchain network of Ethereum, it can realize the low cost reputation access of global services of all industries.  Our ecosystem partner could integrate the global services, like the design service of Italy, the guide service of Singapore, or the lawyer service of America.'
                    },
                     {
                        title:'信用无死角',
                        desc:'借用区块链本身开放的技术，商链也采用开放的态度来搭建生态系统。任何人都可以接入商链中查看服务提供者的信用情况，打破目前垂直行业中不同平台的信用壁垒，实现信用无死角，彻底掐断不良服务提供者逐个平台欺诈的可能性。'
                    },
                     {
                        title:'Reputation payment intermediary',
                        desc:'Using the smart contract and the reputation system, although the services are provided anonymous, ASC could also play the role of the payment intermediary, even supplying the guarantee service for qualified reputations.<br/>With ASC as the payment intermediary, the whole payment process could be more smoothly.  The hardest part of the anonymous service could be conquered now.'
                    },
                     {
                        title:'Convenient payment',
                        desc:'By means of the crypto currency exchange markets, bitcoin payment companies, Ethereum network, as well as local financial institutions, ASC could make the payment more conveniently. Any region, any industry, any service (not including drugs) could be paid in any currency, including the crypto currency.  ASC solves the global service payment of the last mile.  There will be no more barrier for global service payment.'
                    },
                    {
                        title:'Open ecosystem',
                        desc:'ASC adopts open attitudes to build our ecosystem, to build a solid reputation base, to expand the scenarios of the anonymous and intelligent services.  Anyone could access the reputation of personal and small business services through the public chain, could expand their services on it.<br/>On the other hand, ASC selects global partners of all industries.  The partners could use ASC payment service, also could join the reputation system.  Besides, ASC will choose a few sample industries to build its own application, to expand the service scenarios.'
                    }
                ],
                currentFeatureIndex:0
            }
        },
        
        methods:{
            viewFeature(num){
                if(num == 3)return;
                this.currentFeatureIndex = num;
            },
            isActive(index){
                return this.currentFeatureIndex == index;
            }
        }
    }
</script>

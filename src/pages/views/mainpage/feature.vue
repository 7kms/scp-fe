<style lang="less" module>
    @import '../../../assets/less/const.less';
    .content{
        position: relative;
        height: 900/20rem;
        padding-top: 133/20rem;
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
        width: 1086/20rem;
        margin: 0 auto;
    }
    .right{
        width: 480/20rem;
        color: #fff;
        .title{
            font-weight: bolder;
            font-size: 24/20rem;
            padding-bottom: 20/20rem;
            border-bottom: 1px solid #fff;
        }
        .desc{
            font-size: 15/20rem;
            padding-top: 20/20rem;
        }
    }
    .left{
        width: 481/20rem;
        &>div:nth-child(odd){
            padding-left: 147/40rem;
        }
        .row{
            & > div{
                &:not(:first-child){
                    margin-left: 20/20rem;
                }
            }
            margin-bottom: 65/20rem;
        }
        .hexagon{
            position: relative;
            float: left;
            z-index: 2;
            background-color: #fff;
            width: 147/20rem;
            height: 80/20rem;
            box-shadow: 0 2/20rem 14/20rem 0 #2B53AB;
            background-position: center;
            background-repeat: no-repeat;
            &::before,&::after{
                content:'';
                position: absolute;
                height: 0;
                width: 0;
                border-color: transparent;
                z-index: 1;
                border-left: 147/40rem solid transparent;
                border-right: 147/40rem solid transparent;
            }
            &::before{
                
                border-bottom: 45/20rem solid #fff;
                left: 0;
                bottom: 100%;
            }
            &::after{
                 border-top: 45/20rem solid #fff;
                 left: 0;
                 top: 100%;
            }
            &.feature1{
                background-image: url('@img/feature-1.png');
                background-size: 74/20rem 75/20rem;
                &.active{
                    background-size: 81/20rem 80/20rem;
                     background-image: url('@img/feature-1-active.png')
                }
            }
            &.feature2{
                background-image: url('@img/feature-2.png');
                background-size: 74/20rem 74/20rem;
                &.active{
                     background-size: 74/20rem 79/20rem;
                     background-image: url('@img/feature-2-active.png')
                }
            }
            &.feature3{
                background-image: url('@img/feature-3.png');
                background-size: 67/20rem 67/20rem;
                &.active{
                     background-size: 74/20rem 79/20rem;
                     background-image: url('@img/feature-3-active.png')
                }
            }
            &.feature4{
                 background-size: 70/20rem 69/20rem;
                background-image: url('@img/feature-4.png');
                &.active{
                    background-size: auto 80/20rem;
                    background-image: url('@img/feature-4-active.png')
                }
            }
            &.feature5{
                background-image: url('@img/feature-5.png');
                background-size: 69/20rem 75/20rem;
                &.active{
                    background-size: auto 80/20rem;
                    background-image: url('@img/feature-5-active.png');
                }
            }
            &.feature6{
                background-image: url('@img/feature-6.png');
                background-size: 75/20rem 50/20rem;
                &.active{
                    background-size: 82/20rem 62/20rem;
                    background-image: url('@img/feature-6-active.png');
                }
            }
            &.feature7{
                background-image: url('@img/feature-7.png');
                background-size: 69/20rem 69/20rem;
                &.active{
                    background-size:auto 80/20rem;
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
                <div :class="$style.desc">
                    {{list[currentFeatureIndex].desc}}
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
                list:[
                    {
                        title:'实名制',
                        desc:'使用Ethereumn区块链的智能合约，对个人服务者和小微企业实现实名制认证。将个人的信用在区块链全网范围内实现实名制。个人通过当地的身份证或者社会服务号，和护照双层实名认证，企业通过当地企业组织机构证和企业所有者双层认证。并对每一次提供的服务，每次的使用和评价结果都进行详细的记录，一次服务，终生可追溯。'
                    },
                     {
                        title:'实名制2',
                        desc:'使用Ethereumn区块链的智能合约，对个人服务者和小微企业实现实名制认证。将个人的信用在区块链全网范围内实现实名制。个人通过当地的身份证或者社会服务号，和护照双层实名认证，企业通过当地企业组织机构证和企业所有者双层认证。并对每一次提供的服务，每次的使用和评价结果都进行详细的记录，一次服务，终生可追溯。'
                    },
                     {
                        title:'实名制3',
                        desc:'使用Ethereumn区块链的智能合约，对个人服务者和小微企业实现实名制认证。将个人的信用在区块链全网范围内实现实名制。个人通过当地的身份证或者社会服务号，和护照双层实名认证，企业通过当地企业组织机构证和企业所有者双层认证。并对每一次提供的服务，每次的使用和评价结果都进行详细的记录，一次服务，终生可追溯。'
                    },
                     {
                        title:'实名制4',
                        desc:'使用Ethereumn区块链的智能合约，对个人服务者和小微企业实现实名制认证。将个人的信用在区块链全网范围内实现实名制。个人通过当地的身份证或者社会服务号，和护照双层实名认证，企业通过当地企业组织机构证和企业所有者双层认证。并对每一次提供的服务，每次的使用和评价结果都进行详细的记录，一次服务，终生可追溯。'
                    },
                     {
                        title:'实名制5',
                        desc:'使用Ethereumn区块链的智能合约，对个人服务者和小微企业实现实名制认证。将个人的信用在区块链全网范围内实现实名制。个人通过当地的身份证或者社会服务号，和护照双层实名认证，企业通过当地企业组织机构证和企业所有者双层认证。并对每一次提供的服务，每次的使用和评价结果都进行详细的记录，一次服务，终生可追溯。'
                    },
                     {
                        title:'实名制6',
                        desc:'使用Ethereumn区块链的智能合约，对个人服务者和小微企业实现实名制认证。将个人的信用在区块链全网范围内实现实名制。个人通过当地的身份证或者社会服务号，和护照双层实名认证，企业通过当地企业组织机构证和企业所有者双层认证。并对每一次提供的服务，每次的使用和评价结果都进行详细的记录，一次服务，终生可追溯。'
                    },
                    {
                        title:'实名制7',
                        desc:'使用Ethereumn区块链的智能合约，对个人服务者和小微企业实现实名制认证。将个人的信用在区块链全网范围内实现实名制。个人通过当地的身份证或者社会服务号，和护照双层实名认证，企业通过当地企业组织机构证和企业所有者双层认证。并对每一次提供的服务，每次的使用和评价结果都进行详细的记录，一次服务，终生可追溯。'
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

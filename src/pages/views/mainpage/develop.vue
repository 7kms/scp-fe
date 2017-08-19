<style lang="less" module>
    @import '../../../assets/less/const.less';
    @itemLW: 324/20rem;
    .wrap{
        position: relative;
        background-image: linear-gradient(-175deg, #4A4A4A 0%, #1B1D2B 100%);
        height: 1070/20rem;
        color: #fff;
        .main{
            padding-top: 45/20rem;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background-image: url('@img/develop-bg.png');
            background-position: center;
            background-size: auto 100%;
            background-repeat: no-repeat;
        }
    }
    .list{
        position: relative;
        left: 50%;
        margin-left: -@itemLW;
        &::before{
            content: '';
            position: absolute; 
            // width: 38/20rem;
            // height: 45/20rem;
            top: 20/20rem;
            bottom: 70/20rem;
            width: 1px;
            background-color: #fff;
            left: @itemLW;
            margin-left: -1px;
        }
    }
    .item{
        position: relative;
        &.itemL{
            width: @itemLW;
            .circle{
                right: 0;
                margin-right: -19/20rem;
            }
        }
        &.itemR{
            width: 290/20rem;
            margin-left: @itemLW; 
            .circle{
                left: 0;
                margin-left: -19/20rem;
            }
            .text{
                margin-left: 59/20rem;
            }
        }
        .text{
            width: 286/20rem;
            min-height: 96/20rem;
            .date{
                font-size: 20/20rem;
            }
            .desc{
                font-size: 15/20rem;
            }
        }
        .circle{
            position: absolute;
            top: 0;
            width: 38/20rem;
            height: 45/20rem;
            background-image: url('@img/develop-circle.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 105/20rem 107/20rem;
        }
    }
</style>

<template>
  <div :class="$style.wrap">
      <div :class="$style.main">
        <h3 class="item-header white">平台发展路线</h3>
        <div :class="[$style.list]">
            <div :class="[$style.item,{[$style.itemL]:index%2==0,[$style.itemR]:index%2!=0}]" v-for="(item,index) in list" :key="index">
                <div :class="$style.text">
                    <div :class="$style.date">
                        {{item.date}}
                    </div>
                    <div :class="$style.desc">
                     {{item.text}}
                    </div>
                </div>
                <div :class="$style.circle"></div>
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
                    {date:'2016-10', text:'项目构思，方案草稿'},
                    {date:'2017-02', text:'团队组建，确定方案'},
                    {date:'2017-05', text:'细节与技术设计，完成白皮书'},
                    {date:'2017-09', text:'项目募集，启动开发'},
                    {date:'2018-01', text:'完成第一版本开发，内部测试'},
                    {date:'2018-07', text:'商链上线，开始在国内和东南亚一个国家尝试推广某1-2个样本业务（例如个人旅拍或者导游类业务）'},
                    {date:'2019-01', text:'开始着手搭建生态体系，在东南亚全面拓展业务种类'},
                    {date:'2019-07', text:'样板业务拓展全球业务推广'},
                    {date:'2019-12', text:'样板业务初步完成欧洲和美洲的布点，开始尝试全面业务的推广'}
                ]
            }
        }
    }
</script>

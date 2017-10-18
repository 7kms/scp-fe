<style lang="less" module>
    @import '../../../assets/less/const.less';
    @itemLW: 324*@px2rem;
    .wrap{
        position: relative;
        // background-image: linear-gradient(-175deg, #4A4A4A 0%, #1B1D2B 100%);
        background-color: #2D343E;
        height: 1150*@px2rem;
        color: #fff;
        .main{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background-image: url('@img/asc/develop-bg.png');
            background-position: center bottom;
            background-size: 100% auto;
            background-repeat: no-repeat;
        }
    }
    .list{
        position: relative;
        left: 50%;
        margin-top: 89*@px2rem;
        margin-left: -@itemLW;
        &::before{
            content: '';
            position: absolute; 
            top: 20*@px2rem;
            bottom: 150*@px2rem;
            width: 1px;
            background-color: #fff;
            left: @itemLW;
            // margin-left: -1px;
        }
    }
    .item{
        position: relative;
        &.itemL{
            width: @itemLW;
            .circle{
                right: 0;
                margin-right: -20*@px2rem;
            }
        }
        &.itemR{
            width: 290*@px2rem;
            margin-left: @itemLW; 
            .circle{
                left: 0;
                margin-left: -20*@px2rem;
            }
            .text{
                margin-left: 59*@px2rem;
            }
        }
        .text{
            width: 286*@px2rem;
            min-height: 159*@px2rem;
            font-size: 20*@px2rem;
        }
        .circle{
            position: absolute;
            top: 0;
            width: 40*@px2rem;
            height: 45*@px2rem;
            background-image: url('@img/develop-circle.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 105*@px2rem 107*@px2rem;
        }
    }
</style>

<template>
  <div :class="$style.wrap">
      <div :class="$style.main">
        <h3 class="item-header white">ASC construction and operation schedule</h3>
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
                    {date:'2017/10', text:'Project start and ICO'},
                    {date:'2018/7', text:'1st version development and demo test'},
                    {date:'2018/10', text:'Official launch'},
                    {date:'2019/1', text:'Build sample industries applications and operation'},
                    {date:'2019/7', text:'Import eco partners,operation in Asia'},
                    {date:'2019/12', text:'Global operation'}
                ]
            }
        }
    }
</script>

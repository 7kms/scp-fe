<style lang="less" module>
    @import '../../../assets/less/const.less';
    .wrap{
        padding-top: 30*@px2rem;
        position: relative;
    }
    .bgImg{
        background-image: url('@img/asc/industry-position.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 100%;
        height: 539*@px2rem;
        margin-top: 25*@px2rem;
    }
    .qoutewrap{
        width: 1072*@px2rem;
        margin: 0 auto;
        line-height: 25*@px2rem;
    }
    .qoute{
        display: inline-block;
    }
    .circle1{
        right: 0;
        top: 250*@px2rem;
        width: 390*@px2rem;
        height: 390*@px2rem;
        margin-right: -390/2*@px2rem;
        background-image: url('@img/asc/circle-1.png');
    }
</style>

<template>
  <div :class="['content-item',$style.wrap]">
      <h3 class="item-header">Industry Orientation</h3>
      <div :class="[$style.qoutewrap]">
          <div :class="['desc-qoute',$style.qoute]">
                The ASC industry orientation is mainly to provide the industry basic reputation and payment services for personal and small company anonymous service providers, also to support other service platforms. ASC will choose several specified anonymous services to join the industry to build sample applications/platforms. 
          </div>
       </div>
      <div :class="$style.bgImg"></div>
      <div :class="[$style.circle1,'widget']"></div>
  </div>
</template>

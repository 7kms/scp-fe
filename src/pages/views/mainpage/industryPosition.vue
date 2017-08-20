<style lang="less" module>
    .wrap{
        position: relative;

    }
    .bgImg{
        background-image: url('@img/industry-position.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 100%;
        height: 544/20rem;
        margin-top: 25/20rem;
    }
    .qoute{
        display: inline-block;
    }
    .circle1{
        right: 0;
        top: 250/20rem;
        width: 234/20rem;
        height: 466/20rem;
        background-image: url('@img/circle-1.png');
    }

     .circle2{
        left: 0;
        top: 1130/20rem;
        width: 172/20rem;
        height: 344/20rem;
        background-image: url('@img/circle-2.png');
    }
</style>

<template>
  <div :class="['content-item',$style.wrap]">
      <h3 class="item-header">行业定位</h3>
      <div class="text-center">
          <div :class="['desc-qoute',$style.qoute]">
                打造个人及小微服务行业基础信用平台与支付服务，开放信用访问与生态合作建设生态链，建设样板行业应用引领生态建设，服务消费者。
          </div>
       </div>
      <div :class="$style.bgImg"></div>
      <div :class="[$style.circle1,'widget']"></div>
      <div :class="[$style.circle2,'widget']"></div>
  </div>
</template>

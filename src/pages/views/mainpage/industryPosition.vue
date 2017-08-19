<style lang="less" module>
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
</style>

<template>
  <div class="content-item">
      <h3 class="item-header">行业定位</h3>
      <div class="text-center">
          <div :class="['desc-qoute',$style.qoute]">
                打造个人及小微服务行业基础信用平台与支付服务，开放信用访问与生态合作建设生态链，建设样板行业应用引领生态建设，服务消费者。
          </div>
       </div>
      <div :class="$style.bgImg"></div>
  </div>
</template>

<style lang="less" module>
    .content{
        color: #fff;
        height: 467/20rem;
        background-image: linear-gradient(-149deg, #00CEFF 0%, #3C57F9 100%);
    }
    .contactus{
        display: inline-block;
        width: 571/20rem;
        height: 60/20rem;
        margin-top: 206/20rem;
        line-height: 60/20rem;
        border: 2/20rem solid #fff;
        border-radius: 7/20rem;
        font-size: 24/20rem;
    }
    .copyright{
        margin-top: 144/20rem;
        font-size: 15/20rem;
    }
</style>

<template>
  <div :class="[$style.content,'text-center']">
      <div :class="$style.contactus">联系我们</div>
      <div :class="$style.copyright">Copyright © 2017-2022 XXX 版权所有</div>
  </div>
</template>

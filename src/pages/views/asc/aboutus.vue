<style lang="less" module>
    @import '../../../assets/less/const.less';
    .content{
        color: #fff;
        height: 467*@px2rem;
        background-image: linear-gradient(-179deg, #252E3A 0%, #3C434D 100%);
    }
    .contactus{
        display: inline-block;
        width: 571*@px2rem;
        height: 60*@px2rem;
        margin-top: 206*@px2rem;
        line-height: 60*@px2rem;
        border: 2*@px2rem solid #fff;
        border-radius: 7*@px2rem;
        font-size: 24*@px2rem;
        color: #fff;
    }
    .copyright{
        margin-top: 144*@px2rem;
        font-size: 15*@px2rem;
    }
</style>

<template>
  <div :class="[$style.content,'text-center']">
      <a :class="$style.contactus" href="mailto:ico@servicechain.info">contact us</a>
      <div :class="$style.copyright">Copyright © 2017-2022 ASC</div>
  </div>
</template>

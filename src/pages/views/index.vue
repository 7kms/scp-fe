<style lang="less" module>
    .wrap{
        background-image: url('@img/banner.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        height: 965/20rem;
        padding-top: 1.5rem;

    }
    .content{
        width: 70%;
        min-width: 40rem;
        margin: 0 auto;
        padding: 0 .5rem;
        .logo{
            margin-top: 80/20rem;
            margin-left: auto;
            margin-right: auto;
            width: 154/20rem;
            height: 178/20rem;
            background:url('@img/main-logo.png') no-repeat;
            background-size: 154/20rem 178/20rem;
        }
        .desc{
            color: #fff;
            font-size: 18/20rem;
            .dfn1{
                font-weight: bolder;
                margin-top: 23/20rem;
                font-size: 36/20rem;
            }
            .dfn2{
                margin-top: 13/20rem;
                font-size: 30/20rem;
            }
            .dfn3{
                font-weight: bolder;
                margin-top: 63/20rem;
                font-size: 40/20rem;
            }
             .dfn4{
                margin-top: 44/20rem;
                font-size: 18/20rem;
            }
        }
    }
    .header{
        color: #fff;
    }
    .title{
       font-weight: bolder;
       width: 239/20rem;
       height: 56/20rem;
       background-image: url('@img/SCP.png');
       background-repeat: no-repeat;
       background-size: 239/20rem  56/20rem;
    }
    .link{
        display: block;
        border: 2/20rem solid #FFFFFF;
        width: 172/20rem;
        height: 60/20rem;
        line-height: 60/20rem;
        border-radius: 7/20rem;
        font-size: 32/20rem;
    }
</style>

<template>
    <div :class="$style.wrap">
        <div :class="$style.content">
            <header :class="[$style.header,'clearfix']">
                <a :class="[$style.title,'fl']" href="./"></a>
                <span :class="[$style.link,'fr','text-center']">白皮书</span>
            </header>
            <div class="text-center">
                <div :class="$style.logo"></div>
                <article :class="$style.desc">
                    <div :class="$style.dfn1">Service Chain Protocol</div>
                    <div :class="$style.dfn2">面向全球个人服务者和小微企业服务者的信用中介与支付平台</div>
                    <div :class="$style.dfn3">什么是商链？</div>
                    <div :class="[$style.dfn4,'text-left']">使用区块链技术，面向全球和全行业的个人以及小微企业服务者的信用和支付解决方案。可以有效解决个人服务和小微企业服务过程中的信用缺失，信用篡改，信用孤岛，信用欺诈问题。为全球的个人服务者和小微服务者建立实名公正的信用体系，并基于此实现全球范围内服务的信用支付。</div>
                    <div :class="$style.dfn4">特别声明：商链的所有支付行为均在国家法律和法规允许范围内。</div>
                </article>
            </div>
        </div>
        
    </div>
    
</template>

<script>

export default {
    components:{
    },
    data(){
        return{
        }
    },
    created(){
    }
}
</script>
<style lang="less" module>
    @import '../../../assets/less/const.less';
    .wrap{
        background-image: url('@img/asc/banner.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        min-height: 946*@px2rem;
        padding-top: 30*@px2rem;
    }
    .header{
        color: #fff;
    }
    .title{
       font-weight: bolder;
       width: 105*@px2rem;
       height: 55*@px2rem;
       background-image: url('@img/asc/title.png');
       background-repeat: no-repeat;
       background-size: 100%  100%;
    }
    .link{
        display: block;
        border: 2*@px2rem solid #FFFFFF;
        width: 200*@px2rem;
        height: 60*@px2rem;
        line-height: (60-4)*@px2rem;
        border-radius: 7*@px2rem;
        font-size: 32*@px2rem;
        color: #fff;
    }
    .content{
        width: 75%;
        min-width: 45*@px2rem;
        margin: 0 auto;
        padding: 0 .5rem;
        .logo{
            margin-top: 68*@px2rem;
            margin-left: auto;
            margin-right: auto;
            width: 119*@px2rem;
            height: 143*@px2rem;
            background:url('@img/asc/asc-logo.png') no-repeat;
            background-size: 100% 100%;
        }
        .desc{
            color: #fff;
            .dfn1{
                font-weight: bolder;
                margin-top: 23*@px2rem;
                font-size: 36*@px2rem;
            }
            .dfn2{
                font-weight: bold;
                margin-top: 97*@px2rem;
                font-size: 32*@px2rem;
                .label{
                    span{
                        color: #7B35FF;
                    }
                }
                .progress{
                    margin-top: 20*@px2rem;
                    height: 51*@px2rem;
                    border: 1*@px2rem solid #FFFFFF;
                    border-radius: 99*@px2rem;
                    overflow: hidden;
                    .fill{
                        height: 100%;
                        width: 53%;
                        background-image: linear-gradient(-90deg, #34DFF4 0%, #7B35FF 100%);
                    }
                }
            }
            .dfn3{
                font-weight: bolder;
                margin-top: 94*@px2rem;
                font-size: 40*@px2rem;
            }
             .dfn4{
                margin-top: 45*@px2rem;
                font-size: 18*@px2rem;
            }
        }
    }
    
</style>

<template>
    <div :class="$style.wrap">
        <div :class="$style.content">
            <header :class="[$style.header,'clearfix']">
                <a :class="[$style.title,'fl']" href="./"></a>
                <a :class="[$style.link,'fr','text-center']" href="http://www.servicechain.info/pdf/scp_intro.pdf" target="_blank">MainBanner</a>
            </header>
            <div class="text-center">
                <div :class="$style.logo"></div>
                <article :class="$style.desc">
                    <div :class="$style.dfn1">Anonymous Service Chain</div>
                    <div :class="$style.dfn2">
                        <div :class="[$style.label,'clearfix']">
                            <div :class="['fl']">CURRENT BONUS : <span>53%</span></div>
                            <div :class="['fr']">ETH RAISED : 10000</div>
                        </div>
                        <div :class="$style.progress">
                            <div :class="$style.fill"></div>
                        </div>
                    </div>
                    <div :class="$style.dfn3">What is ASC？</div>
                    <div :class="$style.dfn4">Anonymous Service Chain (ASC) is based on the blockchain technology, serving the global personal and small service providers of all industries, to provide the solution of anonymous reputation and payment . To build a standard of reputation for global anonymous services, along with the trusted payment for them .</div>
                </article>
            </div>
        </div>
    </div>
</template>

<!-- 页面切换效果 -->
<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <transition :name="transitionName" model="out-in">
            <router-view class="animated"></router-view>
        </transition>
    </div>
</template>
<script>

export default {
    name: 'app',
    data () {
        return {
            transitionName: 'slide-left',
            watchTo: [],                // 把路由存进数组
        }
    },
    // 接着在父组件内
    // watch $route 决定使用哪种过渡
    watch: {
        '$route' (to, from) {
            if (this.watchTo.indexOf(to.path) == -1) {
                this.watchTo.push(from.path);
                this.transitionName = 'slide-left';
                console.info("---lide-left");
            }else {
                this.transitionName = 'slide-right';
                console.info("---lide-right");
                var arr = this.watchTo.indexOf(to.path);
                this.watchTo.splice(arr,1);
            }
            this.$nextTick(function(){
                this.transitionName = '';
            })
            console.log(this.watchTo);
        }
    }
}
</script><style lang="scss">
    #app{
        position: relative;
        left: 0;
        top: 0;
        min-height: 100%;
        /*overflow:hidden;*/
    }
    %animated {
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
        -webkit-animation-duration: .8s;
        animation-duration: .8s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    .animated {
        @extend %animated;
    }
    // 左
    .slide-left-enter-active, .slide-left-leave-active {
        @extend %animated;
        -webkit-animation-name: slideInRight;
        animation-name: slideInRight;
    }
    .slide-left-enter, .slide-left-leave-active {
        @extend %animated;
        -webkit-animation-name: slideOutLeft;
        animation-name: slideOutLeft;
    }
    // 右
    .slide-right-enter-active, .slide-right-leave-active {
        @extend %animated;
        -webkit-animation-name: slideInLeft;
        animation-name: slideInLeft;
    }
    .slide-right-enter, .slide-right-leave-active {
        @extend %animated;
        -webkit-animation-name: slideOutRight;
        animation-name: slideOutRight;
    }

    @keyframes slideOutLeft {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }

      to {
        visibility: hidden;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        opacity: 0;
      }
    }

    @keyframes slideInRight {
      from {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        visibility: visible;
        opacity: 0;
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }
    @keyframes slideOutRight {
      from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }

      to {
        visibility: hidden;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        opacity: 0;
      }
    }
    @keyframes slideInLeft {
      from {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
        opacity: 0;
      }

      to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

</style>

<template>
    <transition name="fade">
        <div class="backtop" @click="backtop" v-if="isTop">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                isTop: false,
                timer: null
            };
        },
        methods: {
            // 显示回到顶部按钮
            showbtn() {
                if (this.timer) clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                    let clientHeight = window.screen.height;
                    console.log(scrollTop);
                    if (scrollTop >= clientHeight) {
                        this.isTop = true;
                    } else {
                        this.isTop = false;
                    }
                }, 50);
            },
            /**
             * 回到顶部功能实现过程：
             * 1. 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
             * 2. 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
             * 3. 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
             * 4. 最后记得在移动到顶部时，清除定时器
             */
            backtop() {
                let timer = setInterval(() => {
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    let ispeed = Math.floor(-osTop / 5);
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                    if (osTop === 0) {
                        clearInterval(timer);
                    }
                }, 30);
            }
        },
        mounted() {
            window.addEventListener('scroll', this.showbtn, true);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.showbtn, true);
        }
    };
</script>

<style lang="scss" scoped>
    .backtop {
        position: fixed;
        right: 30px;
        bottom: 120px;
        width: 100px;
        height: 100px;
        background: rgba(3, 3, 3, .5);
        color: #fff;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

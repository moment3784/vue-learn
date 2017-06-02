<template>
    <div @click.stop="func" :type="nativeType"
        :class = "[
            'my_btn',
            type ? 'my_btn-' + type : '',
            size ? 'my_btn-' + size : '',
        ]"
    >
        <i :class="'my_btn-'+icon" v-if="icon"></i>
         <span v-if="$slots.default"><slot></slot></span>
    </div>
</template>
<style lang="scss" scoped>
@import '../../static/scss/modules/utils.scss';
    $font: 112.5;
    div:active{
        transform: scale(0.98);
    }
    .my_btn{
        color: #fff;
        @extend %all_center;
        border-radius: 20rem/$font;
        padding: 0 86rem/$font;
        height: 132rem/$font;
        max-height: 162rem/$font;
        background-color: #71c7d5;
        @include font(54px);
    }
    .my_btn-simple{
        @include font(46px);
        @extend %all_center;
        color: #71c7d5;
        letter-spacing: 1px;
        border: 1px solid #71c7d5;
        padding: 0 36rem/$font;
        height: 100rem/$font!important;
        border-radius: 20rem/$font;
        background-color: #fff;
    }
    
</style>
<script>
// import '{scss}/modules/utils.scss';
export default {
    props: ['btnText','type','size','icon'],
    data () {
        return {
            nativeType: 'default'
        }
    },
    methods: {
        func () {
            this.$emit('click');
        }
    }
}
</script>
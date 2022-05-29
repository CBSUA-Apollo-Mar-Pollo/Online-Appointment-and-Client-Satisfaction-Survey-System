<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal1">
             <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['theme'],
        methods: {
            closeModal() {
                this.$emit('close')
            }
        }
    }
</script>

<style>
    .modal1{
        width: 500px;
        padding: 20px;
        margin: 250px auto;
        background: white;
        border-radius: 10px;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    }
    .backdrop{
        top: 0;
        left:0;
        bottom: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
</style>
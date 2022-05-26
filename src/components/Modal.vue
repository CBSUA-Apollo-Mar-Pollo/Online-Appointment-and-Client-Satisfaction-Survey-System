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
        width: 600px;
        padding: 20px;
        margin: 350px auto;
        background: white;
        border-radius: 10px;
        cursor: context-menu;
         position: fixed;
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
    .modal1 .actions {
        text-align: center;
        margin: 30px 0 10px 0;
    }
    .modal1 .actions a {
        color: #333;
        padding: 8px ;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px ;
    }
    .modal1.sale {
        background: rgb(236, 101, 128) ; 
        color: white;
    }
    .modal1.sale h1 {
        color: white;
    }
    .modal1.sale .actions {
        color: white;
    }
    .modal1.sale .actions a {
        color: white ;
    }
</style>
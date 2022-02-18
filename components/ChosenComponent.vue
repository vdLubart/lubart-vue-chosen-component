<template>
    <select :multiple="multiple">
        <slot></slot>
    </select>
</template>

<script>
    export default {
        name: "ChosenComponent",

        props:{
            value: [String, Array],
            multiple: Boolean,
            chosen: {type: Boolean, default: true}
        },

        methods:{
            applyChosen(){
                $(this.$el)
                    .val(this.value)
                    .chosen({})
                    .on("change", e => this.$emit('onChange', $(this.$el).val()));
            }
        },

        mounted(){
            if(this.chosen){
                this.applyChosen();
            }
        },

        watch:{
            value(val){
                $(this.$el).val(val).trigger('chosen:updated');
            },

            chosen(val){
                if(val){
                    this.applyChosen();
                }
                else{
                    $(this.$el).chosen('destroy');
                }

            }
        },

        destroyed() {
            $(this.$el).chosen('destroy');
        }
    }
</script>

<style>

    /* Chosen override */

    .chosen-container-single .chosen-single{
        border-radius: initial;
        height: 29px;
        background: #fff;
    }

    .chosen-container .chosen-results li.highlighted {
        background-color: #77bac0;
        background-image: none;
        color: #fff;
    }

    .chosen-container-active .chosen-single {
        border: 1px solid #77bac0;
    }

    .chosen-container-active .chosen-choices{
        border: 1px solid #77bac0;
    }

    /* END Chosen override */

</style>
<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="errorMessage">{{errorMessage}}</p>
    </div>
</template>
<script>
import Schema from 'async-validator'
export default {
    data(){
        return{
            errorMessage:""
        }
    },
    props:{
        label:{
            type:String,
            default:""
        },
        prop:{
            type:String
        }
    }


}
</script>
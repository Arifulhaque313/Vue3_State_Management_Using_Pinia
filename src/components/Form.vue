<script setup>
import {ref} from 'vue'
import { useTaskStore } from '../stores/TaskStore';
const addTask = ref(); 
const taskStore = useTaskStore()

const submit = () =>{
    if (addTask.value.length > 0){
            taskStore.addTask({
            id:Math.floor(Math.random() * 1000),
            title: addTask.value,
            isFav:false
        });
    }

    addTask.value = " ";
}

</script>


<template>
    <div class="">
        <form action="">
            <div>
                <input type="text" v-model="addTask" class="border h-9 w-[300px] rounded-md text-gray-500 font-extralight px-3 py-2">
                <button type="button" @click="submit" class="text-thin text-green-600 border border-green-600 px-3 py-1 rounded-md ml-3 hover:text-white hover:bg-green-600">Add task</button>
            </div>
        </form>
    </div>
</template>



<style lang="scss" scoped>

</style>
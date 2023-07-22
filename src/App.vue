<script setup>
import { storeToRefs } from 'pinia';
import { useTaskStore } from './stores/TaskStore';
import TaskDetails from '@/components/TaskDetail.vue';
import Form from '@/components/Form.vue';
import {ref} from 'vue'

const taskStore = useTaskStore()
const {tasks,fav,loading,totalCount,favCount} = storeToRefs(taskStore)

taskStore.getTasks()

const filter = ref('all');
</script>


<template>
  <div class="max-w-7xl mx-auto mt-4 border rounded-lg px-12 py-8">
      <div v-if="loading ==true" class="max-w-7xl flex justify-center items-center bg-yellow-500 rounded-md">
        <div class="text-white" >
          <h1>Loading.....</h1>
        </div>
      </div>
      <header class=" bg-gray-100 p-2 rounded-lg">
        <div class="flex justify-center items-center gap-3">
          <div class="w-16">
            <img class="w-full h-full" src="https://seeklogo.com/images/P/pinia-logo-51BF712FB0-seeklogo.com.png" alt="image">
          </div>
          <div>
            <h1 class="text-xl font-light  text-green-600 mt-14">State Mangement Using Pinia</h1>
          </div>
        </div>
        

        <div class="flex justify-center my-8">
          <Form class="!block"/>
        </div>
      </header>

      <!-- task section  -->
      <section class="mt-14">
        <div class="flex justify-center items-center gap-4">
          <button @click="filter = 'all'" class="px-6 py-1 text-base font-thin border hover:border-green-600 rounded-md">All</button>
          <button @click="filter = 'fav'" class="px-6 py-1 text-base font-thin border hover:border-green-600 rounded-md">Fav</button>

        </div>
        <!-- all task  -->
        <div v-if="filter =='all'" class="mt-4">
          <p class="text-center text-base font-thin text-green-600">Total {{ totalCount }} tasks left</p>
          <div v-for="(item,index) in tasks" :key="index" class="flex justify-center my-2">
            <TaskDetails :task="item"/>
          </div>
        </div>

        <!-- fav task  -->
        <div v-if="filter =='fav'" class="mt-4">
          <p class="text-center text-base font-thin text-green-600">Total {{ favCount }} Favourite Tasks</p>
          <div v-for="(item,index) in fav" :key="index" class="flex justify-center my-2">
            <TaskDetails :task="item"/>
          </div>
        </div>

      </section>
    </div>
</template>
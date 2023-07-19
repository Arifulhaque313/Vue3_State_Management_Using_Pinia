<script setup>
import { useTaskStore } from './stores/TaskStore';
import TaskDetails from '@/components/TaskDetail.vue';
import {ref} from 'vue'

const taskStore = useTaskStore()
const filter = ref('all');

</script>


<template>
  <div class="max-w-7xl mx-auto mt-4 border rounded-lg px-12 py-8">
      <header class="flex justify-center items-center gap-3 bg-gray-100 p-2 rounded-lg">
        <div class="w-16">
          <img class="w-full h-full" src="https://seeklogo.com/images/P/pinia-logo-51BF712FB0-seeklogo.com.png" alt="image">
        </div>
        <div>
          <h1 class="text-xl font-light  text-green-600 mt-14">State Mangement Using Pinia</h1>
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
          <p class="text-center text-base font-thin text-green-600">Total {{ taskStore.totalCount }} tasks left</p>
          <div v-for="(item,index) in taskStore.tasks" :key="index" class="flex justify-center my-2">
            <TaskDetails :task="item"/>
          </div>
        </div>

        <!-- fav task  -->
        <div v-if="filter =='fav'" class="mt-4">
          <p class="text-center text-base font-thin text-green-600">Total {{ taskStore.favCount }} Favourite Tasks</p>
          <div v-for="(item,index) in taskStore.fav" :key="index" class="flex justify-center my-2">
            <TaskDetails :task="item"/>
          </div>
        </div>

      </section>
    </div>
</template>
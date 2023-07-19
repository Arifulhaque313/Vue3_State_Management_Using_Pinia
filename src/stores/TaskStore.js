import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore',{
    state: () => ({
        tasks:[
            {
                id:1,
                title:"Close the Window",
                isFav:false
            },
            {
                id:2,
                title:"Do the Math",
                isFav:true
            },
            {
                id:3,
                title:"Solve the Problem",
                isFav:false
            },
            {
                id:4,
                title:"Buy Some food For me",
                isFav:false
            }
        ],
        name: "Ariful Islam"
    }),

    getters:{
        fav() {
            return this.tasks.filter(t =>t.isFav)
        },
        favCount () {
            return this.tasks.reduce((p,c) => {
                return c.isFav ? p+1 : p
            },0)
        },
        totalCount : ((state) => {
            return state.tasks.length
        })
    },

    actions:{
        deleteTask (id) {
            this.tasks = this.tasks.filter(t =>{
                return t.id !== id;
            })
        },
        toggleFav (id){
            const task = this.tasks.find(t =>t.id ===id)
            task.isFav = !task.isFav
        }
    }
})
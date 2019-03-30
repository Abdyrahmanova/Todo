Vue.component('my-form',{
  props:{
    text: String,
  },
  template: 
  `
    <form @submit.prevent>
      <div>
         <h2 v-bind:text="title" class="title">{{title}}</h2>
      </div>
      <input v-model="newTodo" type="text" name="newTodo" id="newTodo" class="form-control newTask" placeholder="Add new your task">
      <button @click="addTodo" type="submit" class="btn btn-primary ">Add</button>
      <ul>     
          <li :style="styling" v-for= "todo in todos" class="list" >
          <input class="checkbox" type="checkbox" v-model="todo.done">  
          <span :class="{done:todo.done}">{{todo.title}}</span>
          <button @click="removeTodo(todo)" type="button" class="btn btn-dark"><i class="fas fa-trash-alt"></i></button>
          </li>
      </ul>
          <button @click="allDone" class="btn btn-success" type="submit">All Done</button>
          <button @click="DeleteAll" class="btn btn-secondary" type="submit">All Delete</button>
    </form> 

 

  `,
data(){
  return {
    title:"My todo list",
    newTodo:'',
    todos: [], 
    border:'1px solid #6c757d',
    borderRadius:'10px',
    marginBottom:'10px'
    
     }
  },
  computed:{    
      styling: function() {
        return {
          border: this.border,
          marginBottom:this.marginBottom,
          borderRadius:this.borderRadius
        }
      }
  },

methods: {
  addTodo(){
    this.todos.push({
      title:this.newTodo,
      done:false
    });
    this.newTodo="";
  },
  removeTodo(todo){
  const todoIndex= this.todos.indexOf(todo);
  this.todos.splice(todoIndex,1)
  },

  allDone(){
    this.todos.forEach(todo => {
      todo.done=true
    })
  },
  DeleteAll(){
    this.todos.splice(0)
  }
 }
})




const app = new Vue({
  el:"#app",
  data: {

  }
});
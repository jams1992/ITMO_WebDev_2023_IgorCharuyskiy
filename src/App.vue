<template>
  <AppHeader>
    Todo App
    <template #sub-header>
      created by Igor
    </template>
  </AppHeader>
  <input
    ref="domInput"
    v-model="inputText"
    @keyup.enter="canAddItemToTodoList && onInputKeyUp()"
  >
  <div>
    List:
    <span v-if="todos.length">
      {{ getTodoCount }}</span>
    <span v-else>empty</span>
    <TodoItem
      v-for="(item, index) in todos"
      :key="item"
      :index="index+1"
      :text="item"
      @delete="onDeleteTodo(index)"
    />
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';
import AppHeader from './components/AppHeader.vue';

const LOCAL_KEY_TODOS='todos';
const LOCAL_KEY_INPUT_TEXT='input_text';
let todoStopWath;


export default {
  components:{TodoItem},
  data: () => ({
    inputText: null,
    todos: []
  }),
  computed:{
   
   canAddItemToTodoList(){
      return this.todoText?.length>0;
   },
   getTodoCount(){return this.todos.length>3?'many':this.todos.length;},
  
   todoText() {return this.inputText?.trim();},
  
  },
  created(){
    const rawTodos=localStorage.getItem(LOCAL_KEY_TODOS);
    console.log('>App->created:rawTodos=',rawTodos);
    if(rawTodos){
      this.todos=JSON.parse(rawTodos);
    }
    this.inputText=JSON.parse(localStorage.getItem(LOCAL_KEY_INPUT_TEXT)|| ''); 

    todoStopWath=this.$watch(()=>this.todos,(value)=>{
      console.log('>App->watch:todos=',value);
      localStorage.setItem(LOCAL_KEY_TODOS,JSON.stringify(value));
    },{deep:true});

    this.$watch(()=>this.inputText,(value)=>{
      console.log('>App->watch:inputText=',value);
      localStorage.setItem(LOCAL_KEY_INPUT_TEXT,JSON.stringify(value));
    });
    },
  unmounted(){
      todoStopWath();
    },
  mounted(){
     console.log('>App->mounted',{dom:this.$refs.domInput});
    },
  methods: {
    onInputKeyUp() {
      console.log('>App->onInputKeyUp:',this.todoText);
      this.todos.push(this.todoText);
      this.inputText='';
    },
    onDeleteTodo(index){
      console.log('>App->onDeleteTodo:index=',index);
      this.todos.splice(index,1);

    },
  
    
  }
}; 
</script>
 
<style scoped></style>

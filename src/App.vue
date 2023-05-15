
 
<template>
  <h3>Todo list</h3>
  <input
    v-model="inputText"
    @keyup.enter="canAddItemToTodoList && onInputKeyUp()"
  >
  <div>{{ inputText }}</div>
  <div>
    List:
    <div
      v-for="(item, index) in todos"
      :key="item"
    >
      {{ index +1 }}.{{ item }}
      <button>X</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    inputText: '',
    todos: []
  }),
  computed:{
   
   canAddItemToTodoList(){
      return this.todoText.length>0;
},
todoText() {return this.inputText.trim();}
  },
  methods: {
    onInputKeyUp() {
      console.log('>App->onInputKeyUp:',this.inputText);
      this.todos.push(this.todoText);
      this.inputText='';
    },
    
  }
}; 
</script>
 
<style scoped></style>

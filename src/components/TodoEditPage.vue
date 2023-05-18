<script setup>
import { onMounted } from 'vue';
import {ref}from 'vue';
import { useRouter, useRoute } from 'vue-router';
import {todos} from '../store/todoStore';

const router = useRouter();
const route = useRoute();

const status=ref(route.query.status);

const todo=ref(todos.value[parseInt(route.params.id)-1]);

const onSelectChange = ({ target }) => {
  console.log('> TodoEditPage -> onSelectChange: ', target.value);
  status.value=target.value;
  router.replace({...route,query:{status:status.value}});
};
onMounted (()=>{
console.log('router.params.id->',route.params.id);
});

</script>
<template>
  <div>
    <div>Todo Edit Page {{ route.params.id }}.{{ todo }}</div>
    <select
      name="status"
      @change="onSelectChange"
    >
      <option
        v-if="!status"
        value="unselected"
        selected
      >
        Unselected
      </option>
      <option
        v-for="item in ['Ready', 'Start', 'Stop']"
        :key="item"
        :value="item"
        :selected="item === status"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
    name:'TodoEditPage',
};
</script>
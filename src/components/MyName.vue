<template>
  <h1>Enter you name</h1>
  <div>
    {{ firstName }}<span style="color: red">{{ lastName }}</span>
  </div>
</template>
<script> 
export default {
  name: 'MyName', 
  // data: () => ({
  //   firstName: "Igor",
  //   lastName: "Charuyskiy",
  // }),
  data () {
    return{
      firstName: 'Igor',
      lastName: 'Charuyskiy',
    }

  },
  }
</script>
<style scoped></style>

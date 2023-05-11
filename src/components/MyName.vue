<template>
  <h1>Enter you name</h1>
  <div>
    {{ firstName }}<span style="color: red">{{ lastName }}</span>
  </div>
  <div>
    <span
      :class="{
        'selected': !!status,
        'unselected': !status
      }"
    >
      Status
    </span>
    <span>{{ status }}</span>
    <div>
      <button
        :disabled="!status"
        @click="onResertClick"
      >
        Reset
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyName',
  props: {
    status: {
      type: String,
      default: 'empty'
    },
  },
  emits: ['reset'],
  // data: () => ({
  //   firstName: "Igor",
  //   lastName: "Charuyskiy",
  // }),
  data() {
    return {
      firstName: 'Igor',
      lastName: 'Charuyskiy',
    };
  },
  methods: {
    onResetClick() {
      console.log('>MyName->onResetClick');
      this.$emit('reset');
    }
  }
};
</script>
<style scoped>
.selected {
  color: green
}

.unselected {
  color: red
}
</style>

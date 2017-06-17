<template>
  <li>{{ todo.text }}</li>
</template>
<script type="text/javascript">
export default {
  name: 'todoItem',
  props: ['todo']
}
</script>

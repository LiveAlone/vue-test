<template>
    <div class="test">
      <ul>
        <li>{{ msg1 }}</li>
        <li>{{ msg2 }}</li>
        <li>{{ msg3 }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'teacher',
  data () {
    return {
      msg1: 'yao',
      msg2: 'qi',
      msg3: 'jun'
    }
  }
}
</script>

<style scoped>
ul, li {
  margin: 20px;
  padding: 0;
}
</style>

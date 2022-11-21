<script>
import CssLeakExampleMenu from './CssLeakExampleMenu.vue'
export default {
  components: { CssLeakExampleMenu },
}
</script>

<template>
  <!-- :class="classes.root" -->
  <div class="root">
    <div class="left">
      <CssLeakExampleMenu />
    </div>
    <div class="right">
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, ab itaque
        veritatis debitis eum eligendi adipisci corporis et voluptates, dicta
        rem, recusandae minus consectetur natus? Quae laborum consequuntur ex
        necessitatibus.
      </div>
    </div>
  </div>
</template>

<!-- module="classes" -->
<style scoped>
.root {
  display: flex;
}
</style>

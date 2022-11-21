<script setup>
import AccardionBlock from './AccardionBlock.vue'
import AccardionBlockItem from './AccardionBlockItem.vue'
</script>
<template>
  <div>
    <AccardionBlock>
      <AccardionBlockItem header="Question 1" :id-key="1">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          quisquam praesentium, ea soluta molestiae maiores, dolorem, magnam
          explicabo alias quia dolor expedita! Mollitia cumque vitae delectus
          facilis porro expedita dignissimos!
        </div>
      </AccardionBlockItem>
      <AccardionBlockItem header="Question 2" :id-key="2">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          quisquam praesentium, ea soluta molestiae maiores, dolorem, magnam
          explicabo alias quia dolor expedita! Mollitia cumque vitae delectus
          facilis porro expedita dignissimos!
        </div>
      </AccardionBlockItem>
      <AccardionBlockItem header="Question 3" :id-key="3">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          quisquam praesentium, ea soluta molestiae maiores, dolorem, magnam
          explicabo alias quia dolor expedita! Mollitia cumque vitae delectus
          facilis porro expedita dignissimos!
        </div>
      </AccardionBlockItem>
    </AccardionBlock>
  </div>
</template>

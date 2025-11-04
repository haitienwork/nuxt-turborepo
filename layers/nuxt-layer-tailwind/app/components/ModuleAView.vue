<script setup lang="ts">
const onClick = () => {
	toast.success("Hello");
};
</script>

<template>
  <Button @click="onClick">
    Test
  </Button>
</template>

<script setup lang="ts">
const string = useString()

const test = string.capitalize('test')
const windowInfos = useWindowInfos()
</script>

<template>
	<Button>
		{{ test }}
	</Button>
</template>

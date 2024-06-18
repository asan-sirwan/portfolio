<script setup>
	let { title, itemsList } = defineProps(["title", "itemsList"]);
</script>

<template>
	<div class="mb-4">
		<h5 class="text-light-gray font-medium">
			<font-awesome-icon
				icon="circle-chevron-right"
				size="sm"
				class="mr-2"
			/>{{ title }}
		</h5>
		<div class="flex flex-wrap gap-2">
			<div
				v-for="(item, index) in itemsList"
				:key="item.name"
				v-motion
				:initial="{ opacity: 0, y: -20 }"
				:visible-once="{ opacity: 1, y: 0 }"
				:duration="1000"
				:delay="100 * index"
				class="w-24 p-4"
			>
				<img :src="item.image" class="w-24 aspect-square object-contain" />
				<p class="mt-1 text-sm text-center text-light-gray">{{ item.name }}</p>
			</div>
		</div>
	</div>
</template>

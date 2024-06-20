<template>
	<header
		class="relative w-full h-full flex flex-col items-center justify-center px-12"
		v-motion
		:initial="{ opacity: 0, y: -20 }"
		:enter="{ opacity: 1, y: 0 }"
		:duration="1000"
	>
		<div class="sm:w-64 w-48 rounded-full aspect-square overflow-hidden border-4 mb-4">
			<img src="/images/me.jpg" />
		</div>
		<div class="mb-4">
			<h1
				class="sm:text-6xl text-4xl text-white font-bold mx-2 cursor-default tracking-wide select-none"
			>
				Hello!
			</h1>
			<div
				class="h-2 w-full bg-gradient-to-r from-teal-700 to bg-emerald-500 rounded-full"
				v-motion
				:initial="{ scaleX: 0 }"
				:visible-once="{
					scaleX: 1,
					transition: { duration: 500, type: 'keyframes', ease: 'easeOut' },
				}"
				:delay="500"
			></div>
		</div>
		<p class="text-light-gray text-lg text-center">
			My name is Asan, i'm a Full-stack web developer.
		</p>
		<div
			class="absolute left-0 bottom-8 w-full flex justify-center jumping-animation"
		>
			<font-awesome-icon icon="angles-down" class="text-light-gray" size="2x" />
		</div>
	</header>
</template>

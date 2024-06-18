<script setup>
	import { ref } from "vue";
	import GreetingsHeader from "@/components/GreetingsHeader.vue";
	import SkillsRow from "@/components/SkillsRow.vue";

	let frontEndList = [
		{
			name: "React",
			image: "/images/react_logo.png",
		},
		{
			name: "Vue",
			image: "/images/vue_logo.png",
		},
		{
			name: "Blazor",
			image: "/images/blazor_logo.png",
		},
		{
			name: "Flutter",
			image: "/images/flutter_logo.png",
		},
	];

	let uiList = [
		{
			name: "CSS",
			image: "/images/css_logo.png",
		},
		{
			name: "Tailwind",
			image: "/images/tailwind_logo.png",
		},
		{
			name: "Bootstrap",
			image: "/images/bootstrap_logo.png",
		},
	];

	let backEndList = [
		{
			name: "ASP.NET Core",
			image: "/images/dotnet_logo.png",
		},
		{
			name: "Node.js",
			image: "/images/node_logo.png",
		},
		{
			name: "Firebase",
			image: "/images/firebase_logo.png",
		},
	];

	let databaseList = [
		{
			name: "SQL Server",
			image: "/images/sql_logo.png",
		},
		{
			name: "MongoDB",
			image: "/images/mongo_logo.png",
		},
	];

	function getAge() {
		const startDate = new Date("2000-07-22");
		const currentDate = new Date();

		// Calculate the difference in milliseconds
		const diffInMilliseconds = currentDate - startDate;

		// Convert milliseconds to years
		const millisecondsInAYear = 1000 * 60 * 60 * 24 * 365.25; // Using 365.25 to account for leap years
		const yearsDifference = diffInMilliseconds / millisecondsInAYear;

		return Math.floor(yearsDifference);
	}

	let age = ref(getAge());

	function openPDF() {
		window.open("./CV.pdf");
	}
</script>

<template>
	<GreetingsHeader />
	<div class="flex flex-col lg:mx-20 mx-4 mt-40 mb-8 items-center">
		<main class="max-w-7xl">
			<article
				class="flex lg:flex-row flex-col"
				v-motion
				:initial="{ opacity: 0, y: -20 }"
				:visible-once="{ opacity: 1, y: 0 }"
				:duration="500"
				:delay="250"
			>
				<div class="flex-1">
					<h2 class="text-white font-bold text-3xl">Hey there!</h2>
					<p class="text-light-gray mt-2">
						I'm Asan Sirwan Omer, a dedicated full stack developer specializing
						in web development. With a solid foundation in both front-end and
						back-end technologies, I'm passionate about creating efficient,
						scalable, and visually appealing web applications.
					</p>
					<div
						v-motion
						:initial="{ opacity: 0, y: -20 }"
						:visible-once="{ opacity: 1, y: 0 }"
						:duration="500"
						:delay="250"
					>
						<h3 class="text-white font-bold text-xl mt-8">About me</h3>
						<p class="text-light-gray mt-2">
							I'm currently {{ age }} years old. Graduated with a BSc degree in
							Computer Science from the University of Sulaymaniah (2019-2023),
							where I developed a deep understanding of software development
							principles and honed my skills in various programming languages
							and frameworks. My academic background has provided me with a
							strong foundation to excel in the ever-evolving field of web
							development.
						</p>
					</div>
					<div
						v-motion
						:initial="{ opacity: 0, y: -20 }"
						:visible-once="{ opacity: 1, y: 0 }"
						:duration="500"
						:delay="250"
					>
						<h3 class="text-white font-bold text-xl mt-8">
							Professional experience
						</h3>
						<p class="text-light-gray mt-2">
							I possess a strong understanding of a wide range of computer
							science concepts, including writing clean and maintainable code
							and developing comprehensive, robust projects. I have successfully
							completed numerous projects for various clients, including
							large-scale management systems such as HR systems with biometric
							attendance tracking, ERP systems, and factory management systems.
							Additionally, I have developed operational software for ATM
							machines currently in use by employees.
						</p>
						<button
							class="h-12 py-2 px-4 bg-gradient-to-r from-purple-800 to-purple-600 rounded-full text-white font-medium mt-8 hover:bg-none bg-white hover:text-black"
							@click="openPDF"
						>
							<font-awesome-icon icon="file" class="mr-2" />Resume
						</button>
					</div>
				</div>
				<div
					class="lg:w-1 w-full lg:min-h-full min-h-1 lg:bg-gradient-to-b bg-gradient-to-r from-rose-600 to-orange-500 rounded-full lg:mx-8 m-0 lg:m-0 my-8"
				></div>
				<div class="flex-1">
					<h2 class="text-white font-bold text-3xl mb-4">What do i know?</h2>
					<SkillsRow title="Front-end" :itemsList="frontEndList" />
					<SkillsRow title="UI" :itemsList="uiList" />
					<SkillsRow title="Back-end" :itemsList="backEndList" />
					<SkillsRow title="Database" :itemsList="databaseList" />
				</div>
			</article>
			<article class="my-32">
				<h2
					class="text-white text-center font-bold text-3xl"
					v-motion
					:initial="{ opacity: 0, y: -20 }"
					:visible-once="{ opacity: 1, y: 0 }"
					:duration="500"
					:delay="250"
				>
					Work Experience
				</h2>
				<div
					v-motion
					:initial="{ opacity: 0, y: -20 }"
					:visible-once="{ opacity: 1, y: 0 }"
					:duration="500"
					:delay="250"
				>
					<h5 class="text-white font-bold text-xl mt-8">
						Full-stack developer at Stack Solvers company
					</h5>
					<p class="text-light-gray mt-2">
						I worked as a full-stack developer at Stack Solvers for seven
						months, where I developed projects from the ground up, including
						database management, back-end development, API endpoint creation,
						and front-end design.
					</p>
				</div>
				<div
					v-motion
					:initial="{ opacity: 0, y: -20 }"
					:visible-once="{ opacity: 1, y: 0 }"
					:duration="500"
					:delay="250"
				>
					<h5 class="text-white font-bold text-xl mt-8">
						Developer at Informatic company
					</h5>
					<p class="text-light-gray mt-2">
						I am currently employed at Informatic, where I am involved in
						various aspects of software development. My responsibilities include
						designing and implementing scalable solutions, optimizing existing
						systems, collaborating with cross-functional teams to deliver
						high-quality products, and staying updated with the latest industry
						trends and technologies. This role has allowed me to enhance my
						skills in both back-end and front-end development
					</p>
				</div>
			</article>
			<div
				class="w-full h-1 bg-gradient-to-r from-blue-700 to-cyan-500 rounded-full"
				v-motion
				:initial="{ scaleX: 0 }"
				:visible-once="{
					scaleX: 1,
					transition: { duration: 500, type: 'keyframes', ease: 'easeOut' },
				}"
				:delay="250"
			></div>
		</main>
		<footer
			class="mt-8"
			v-motion
			:initial="{ opacity: 0, y: -20 }"
			:visible-once="{ opacity: 1, y: 0 }"
			:duration="500"
			:delay="250"
		>
			<h2 class="text-white text-center font-bold lg:text-3xl text-2xl">
				Reach me through..
			</h2>
			<div class="flex flex-wrap gap-3 justify-center mt-8">
				<a
					href="mailto:asanasa.dev@gmail.com"
					class="group w-12 p-2 bg-gradient-to-br from-rose-600 to-red-500 rounded-full hover:from-white hover:to-white"
				>
					<img
						src="../assets/icons/mail_svg.svg"
						class="w-full group-hover:invert-0 invert"
					/>
				</a>
				<a
					href="https://wa.me/qr/TZO7Y6SD4IXMP1"
					class="group w-12 p-3 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full hover:from-white hover:to-white"
				>
					<img
						src="../assets/icons/whatsapp_svg.svg"
						class="w-full group-hover:invert-0 invert"
					/>
				</a>
				<a
					href="https://t.me/AsanSirwan"
					class="group w-12 p-2 bg-gradient-to-br from-blue-600 to-sky-500 rounded-full hover:from-white hover:to-white"
				>
					<img
						src="../assets/icons/telegram_svg.svg"
						class="w-full group-hover:invert-0 invert"
					/>
				</a>
				<a
					href="https://github.com/asan-sirwan"
					class="group w-12 p-2 bg-gradient-to-br from-gray-800 to-neutral-700 rounded-full hover:from-white hover:to-white"
				>
					<img
						src="../assets/icons/github_svg.svg"
						class="w-full group-hover:invert-0 invert"
					/>
				</a>
			</div>
		</footer>
	</div>
</template>

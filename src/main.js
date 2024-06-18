import "./assets/css/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faAnglesDown,
	faCircleChevronRight,
	faFile
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faAnglesDown, faCircleChevronRight, faFile);

const app = createApp(App);

app.use(router);
app.use(MotionPlugin);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");

import "./vendor";
import "./helpers";
import "./components/social";
import { ieFix } from "./vendor/ie-fix";
import { vhFix } from "./vendor/vh-fix";
import { actualYear } from "./modules/actualYear";
import header from "./components/header";
import lazyLoading from "./modules/lazyLoading";
import scrollToAnchor from "./modules/scrollToAnchor";
import locomotiveScroll from "./modules/locomotiveScroll";
import sharing from "./components/sharing";


ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();
locomotiveScroll.init();
sharing.init();



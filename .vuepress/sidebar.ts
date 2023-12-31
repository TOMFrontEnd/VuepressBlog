import {SidebarConfig4Multiple} from "vuepress/config";


import roadmapSideBar from "./sidebars/roadmapSideBar";
import ownSideBar from "./sidebars/ownSideBar";
// @ts-ignore
export default {
    "/学习路线/": roadmapSideBar,
    "/作者随笔/": ownSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;

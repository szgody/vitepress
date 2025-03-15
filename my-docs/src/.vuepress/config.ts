import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "的博客",
  description: "Gody的博客",

  theme: hopeTheme({
    logo: "/logo.png",
    navbar: [
      { text: "首页", link: "/", icon: "home" },
      { 
        text: "正在学习内容", 
        link: "/study/", 
        icon: "code", 
        children: [
          {
            text: "VitePress",
            icon: "lightbulb",
            prefix: "/study/VitePress/",
            children: [{ text: "VitePress", icon: "ellipsis", link: "/study/VitePress/" }]
          },
          {
            text: "theme-hope",
            icon: "lightbulb",
            prefix: "/study/theme-hope/",
            children: [{ text: "theme-hope", icon: "ellipsis", link: "/study/theme-hope/" }]
          }
        ]
      },
      { 
        text: "已有技能", 
        link: "/Existing_skills/", 
        icon: "index",
        children: [
          { text: "Linux Samba", link: "/Existing_skills/linux/samba" },
          { text: "Linux SSH", link: "/Existing_skills/linux/ssh" },
          { text: "Linux Nginx", link: "/Existing_skills/linux/nginx" },
          { text: "iKuai Guide", link: "/Existing_skills/ikuai/ikuai_guide" },
          { text: "iKuai iStore", link: "/Existing_skills/ikuai/ikuai_istore_guide" },
          { text: "iKuai Docker", link: "/Existing_skills/ikuai/ikuai_docker_guide" }
        ] 
      },
      { text: "demo", link: "/demo/", icon: "ldemo" },
      { text: "关于我", link: "/about/", icon: "info" }
    ],
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Search"],
    },
    markdown: {
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true,
    }
  })  
});


import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Giscus from "@giscus/react";
import { useThemeConfig, ThemeConfig } from "@docusaurus/theme-common";

export default function comment() {
  const { giscus } = useThemeConfig();
  return (
    <BrowserOnly fallback={<div>Loading Comments...</div>}>
      {() => <span>{<Giscus
        id="comments"
        repo="b9348/gta4replies"
        repoId="R_kgDOISz7Ag"
        category="Announcements"
        categoryId="DIC_kwDOISz7As4CSKLm"
        mapping="url"
        term="欢迎留言捏。"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
        crossorigin="anonymous"
        {...giscus}
    />}</span>}
      
    </BrowserOnly>
  );
}

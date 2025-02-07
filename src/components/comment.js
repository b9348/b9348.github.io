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
        repo="b9348/b9348.github.io"
        repoId="R_kgDOGlIeKQ"
        category="Announcements"
        categoryId="DIC_kwDOGlIeKc4CmurR"
        mapping="title"
        term="欢迎留言捏。"
        strict="0"
        reactionsEnabled="0"
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

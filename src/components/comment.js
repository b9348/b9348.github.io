import React from 'react';
import Giscus from '@giscus/react';

export default function comment() {
  return (
    <Giscus
      // id="comments"
      // repo="giscus/giscus-component"
      // repoId="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
      // category="Announcements"
      // categoryId="DIC_kwDOF1L2fM4B-hVS"
      // mapping="specific"
      // reactionsEnabled="1"
      // emitMetadata="0"
      // inputPosition="top"
      // theme="light"
      // lang="zh-CN"
      // loading="lazy"
        repo="b9348/gta4replies"
        repoId="R_kgDOISz7Ag"
        category="Announcements"
        categoryId="DIC_kwDOISz7As4CSKLm"
        mapping="title"
        term="欢迎留言捏"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
        crossorigin="anonymous"
    />
  );
}
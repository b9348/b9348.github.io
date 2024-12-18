import React from "react";
import styles from "./dlbtn.module.css";

export default function Dlbtn() {
    return (
        <div className={styles.wrap}>
            <p>⚡下载最终版汉化补丁</p>

            <a href="https://cloudflare-imgbed-4n1.pages.dev/file/1727105849241_GTA4汉化补丁2023-07-04.zip" className={styles.btn}>下载.zip版本（原版）</a>
            <a href="https://cloudflare-imgbed-4n1.pages.dev/file/1727106008861_GTA4汉化补丁2023-07-04.exe" className={styles.btn}>下载.exe版本（原版）</a>

            <p>⚡带FusionFix整合包下载</p>
            <a href="https://pub-37c2ca5afb8e423bacfd7b7e81bfe16d.r2.dev/GTA4%E6%B1%89%E5%8C%96%E8%A1%A5%E4%B8%812024-09-13.zip" className={styles.btn}>下载.zip版本（整合版）</a>
            <a href="https://pub-37c2ca5afb8e423bacfd7b7e81bfe16d.r2.dev/GTA4%E6%B1%89%E5%8C%96%E8%A1%A5%E4%B8%812024-09-13.exe" className={styles.btn}>下载.exe版本（整合版）</a>

        </div>
    );
}

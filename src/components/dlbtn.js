import React from "react";
import styles from "./dlbtn.module.css";

export default function Dlbtn() {
    return (
        <div className={styles.wrap}>
            <p>⚡下载最终版汉化补丁</p>

            <a href="https://cloudflare-imgbed-4n1.pages.dev/file/1727105849241_GTA4汉化补丁2023-07-04.zip" className={styles.btn}>下载.zip版本</a>
            <a href="https://cloudflare-imgbed-4n1.pages.dev/file/1727106008861_GTA4汉化补丁2023-07-04.exe" className={styles.btn}>下载.exe版本</a>

        </div>
    );
}

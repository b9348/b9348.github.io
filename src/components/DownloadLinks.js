import React from 'react';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

// 导入下载链接配置
import { useDownloadLinks } from '../config/downloadLinks';

export default function DownloadLinks() {
  const downloadLinks = useDownloadLinks();

  return (
    <>
      <Tabs groupId="下载地址" queryString>
        <TabItem value="原版" label="原版">
          <Link to={downloadLinks.downloadZipUrl}>
            <button className="button button--secondary">下载.zip版</button>
          </Link>
          &nbsp;
          <Link to={downloadLinks.downloadExeUrl}>
            <button className="button button--secondary">下载.exe版</button>
          </Link>
        </TabItem>
        <TabItem value="整合包" label="整合包">
          <Link to={downloadLinks.downloadIntegratedExeUrl}>
            <button className="button button--secondary">下载.exe版</button>
          </Link>
          &nbsp;
          <Link to={downloadLinks.downloadIntegratedZipUrl}>
            <button className="button button--secondary">下载.zip版</button>
          </Link>
        </TabItem>
        <TabItem value="安装教程" label="安装教程">
          <Link href="./安装汉化/0：安装说明">
            <button className="button button--secondary">📒安装教程</button>
          </Link>
        </TabItem>
        <TabItem value="繁体中文" label="繁体中文">
          <Link href="https://github.com/Megumi-B/GTA4_FullTran_CHT">
            <button className="button button--secondary">繁体项目网站</button>
          </Link>
          &nbsp; 台湾网友Megumi-B二创的机翻繁中，味儿或许纯一点
        </TabItem>
      </Tabs>

      <h4>⚡ 赠品镜像&备用下载 👇</h4>

      <Tabs groupId="备用" queryString>
        <TabItem value="野鸡云" label="野鸡云">
          <Link to={downloadLinks.backupAcboxUrl}>
            <button className="button button--secondary">野鸡云</button>
          </Link>
          直接下日期最新的，用迅雷FDM比百度云快
        </TabItem>
        <TabItem value="度盘" label="度盘">
          <Link to={downloadLinks.backupBaiduUrl}>
            <button className="button button--secondary">度盘提取码1234</button>
          </Link>
        </TabItem>
        <TabItem value="蓝奏云" label="蓝奏云">
          <Link href={downloadLinks.backupLanzouUrl}>
            <button className="button button--secondary">蓝奏云</button>
          </Link>
          因单文件限制100m需开会员导致无整合汉化，历史遗留，仅做展示，推荐不看
        </TabItem>
        <TabItem value="永硕" label="永硕">
          <Link href={downloadLinks.backupYongshuoUrl}>
            <button className="button button--secondary">永硕E盘</button>
          </Link>
          项目主编私藏
        </TabItem>
      </Tabs>
    </>
  );
}

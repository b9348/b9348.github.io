// 下载链接配置文件
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function useDownloadLinks() {
  const {siteConfig} = useDocusaurusContext();
  return siteConfig.customFields.downloadLinks;
}

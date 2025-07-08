// import { useLocation } from "react-router-dom";
import Giscus from "@giscus/react";

interface Props {
  title: string;
}

const GiscusComments: React.FC<Props> = ({ title }) => {
  // const location = useLocation();
  return (
    <Giscus
      repo={import.meta.env.VITE_REACT_APP_GISCUS_REPO}
      repoId={import.meta.env.VITE_REACT_APP_GISCUS_REPO_ID}
      category={import.meta.env.VITE_REACT_APP_GISCUS_CATEGORY}
      categoryId={import.meta.env.VITE_REACT_APP_GISCUS_CATEGORY_ID}
      mapping="pathname"
      key={title} // 确保路径变化时重新渲染
      reactions-enabled="1"
      emit-metadata="1"
      input-position="top"
      theme="light_tritanopia"
      lang="zh-CN"
      loading="lazy"
    />
  );
};

export default GiscusComments;

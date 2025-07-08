import Giscus from "@giscus/react";

const GiscusComments = () => {
  return (
    <Giscus
      repo={import.meta.env.VITE_REACT_APP_GISCUS_REPO}
      repoId={import.meta.env.VITE_REACT_APP_GISCUS_REPO_ID}
      category={import.meta.env.VITE_REACT_APP_GISCUS_CATEGORY}
      categoryId={import.meta.env.VITE_REACT_APP_GISCUS_CATEGORY_ID}
      mapping="title"
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

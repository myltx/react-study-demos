// import { useLocation } from "react-router-dom";
import Giscus from "@giscus/react";

interface Props {
  title: string;
}

const GiscusComments: React.FC<Props> = ({ title }) => {
  // const location = useLocation();
  return (
    <Giscus
      repo="myltx/react-study-demos"
      repoId="R_kgDOPHM4DA"
      category="Announcements"
      categoryId="DIC_kwDOPHM4DM4Csowb"
      mapping="specific"
      term={title}
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

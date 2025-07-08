/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    VITE_REACT_APP_GISCUS_REPO: `${string}/${string}`;
    VITE_REACT_APP_GISCUS_REPO_ID: string;
    VITE_REACT_APP_GISCUS_CATEGORY: string;
    VITE_REACT_APP_GISCUS_CATEGORY_ID: string;
  }
}

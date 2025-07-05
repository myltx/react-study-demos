import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import UseStateDemo from "../pages/UseStateDemo";
import UseReducerDemo from "../pages/UseReducerDemo";
import UseEffectDemo from "../pages/useEffectDemo";
import UseEffectDemoChange from "../pages/useEffectDemoChange";
// import ButtonDemo from "../pages/ButtonDemo";
// import CardDemo from "../pages/CardDemo";

export interface MenuItem {
  name: string;
  path?: string;
  index?: boolean;
  // element?: React.ReactNode;
  children?: MenuItem[];
}

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, name: "首页", element: <Home /> },
      {
        name: "Hooks",
        children: [
          { path: "useState", name: "useState", element: <UseStateDemo /> },
          {
            path: "useReducer",
            name: "useReducer",
            element: <UseReducerDemo />,
          },
          {
            path: "useEffectDemo",
            name: "useEffectDemo",
            element: <UseEffectDemo />,
          },
          {
            path: "UseEffectDemoChange",
            name: "UseEffectDemoChange",
            element: <UseEffectDemoChange />,
          },
        ],
      },
      // {
      //   name: "Components",
      //   children: [
      //     { path: "button", name: "ButtonDemo", element: <ButtonDemo /> },
      //     { path: "card", name: "CardDemo", element: <CardDemo /> },
      //   ],
      // },
    ],
  },
];

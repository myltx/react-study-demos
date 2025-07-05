import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/index";

function App() {
  return (
    <BrowserRouter basename={__BASE__}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

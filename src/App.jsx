import { Routes, Route } from "react-router-dom";

import ClientApp from "./ClientApp";
import AdminApp from "./AdminApp";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<ClientApp />} />
      <Route path="/admin/*" element={<AdminApp />} />
    </Routes>
  );
}

export default App;

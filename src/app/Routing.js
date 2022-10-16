import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default Routing;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Dashbord from "./components/Dashbord";
import ProjectList from "./components/ProjectList";
import CreateProject from "./components/CreateProject";
import RequireAuth from "./components/hoc/RequireAuth";
import Pagenotfound from "./components/Pagenotfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashbord"
        element={
          <RequireAuth>
            <Dashbord />
          </RequireAuth>
        }
      />
      <Route
        path="/projectlist"
        element={
          <RequireAuth>
            <ProjectList />
          </RequireAuth>
        }
      />
      <Route
        path="/createproject"
        element={
          <RequireAuth>
            <CreateProject />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
}

export default App;

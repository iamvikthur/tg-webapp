import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RefPage from "./pages/RefPage";
import TaskPage from "./pages/TaskPage";
import BoostPage from "./pages/BoostPage";
import StatsPage from "./pages/StatsPage";
import TapPage from "./pages/TapPage";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { activeNavAtom } from "./lib/atom";

function App() {
  const location = useLocation();
  const path = location.pathname === "/" ? "/tap" : location.pathname;
  const [activeNav, setActiveNav] = useAtom(activeNavAtom);

  useEffect(() => {
    setActiveNav(location.pathname.replace("/", ""));
  });

  return (
    <div className="bg-gradient-to-b from-purple-900 to-black min-h-screen flex flex-col items-center font-tapFontFam text-white">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<TapPage />}></Route>
          <Route path="/tap" element={<TapPage />}></Route>
          <Route path="/ref" element={<RefPage />}></Route>
          <Route path="/task" element={<TaskPage />}></Route>
          <Route path="/boost" element={<BoostPage />}></Route>
          <Route path="/stats" element={<StatsPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

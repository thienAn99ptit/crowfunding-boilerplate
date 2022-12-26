import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { privaryRoute } from "./routes/Router";
import AuthenLayout from "./layouts/authenLayout/AuthenLayout";
import LayoutDashboard from "./layouts/layoutDashboard/LayoutDashboard";

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Suspense fallback={<></>}>
          <Routes>
            {privaryRoute.map((route, index) => {
              let Layout;
              if (route.layout === "authen") {
                Layout = AuthenLayout;
              }
              if (route.layout === "dashboard") {
                Layout = LayoutDashboard;
              }
              const Page = route.element;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                ></Route>
              );
            })}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

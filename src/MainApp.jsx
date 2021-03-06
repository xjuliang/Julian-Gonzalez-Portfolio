import React, { useState, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import FallbackSpinner from "./components/FallbackSpinner";
import NavBarWithRouter from "./components/NavBar";
import Home from "./components/Home";

function MainApp() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch(endpoints.routes, {
  //     method: 'GET',
  //   })
  //     .then((res) => res.json())
  //     .then((res) => setData(res))
  //     .catch((err) => err);
  // }, []);

  const sections = [
    {
      component: "About",
      path: "/about",
      headerTitle: "About",
    },
    {
      component: "Skills",
      path: "/skills",
      headerTitle: "Skills",
    },
    {
      component: "Education",
      path: "/education",
      headerTitle: "Education",
    },
    // {
    //   component: "Contact",
    //   path: "/contact",
    //   headerTitle: "Contact",
    // },
    {
      component: "Projects",
      path: "/projects",
      headerTitle: "Projects",
    },
  ];

  return (
    <div className="MainApp">
      <NavBarWithRouter />
      <main className="main">
        <Switch>
          <Suspense fallback={<FallbackSpinner />}>
            <Route exact path="/" component={Home} />
            {sections.map((route) => {
                const SectionComponent = React.lazy(() =>
                  import("./components/" + route.component)
                );
                return (
                  <Route
                    key={route.headerTitle}
                    path={route.path}
                    component={() => (
                      <SectionComponent header={route.headerTitle} />
                    )}
                  />
                );
              })}
          </Suspense>
        </Switch>
      </main>
    </div>
  );
}

export default MainApp;

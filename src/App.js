import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import { ToastContainer as DefaultToastContainer } from "react-toastify";

// Import Contexts
import { theme, ThemeProvider } from "./context/ThemeProvider";

// Import Utility Components
import SuspenseFallback from "./components/SuspenseFallback";
import ErrorBoundary from "./components/ErrorBoundary";
import NoPage from "./components/UnknownPage";

// Other assets
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

// Import Pages
import LandingPage from "./pages/Landing";
// Import Layout Components for Pages
import LandingMain from "./layouts/Index";

// create a default container so we can override the styles
const ToastContainer = (props) => (
  <DefaultToastContainer style={{ zIndex: "1900" }} {...props} />
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <React.Suspense fallback={<SuspenseFallback />}>
          <Router>
            <Switch>
              {/* Landing Page */}
              <Route exact path="/" element={<LandingPage />}>
                <Route index element={<LandingMain />} />
              </Route>
              <Route path="*" element={<NoPage />} />
            </Switch>
          </Router>
          <ToastContainer />
        </React.Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;

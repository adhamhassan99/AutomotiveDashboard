import { Routes, Route, Navigate } from "react-router-dom";
import NavSearch from "./components/NavSearch/NavSearch.component";
import AssetsPage from "./Pages/AssetsPage/AssetsPage.component";
import BookingPage from "./Pages/BookingPage/BookingPage.component";
import DashboardPage from "./Pages/Dashboard/DashboardPage.component";
import SignInPage from "./Pages/SignInPage/SignInPage.component";
// import { useSelector } from "react-redux";

import SignUp from "./Pages/SignUpPage/SignUp.component";

function App() {
  // const loggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/test" element={<h1>hello</h1>} /> */}

        <Route path="/" element={<Navigate replace to="/auth/signin" />} />
        <Route path="/auth/signin" element={<SignInPage />} />
        <Route exact path="/auth/signup" element={<SignUp />} />

        <Route path="/home" element={<NavSearch />}>
          <Route exact path="dashboard" element={<DashboardPage />} />
          <Route exact path="assets" element={<AssetsPage />} />
          <Route exact path="booking" element={<BookingPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

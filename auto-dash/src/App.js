import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./Pages/Dashboard/DashboardPage.component";
import SignInPage from "./Pages/SignInPage/SignInPage.component";
// import { useSelector } from "react-redux";

import SignUp from "./Pages/SignUpPage/SignUp.component";

function App() {
  // const loggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="App">
      <Routes>
        {/* {loggedIn ? <Route path="/home" element={}/>} */}
        <Route path="/" element={<Navigate replace to="/auth/signin" />} />
        <Route path="/auth/signin" element={<SignInPage />} />
        <Route exact path="/auth/signup" element={<SignUp />} />

        <Route exact path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;

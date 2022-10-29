import { Routes, Route, Navigate } from "react-router-dom";
import NavSearch from "./components/NavSearch/NavSearch.component";
import Profile from "./components/Profile/Profile.component";
import AssetsPage from "./Pages/AssetsPage/AssetsPage.component";
import BookingPage from "./Pages/BookingPage/BookingPage.component";
import CalenderPage from "./Pages/CalendarPage/CalendarPage.component";
import DashboardPage from "./Pages/Dashboard/DashboardPage.component";
import MessagesPage from "./Pages/MessagesPage/MessagesPage.component";
import SellPage from "./Pages/SellPage/SellPage.component";
import ServicesPage from "./Pages/ServicesPage/ServicesPage.component";
import SettingsPage from "./Pages/SettingsPage/SettingsPage.component";
import SignInPage from "./Pages/SignInPage/SignInPage.component";
// import { useSelector } from "react-redux";

import SignUp from "./Pages/SignUpPage/SignUp.component";
import "./App.css";

function App() {
  // const loggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth/signin" />} />

        <Route path="/auth/signin" element={<SignInPage />} />
        <Route exact path="/auth/signup" element={<SignUp />} />

        <Route path="/home" element={<NavSearch />}>
          <Route exact path="dashboard" element={<DashboardPage />} />
          <Route exact path="assets" element={<AssetsPage />} />
          <Route exact path="booking" element={<BookingPage />} />
          <Route exact path="sellcars" element={<SellPage />} />
          <Route exact path="buycars" element={<BookingPage />} />
          <Route exact path="services" element={<ServicesPage />} />
          <Route exact path="calendar" element={<CalenderPage />} />
          <Route exact path="Messages" element={<MessagesPage />} />

          <Route exact path="settings" element={<SettingsPage />}>
            <Route exact path="details" element={<Profile />} />
            <Route exact path="profile" element={<Profile />} />
            <Route exact path="password" element={<Profile />} />
            <Route exact path="email" element={<Profile />} />
            <Route exact path="notification" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

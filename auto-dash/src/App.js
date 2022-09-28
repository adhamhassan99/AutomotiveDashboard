import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.component";
import SignInForm from "./components/SignInForm/SignInForm.component";
import SignUpForm from "./components/SignUpForm/SignUpForm.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;

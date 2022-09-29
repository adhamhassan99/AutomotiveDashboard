import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.component";

import SignUp from "./Pages/SignUpPage/SignUp.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth/signin" element={<HomePage />} />
        <Route exact path="/auth/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

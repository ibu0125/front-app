import React from "react";
import CreateUser from "./CreateUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>User Management App</h1>
        <Routes>
          <Route path="/register" element={<CreateUser />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <>
                <h2>ログインまたは新規登録してください</h2>
                <div>
                  <a href="/register">新規登録</a> |{" "}
                  <a href="/login">ログイン</a>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

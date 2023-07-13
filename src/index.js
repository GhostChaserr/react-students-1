import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import Header from "./components/header";
import EditExpense from "./pages/EditExpense";
import ProtectedRoute from "./components/protected-route";
import RoleProtectedRoute from "./components/role-protected-route";
import ForgotPassword from "./components/fogot-password";
import Cart from "./pages/cart";

import CounterContext from "./contex";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute name="">
        <Header />
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/add-expense",
    element: (
      <ProtectedRoute name="">
        <Header />
        <AddExpense />
      </ProtectedRoute>
    ),
  },
  {
    path: "/expenses/:id",
    element: (
      <ProtectedRoute name="">
      <Header />
      <AddExpense />
    </ProtectedRoute>
    ),
  },
  {
    path: "/edit-expense",
    element: (
      <RoleProtectedRoute role="admin">
        <EditExpense />
      </RoleProtectedRoute>
    ),
  },
  {
    path: "/signin",
    element: (
      <div>
        <Header />
        <SignIn />
      </div>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <div>
        <Header />
        <ForgotPassword />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <Header />
        <SignUp />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <div>Not Found!</div>
      </div>
    ),
  },
]);

const Root = () => {
  const [count, setCount] = useState(10);

  const onCountUpdate = () => {
    setCount(count + 1);
  };
  return (
    <React.StrictMode>
      <CounterContext.Provider value={{ count, onCountUpdate }}>
        <RouterProvider router={router} />
      </CounterContext.Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import Register from "./pages/Register";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
};

export default App;

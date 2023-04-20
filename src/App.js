import { useState, useContext } from "react";
import { UserContext } from "./Context/userContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Session } from "./Views/sessionInit";
import { CreateProduct } from "./Views/createProduct";
import { ProductsList } from "./Views/Products";
import { AnimatePresence, motion } from "framer-motion";
import { Navigator } from "./Components/navigator";
import { ProtectedRoute } from "./Controllers/ProtRoute";


function App() {
  const [user, setUser] = useState(useContext(UserContext));
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Navigator />
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <motion.div
                  key="login"
                  initial={{ opacity: 0, width: "0%" }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 0.8 }}
                  exit={{ opacity: 0, width: "50%" }}
                >
                  <Session />
                </motion.div>
              }
            />
            <Route
              exact
              path="/products"
              element={
                <ProtectedRoute
                  isAllowed={user.products.length > 0}
                  redirectTo="/products/create"
                  children={
                    <motion.div
                      key="products"
                      initial={{ opacity: 0, width: "0%" }}
                      animate={{ opacity: 1, width: "100%" }}
                      transition={{ duration: 0.8 }}
                      exit={{ opacity: 0, width: "50%" }}
                    >
                      <ProductsList />
                    </motion.div>
                  }
                />
              }
            />
            <Route
              exact
              path="/products/create"
              element={
                <ProtectedRoute
                  isAllowed={user.username}
                  redirectTo="/"
                  children={
                    <motion.div
                      key="createProducts"
                      initial={{ opacity: 0, width: "0%" }}
                      animate={{ opacity: 1, width: "100%" }}
                      transition={{ duration: 0.8 }}
                      exit={{ opacity: 0, width: "50%" }}
                    >
                      <CreateProduct />
                    </motion.div>
                  }
                />
              }
            />
          </Routes>
        </AnimatePresence>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { authActions } from "./store/slices/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    const getCurrentUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const currentUser = {
          accessToken: user.accessToken,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          reloadUserInfo: user.reloadUserInfo,
          stsTokenManager: {
            accessToken: user.stsTokenManager.accessToken,
            expirationTime: user.stsTokenManager.expirationTime,
            refreshToken: user.stsTokenManager.refreshToken,
            isExpired: user.stsTokenManager.isExpired,
          },
          uid: user.uid,
        };

        dispatch(authActions.setUser(currentUser));
      } else {
        // User is signed out
        dispatch(authActions.setUser(null));
      }
    });

    return () => {
      getCurrentUser();
    };
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;

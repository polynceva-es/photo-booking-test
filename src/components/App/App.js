import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { register, login, loginGoogle, loginVk, resetPassword, checkToken } from '../../utils/auth';

import { Signin } from '../../pages/Signin/Signin';
import { Signup } from '../../pages/Signup/Signup';
import { ResetPassword } from '../../pages/ResetPassword/ResetPassword';
import { CatalogExecutors } from '../../pages/CatalogExperts/CatalogExperts';
import { Profile } from '../../pages/Profile/Profile';
import { Landing } from '../../pages/Landing/Landing';
import { ClientAccount } from '../../pages/ClientAccount/ClientAccount';
import { ClientOrders } from '../../pages/ClientOrders/ClientOrders';
import { ExecutorAccount } from '../../pages/ExpertAccount/ExpertAccount';
import { ExecutorOrders } from '../../pages/ExpertOrders/ExpertOrders';
import { ExecutorRatings } from '../../pages/ExpertRatings/ExpertRatings';
import { OrderServices } from '../../pages/OrderServices/OrderServices';
import { ClientChat } from '../../pages/ClientChat/ClientChat';
import { ExecutorChat } from '../../pages/ExpertChat/ExpertChat';
import { Page404 } from '../../pages/404/404';

export function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [regedIn, setRegedIn] = React.useState(false);

  // const [isClient, setIsClient] = React.useState("true");
  // const [isExpert, setIsExpert] = React.useState("false");

  const [isLoader, setIsLoader] = React.useState(false);

  const onSubmitSignup = values => {
    register(values)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onSubmitSignin = values => {
    login(values)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onSubmitResetPassword = values => {
    resetPassword(values)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const signinGoogle = param => {
    loginGoogle(param)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const signinVk = param => {
    loginVk(param)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // function tokenCheck() {
  //   setIsLoader(true);
  //   const jwt = localStorage.getItem("token");
  //   if (jwt) {
  //     checkToken(jwt)
  //       .then((res) => {
  //         const userEmail = res.email;
  //         setLoggedIn(true);
  //         setUserEmail(userEmail);
  //         navigate("/", { replace: true });
  //       })
  //       .catch((err) => {
  //         console.log("Ошибка:" + err)
  //         localStorage.removeItem("token");
  //         setLoggedIn(false);
  //       })
  //       .finally(() => setIsLoader(false));
  //   }
  // }
  // React.useEffect(() => {
  //   tokenCheck();
  //   if (loggedIn) {
  //     setIsLoader(true);
  //     Promise([api.getUserInfo()])
  //       .then((res) => {
  //         const [userInfo] = res;
  //         setCurrentUser(userInfo);
  //        })
  //       .catch((err) => {
  //         console.log("Ошибка:" + err);
  //       })
  //       .finally(() => setIsLoader(false));
  //   }
  // }, [loggedIn]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Landing />}
      />
      <Route
        path="/sign-up"
        element={<Signup onSubmit={onSubmitSignup} />}
      />
      <Route
        path="/sign-in"
        element={
          <Signin
            onSubmit={onSubmitSignin}
            signinGoogle={signinGoogle}
            signinVk={signinVk}
          />
        }
      />
      <Route
        path="/reset-password"
        element={<ResetPassword onSubmit={onSubmitResetPassword} />}
      />
      <Route
        path="/catalog"
        element={<CatalogExecutors />}
      />
      <Route
        path="/card/:id"
        element={<Profile />}
      />
      <Route
        path="/client/:id"
        element={<ClientAccount />}
      />
      <Route
        path="/client/:id/orders"
        element={<ClientOrders />}
      />
      <Route
        path="/expert/:id"
        element={<ExecutorAccount />}
      />
      <Route
        path="/expert/:id/orders"
        element={<ExecutorOrders />}
      />
      <Route
        path="/expert/:id/ratings"
        element={<ExecutorRatings />}
      />
      <Route
        path="/order-service"
        element={<OrderServices />}
      />
      <Route
        path="/client/:id/chat"
        element={<ClientChat />}
      />
      <Route
        path="/expert/:id/chat"
        element={<ExecutorChat />}
      />
      <Route
        path="*"
        element={<Page404 />}
      />
    </Routes>
  );
}

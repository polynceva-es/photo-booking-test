import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  register,
  login,
  loginGoogle,
  loginVk,
  resetPassword,
  sendEmailToResetPassword,
  checkToken
} from '../../utils/auth';

import { Signin } from '../../pages/Signin/Signin';
import { Signup } from '../../pages/Signup/Signup';
import { ResetPassword } from '../../pages/ResetPassword/ResetPassword';
import { Landing } from '../../pages/Landing/Landing';
import { ChatRoom } from '../../pages/ChatRoom/ChatRoom';
import { Chat } from '../../pages/Chat/Chat';
import { Page404 } from '../../pages/404/404';

export function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [regedIn, setRegedIn] = useState(false);

  const [isClient, setIsClient] = useState(undefined);
  const [isEmailSend, setIsEmailSend] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const [isLoader, setIsLoader] = useState(false);

  const onSubmitSignup = (values, status) => {
    register(values, status)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onSubmitJoin = values => {
    if (values.type === 'client') {
      setIsClient(true);
    } else {
      setIsClient(false);
    }
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

  const onSubmitSendEmailToResetPassword = values => {
    sendEmailToResetPassword(values)
      .then(res => {
        console.log(res);
        setIsEmailSend(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onSubmitResetPassword = values => {
    resetPassword(values)
      .then(res => {
        console.log(res);
        setIsPasswordReset(true);
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
  // useEffect(() => {
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
        element={
          <Signup
            onSubmit={onSubmitSignup}
            onSubmitJoin={onSubmitJoin}
            isClient={isClient}
            setIsClient={setIsClient}
          />
        }
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
        element={
          <ResetPassword
            isEmailSend={isEmailSend}
            isPasswordReset={isPasswordReset}
            onSubmitResetPassword={onSubmitResetPassword}
            onSubmitSendEmailToResetPassword={onSubmitSendEmailToResetPassword}
          />
        }
      />
      <Route
        path="/chat/:id/chat-room"
        element={<ChatRoom />}
      />
      <Route
        path="/chat/"
        element={<Chat />}
      />
      <Route
        path="*"
        element={<Page404 />}
      />
    </Routes>
  );
}

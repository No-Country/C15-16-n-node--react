import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FullWithLayout } from '../hocs/layouts/FullWithLayout';
const Home = lazy(() => import('../pages/Home'));
const SignInSide = lazy(() => import('../pages/SignInSide'));
const SignUp = lazy(() => import('../pages/SignUp'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInSide />}>
        <Route index element={<Home />} />
        <Route path="/SignInSide" element={<SignInSide />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
import { IRoute, RouteType } from "../interfaces/IRoute.ts";
import HomePage from "../pages/HomePage/HomePage.tsx";
import home from "../assets/icons/home.svg";
import map from "../assets/icons/map.svg";
import profile from "../assets/icons/user.svg";
import TestPage from "../pages/TestPage/TestPage.tsx";
import placeholder from "../assets/icons/placeholder.svg";
import ProfilePage from "../pages/ProfilePage/ProfilePage.tsx";
import AuthPage from "../pages/AuthPage/AuthPage.tsx";
import App from "../App.tsx";
import React from "react";
import SignInPage from "../pages/AuthPage/SignInPage/SignInPage.tsx";
import SignUpPage from "../pages/AuthPage/SignUpPage/SignUpPage.tsx";
import TreasureHunt from "../components/shared/treasureHuntHomePage/treasureHunt.tsx";
import TreasureHuntPage from "../pages/TreasureHuntPage/TreasureHuntPage.tsx";
import MapPage from "../pages/MapPage/MapPage.tsx";

export const Routes: IRoute[] = [
  {
    path: "/",
    title: "app",
    component: <App />,
    routeType: RouteType.INTERNAL,
    children: [
      {
        path: "",
        title: "Hjem",
        icon: home,
        component: <HomePage />,
        routeType: RouteType.NAVBAR,
      },
      {
        path: "/kort",
        title: "Find vej",
        icon: map,
        component: <MapPage />,
        routeType: RouteType.NAVBAR,
      },
      {
        path: "/skattejagt",
        title: "Skattejagt",
        icon: placeholder,
        component: <TreasureHuntPage />,
        routeType: RouteType.NAVBAR,
      },
      {
        path: "/profil",
        title: "Profil",
        icon: profile,
        component: <ProfilePage />,
        routeType: RouteType.NAVBAR,
      },
      //TODO: REMOVE THIS IN PRODUCTION
      {
        path: "/test",
        title: "Test",
        routeType: RouteType.INTERNAL,
        component: <TestPage />,
      },
      {
        path: "/auth",
        title: "Auth",
        routeType: RouteType.AUTH,
        component: <AuthPage />,
      },
      {
        path: "/login",
        title: "Login",
        component: <SignInPage />,
        routeType: RouteType.AUTH,
      },
      {
        path: "/tilmeld",
        title: "Register",
        component: <SignUpPage />,
        routeType: RouteType.AUTH,
      },
    ],
  },
];

export const navRoutes = Routes[0].children!.filter(
  (route) => route.routeType === RouteType.NAVBAR,
);

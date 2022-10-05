import React from "react";
import { Header } from "../Header";
import { Body } from "../Body";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const App = () => {
  const { listLaunches } = useLaunchContext();

  React.useEffect(() => {
    listLaunches();
  }, [listLaunches]);

  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

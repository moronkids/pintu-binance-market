import { Hooks } from "providers";
import React, { useContext, useEffect, useState } from "react";
import Home from "components/dashboard/home";
import { useLocation } from "react-router";
import { GetAllAsset, Ticker } from "api";
import { useQuery } from "react-query";

function Agent() {
  return (
    <>
      <Home />
    </>
  );
}

export default Agent;

import { react } from "@babel/types";
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { insultValue, fetchInsult } from "./shakespeareSlice";

export const shakespeareInsult = () => {
  const insult = useAppSelector(insultValue);
  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <button onClick={() => dispatch(fetchInsult)}>Fetch Insult</button>
      <div>{insult}</div>
    </React.Fragment>
  );
};

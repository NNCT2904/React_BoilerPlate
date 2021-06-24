import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { insultValue, fetchInsult } from "./shakespeareSlice";

export const ShakespeareInsult = () => {
  const insult = useAppSelector(insultValue);
  const dispatch = useAppDispatch();

  const onClick = () => {
    console.log("AAAAAAA");
    dispatch(fetchInsult());
  }

  return (
    <React.Fragment>
      <button onClick={onClick}>Fetch Insult</button>
      <div>{insult}</div>
    </React.Fragment>
  );
};

export default ShakespeareInsult;

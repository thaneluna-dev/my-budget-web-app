import React from "react";

export default function Dashboard({ isSignedIn }) {
  return isSignedIn ? (
    <div className="p-5 grid grid-cols-3">
      <div className="col-start-1"><button className="btn btn-primary ">Button</button></div>
      <div className="col-start-2"><button className="btn btn-primary" >Button</button></div>
      <div className="col-start-3"><button className="btn btn-primary" >Button</button></div>
    </div>
  ) : null;
}

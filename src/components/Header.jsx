import "./item.css";
import React from "react";

function Header(props) {
  console.log(props);
  return (
    <div className="block">
      {props.data.map((item) => {
        return (
          <h1>
            <div>{item.name} </div>
            <div>{item.surname} </div>
            <div>{item.phone} </div>
            <div>{item.car} </div>
            <div>{item.age} </div>
            <div>{item.height} </div>
          </h1>
        );
      })}
    </div>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import "../Nav.css";
function Nav() {
  const [scrollvalue, setscrollvalue] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 50 && setscrollvalue(true);
      window.scrollY < 50 && setscrollvalue("");
    });
  }, []);
  return (
    <div className={`Outer-nav ${scrollvalue && "newnav"}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
    </div>
  );
}

export default Nav;

import React from "react";

function Header() {
  return (
    <header className="my-10">
      <div className="w-2/5 mx-auto flex flex-col items-center gap-y-3">
        <img src="img/logo.png" className="w-3/4" alt="" />
        <h3 className="font-bold">Global and Country Wise Cases of Corona Virus</h3>
        <p className="italic">For a Particlar select a Country from below</p>
      </div>
    </header>
  );
}

export default Header;

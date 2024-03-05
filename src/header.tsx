import React from "react";
import { Link } from "react-router-dom";

export const Header = () =>
  true ? null : (
    <header>
      <Link to="/">Home Page</Link>
      <Link to="/other">Other Page</Link>
    </header>
  );

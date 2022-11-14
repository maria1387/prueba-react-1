import { useState } from "react";

import Card from "./Card";
import Navbar from "./Navbar";

const MiApp = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar setSearch={setSearch} />
      <div className="contenedor1">
        <h1 className="h1">Coctel</h1>
        <Card search={search} />
      </div>
    </div>
  );
};

export default MiApp;

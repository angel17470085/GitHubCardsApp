// import React, { useState } from "react";
// export default function App() {
//   const [conteo, setConteo] = useState(0);
//   return (
//     <div>
//       Esta es una aplicación de ejemplo React con estado, renderizada en el lado
//       del servidor
//       <br />
//       <br />
//       El siguiente botón mostrará cuántas veces se le ha dado clic:
//       <br />
//       <br />
//       <button onClick={() => setConteo(conteo + 1)}>{conteo}</button>
//     </div>
//   );
// }

import React from "react";
import Card from "./Card";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
      </div>
    );
  }
}
export default App;
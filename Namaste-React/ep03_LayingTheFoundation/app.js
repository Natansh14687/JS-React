import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{"id":"heading"},"This is heading using React");
// const headingJSX = (<h1 id="heading">
//                         This is heading using JSX 🚀
//                     </h1>)

const Title = ()=>(
    <h1 className="heading">Namaste React using JSX</h1>
)

const HeadingComponent = ()=>(
    <div>
        <Title />
        <h1>Namaste React... Functional Component</h1>
    </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
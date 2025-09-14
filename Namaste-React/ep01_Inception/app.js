/*

<div id="parent">
        <div id="child">
            <h1>Hello Bachooooooo!</h1>
            <h2>This is h2 sibling of h1</h2>
        </div>
</div>

*/

const parent = React.createElement("div", {id:"parent"}, React.createElement("div",{id:"child"}, [React.createElement("h1",{},"Hello Bachoooooooooooo!"), React.createElement("h2", {}, "This is h2 sibling of h1")]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

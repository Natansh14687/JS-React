function customRender(renderElement, root){
    // const domElement = document.createElement(renderElement.type);
    // domElement.innerHTML = renderElement.children;
    // domElement.setAttribute = ("href", renderElement.props.href);
    // domElement.setAttribute = ("target", renderElement.props.target);

    // root.appendChild(domElement);

    
    const domElement = document.createElement(renderElement.type);
    domElement.innerHTML = renderElement.children;
    for(const prop in renderElement.props){
        if(prop === "children") continue;
        domElement.setAttribute(prop, renderElement.props[prop]);
    }
    root.appendChild(domElement);
}



const renderElement = {
    type : "a",
    props : {
        "href" : "https://google.com",
        "target" : "_blank"
    },
    children : "Google me"
}




const root = document.getElementById("root");
customRender(renderElement, root);

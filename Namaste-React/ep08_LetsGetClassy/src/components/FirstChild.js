import React from "react";
class FirstChild extends React.Component{
    constructor(){
        super();
        console.log("First Child Constructor");
    }


    componentDidMount(){
        console.log("First Child Component did Mount");
    }

    render(){
        return(
            <div>
                {console.log("First Child Render")}
            </div>
        )
    }
}

export default FirstChild;
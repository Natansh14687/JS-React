import React from "react";
class SecondChild extends React.Component{
    constructor(){
        super();
        console.log("Second Child Constructor");
    
    }


    componentDidMount(){
        console.log("Second Child Component did Mount");
    }

    render(){
        return(
            <div>
                {console.log("Second Child Render")}
            </div>
        )
    }
}

export default SecondChild;
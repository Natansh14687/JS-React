import React from "react";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            notCount : "not zero",
        }

        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component did Mount");
    }

    render(){
        return (
            <div>
                <h1>This is Class based component</h1>
                <h2>{this.props.name}</h2>
                <h3>{this.props.age}</h3>
                <h4>{this.state.count} is {this.state.notCount}</h4>
                {console.log("Parent Render")}
                <FirstChild />
                <SecondChild />
                <h2>count : {this.state.count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count+1,
                    })
                }}>inc</button>
            </div>
        )

    };
}

export default UserClass;
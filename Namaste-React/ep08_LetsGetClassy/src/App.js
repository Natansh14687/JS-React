import ReactDOM from "react-dom/client"
import User from "./components/User";
import UserClass from "./components/UserClass";

const App = ()=>{
    return (
        <div>
            <User name="Natansh" age={21} />
            <UserClass name="Dushyant" age={20} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

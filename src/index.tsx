import ReactDOM from "react-dom/client";
import GuestList from './state/GuestList';
import UserSearch from './refs/UserSearch';
import EventComponent from "./events/EventComponent";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

// 4) Create a component
const App = () => {
    return (
        <div>
            <GuestList />
            <UserSearch />
            <br/>
            <br/>
            <EventComponent />
        </div>
    );
};

// 5) Show the component on the screen
root.render(<App />);
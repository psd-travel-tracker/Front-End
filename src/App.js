import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ViewTrips from "./Pages/ViewTrips";
import CreateNewTrip from "./Pages/CreateNewTrip";
import TripDetails from "./Pages/TripDetails";
import CreateExpense from "./Pages/CreateExpense";
import AccountDetails from "./Pages/AccountDetails";

export default function App() {
    const storedUserId = localStorage.getItem('userId');
    const userId = storedUserId ? JSON.parse(storedUserId) : null;
    if (userId) {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} /> 
                    <Route path="/register" element={<RegisterPage/>} /> 
                    <Route path="/view-trips" element={<ViewTrips/>} />
                    <Route path="/create-new-trip" element={<CreateNewTrip/>} />
                    <Route path="/trip-details/:id/create-expense" element={<CreateExpense/>} />
                    <Route path="/create-expense" element={<CreateExpense/>} />
                    <Route path="/trip-details/:id" element={<TripDetails/>} />
                    <Route path="/account-details" element={<AccountDetails/>}/>
                </Routes>
            </Router>
        );
    }
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}
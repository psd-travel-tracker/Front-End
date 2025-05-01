import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ViewTrips from "./Pages/ViewTrips";
import CreateNewTrip from "./Pages/CreateNewTrip";
import TripDetails from "./Pages/TripDetails";
import CreateExpense from "./Pages/CreateExpense";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} /> 
                <Route path="/register" element={<RegisterPage/>} /> 
                <Route path="/" element={<ViewTrips/>} />
                <Route path="/create-new-trip" element={<CreateNewTrip/>} />
                <Route path="/trip-details/:id/create-expense" element={<CreateExpense isEdit={false}/>} />
                <Route path="/trip-details/:id/edit-expense" element={<CreateExpense isEdit={true} />} />
                <Route path="/create-expense" element={<CreateExpense/>} />
                <Route path="/trip-details/:id" element={<TripDetails/>} />
            </Routes>
        </Router>
    );
}
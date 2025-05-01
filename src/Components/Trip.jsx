import {useNavigate} from 'react-router-dom';
import "../Style/trip.css";
import { useState } from 'react';


export default function Trip({ TripId, Trip, showMenu = false, onDelete }) {

    const navigate = useNavigate();
    const TripName = Trip.name;
    // TODO: Filler data until we audit our schema now that we have a better idea what the UI requires
    const StartDate = Trip.startDate ? Trip.startDate : "March 15th";
    const EndDate = Trip.endDate ? Trip.endDate : "March 25th";
    const Location = Trip.location ? Trip.location : Trip.name;
    const Description = Trip.description ? Trip.description : "Trip description: Lorem Ipsum is simply dummy text of the printing industry.";
    
    const [menuVisible, setMenuVisible] = useState(false);

    // delete trip functionality
    function handleDeleteTrip(e) {
        e.stopPropagation(); // prevents triggering card navigation
        fetch(`http://localhost:3001/trips/${TripId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.message);
            if (onDelete) onDelete();
            // Optional: refresh parent list or notify deletion
        })
        .catch(err => console.error('Failed to delete trip:', err));
    }
 
    function handleEditTrip(e) {
        e.stopPropagation(); // prevents triggering card navigation
        console.log("Edit trip clicked");
    }
    // TODO: create reusable components where we can and replace filler data with actual trip data pulled from updated schema
    return (
        <div className="trip-card" >
        <div className="trip-image" />
        
        {/* 3-dot vertical menu */}
        {showMenu && (
        <div 
            className="trip-menu-icon"
            onClick={(e) => {
            e.stopPropagation();
            setMenuVisible(!menuVisible);
            }}
        >
            ⋮
            {menuVisible && (
            <div className="trip-menu-dropdown">
                <div onClick={handleEditTrip}>Edit</div>
                <div onClick={handleDeleteTrip}>Delete</div>
            </div>
            )}
        </div>
        )}

    
        <div className="trip-content" onClick={() => navigate(`/trip-details/${TripId}`)}>
            <div className="trip-dates">{StartDate} - {EndDate}</div>
            <h2 className="trip-title">{TripName}</h2>
            <div className="trip-location"><span className="location-icon">*</span>{Location}</div>
            <p className="trip-description">{Description}</p>
            <div className="trip-stats">
                <div className="stat-item"><span className="stat-value">{TripId + 1}</span><span className="stat-label">Days</span></div>
                <div className="stat-item"><span className="stat-value">{TripId + 4}</span><span className="stat-label">Activities</span></div>
                <div className="stat-item"><span className="stat-value">{TripId}</span><span className="stat-label">Places</span></div>
            </div>
        </div>
    </div>
    
    );
}
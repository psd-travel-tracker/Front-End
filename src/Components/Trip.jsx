import {useNavigate} from 'react-router-dom';
import "../Style/trip.css";

export default function Trip({TripId, Trip}) {
    const navigate = useNavigate();
    const TripName = Trip.name;
    // TODO: Filler data until we audit our schema now that we have a better idea what the UI requires
    const StartDate = Trip.startDate ? Trip.startDate : "March 15th";
    const EndDate = Trip.endDate ? Trip.endDate : "March 25th";
    const Location = Trip.location ? Trip.location : Trip.name;
    const Description = Trip.description ? Trip.description : "Trip description: Lorem Ipsum is simply dummy text of the printing industry.";
    
    // TODO: create reusable components where we can and replace filler data with actual trip data pulled from updated schema
    return (
        <button style={{padding: "unset"}} className="trip-card" onClick={() => navigate(`/trip-details/${TripId}`)}>
            <div className="trip-image"/>
            <div className="trip-content">
                <div className="trip-dates">{StartDate} - {EndDate}</div>
                <h2 className="trip-title">{TripName}</h2>
                <div className="trip-location"><span className="location-icon">*</span>{Location}</div>
                <p className="trip-description">{Description}</p>
                <div className="trip-stats">
                    <div className="stat-item">
                        <span className="stat-value">{TripId + 1}</span>
                        <span className="stat-label">Days</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{TripId + 4}</span>
                        <span className="stat-label">Activities</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{TripId}</span>
                        <span className="stat-label">Places</span>
                    </div>
                </div>
            </div>
        </button>
    );
}
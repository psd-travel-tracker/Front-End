import {useNavigate} from 'react-router-dom';

export default function Trips({data}) {
    const navigate = useNavigate();
    return data && data.length ?
        <div className="tripsWrapper">
            {data.map( trip => 
                <button 
                    key= {trip.id}
                    className="trip-view-button"
                    onClick={() => navigate(`/trip-details/${trip.id}`)}//We need the router to direct us to the new page. In the TripDetails component I can write another function to get this singular trip
                >
                    <span>{trip.name}</span>
                    <span>{trip.startDate} - {trip.endDate}</span>
                </button>
            )}
        </div>
        : <p>No Trips Found</p>;
}
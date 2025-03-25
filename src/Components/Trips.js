import Trip from './Trip.jsx';

export default function Trips({data}) {
    return data && data.length ?
        <div className="trips-wrapper">
            {data.map( trip => 
                <Trip key={`TripId_${trip.id}`} TripId={trip.id} Trip={trip}/>
            )}
        </div>
        : <p>No Trips Found</p>;
}

export default function Trips({data}) {
    return data ?
        data.map( trip => 
        <button 
        key= {trip.id}
        className="trip-view-button"
        onClick={() => console.log(trip.name)}//will replace with function soon do I actually need to use react router?
        >
        <span>{trip.name}</span>
        <span>{trip.startDate} – {trip.endDate}</span>
        </button> )
    : <p>No Trips Found</p>;
    {/*return <button className="square">{trip.name}</button>;*/}
}
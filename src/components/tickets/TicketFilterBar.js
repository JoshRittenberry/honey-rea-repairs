export const TicketFilterBar = ({ setShowEmergencyOnly, setSearchTerm }) => {
    return (
        <div className="filter-bar">
            <div>
                <button className="filter-btn btn-primary" onClick={() => { setShowEmergencyOnly(true) }}>
                    Emergency
                </button>
            </div>
            <div>
                <button className="filter-btn btn-info" onClick={() => { setShowEmergencyOnly(false) }}>
                    Show All
                </button>
            </div>
            <input
                type="text"
                placeholder="Search Tickets"
                className="ticket-search"
                onChange={(event) => { setSearchTerm(event.target.value) }}
            />
        </div>
    )
}
export const TicketFilterBar = ({ setShowEmergencyOnly, setSearchTerm, currentUser, setShowOpenOnly }) => {
    return (
        <div className="filter-bar">
            {currentUser.isStaff ? (
                <>
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
                </>
            ) : (
                <>
                    <div>
                        <button className="filter-btn btn-primary" onClick={() => { setShowEmergencyOnly(true) }}>
                            Create Ticket
                        </button>
                    </div>
                    <div>
                        <button className="filter-btn btn-info" onClick={() => { setShowOpenOnly(true) }}>
                            Open Tickets
                        </button>
                    </div>
                    <div>
                        <button className="filter-btn btn-secondary" onClick={() => { setShowOpenOnly(false) }}>
                            All My Tickets
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
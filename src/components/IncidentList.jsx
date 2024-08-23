import React from 'react';

function IncidentList({ incidents, deleteIncident }) {
    return (
        <div>
            <h2>Incident List</h2>
            <ul>
                {incidents.map((incident) => (
                    <li key={incident.id}>
                        <strong>{incident.title}</strong> - {incident.description} - {incident.status}
                        <button onClick={() => deleteIncident(incident.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default IncidentList;
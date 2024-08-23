import React, { useState, useEffect } from 'react';
import { getIncidents, createIncident, deleteIncident } from './services/incidentServices';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';

function App() {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        fetchIncidents();
    }, []);

    const fetchIncidents = async () => {
        try {
            const response = await getIncidents();
            setIncidents(response.data);
        } catch (error) {
            console.error('Error fetching incidents:', error);
        }
    };

    const handleCreateIncident = async (incident) => {
        try {
            await createIncident(incident);
            fetchIncidents(); // Refresh the incident list
        } catch (error) {
            console.error('Error creating incident:', error);
        }
    };

    const handleDeleteIncident = async (id) => {
        try {
            await deleteIncident(id);
            fetchIncidents(); // Refresh the incident list
        } catch (error) {
            console.error('Error deleting incident:', error);
        }
    };

    return (
        <div className="App">
            <h1>Incident Management</h1>
            <IncidentForm createIncident={handleCreateIncident} />
            <IncidentList incidents={incidents} deleteIncident={handleDeleteIncident} />
        </div>
    );
}

export default App;

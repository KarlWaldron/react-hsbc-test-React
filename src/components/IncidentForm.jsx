import React, { useState } from 'react';

function IncidentForm({ createIncident }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('OPEN');

    const handleSubmit = (e) => {
        e.preventDefault();
        createIncident({ title, description, status });
        setTitle('');
        setDescription('');
        setStatus('OPEN');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create New Incident</h2>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="OPEN">Open</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="CLOSED">Closed</option>
                </select>
            </div>
            <button type="submit">Create Incident</button>
        </form>
    );
}

export default IncidentForm;
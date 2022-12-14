import React, { useState } from "react";

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Gene', age: 20 },
]

const UserSearch: React.FC = () => {

    const [name, setName] = useState('');
    const onClick = () => {
        console.log('search clicked');
    }

    return <div>
        <h3>User Search</h3>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Search</button>
    </div>;
}

export default UserSearch;

import { useState } from 'react';

function NewContact(props) {
    const {contacts, setContacts} = props;
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    async function createContact(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                address
            })
        });

        const data = await response.json();

        if (data.id) {
            setContacts([...contacts, data]);
        }

        setName('');
        setAddress('');
    }
	
	return (
        <form className='new-contact' onSubmit={createContact}>
            <div style={{ marginBottom: '15px' }}>
                <label>Contact Name:</label>
                <input type='text' placeholder='Enter Contact Name' onChange={(e) => setName(e.target.value)} value={name}/>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>Contact Address:</label>
                <input type='text' placeholder='Enter Contact Address' onChange={(e) => setAddress(e.target.value)} value={address}/>
            </div>
            <button className='button green' type='submit'>Create Contact</button>
        </form>
	);
}


    export default NewContact;
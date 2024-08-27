import { useState } from 'react';

function NewContact(props) {
    const {contacts, setContacts} = props;
    const [name, setName] = useState('');

    async function createContact(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            })
        });

        const data = await response.json();

        if (data.id) {
            setContacts([...contacts, data]);
        }

        setName('');
    }

    return ( 
        <form onSubmit={createPhone} onClick={(e) => e.stopPropagation()} className='new-phone'> 
        <select value={name} onChange={(e) => setName(e.target.value)}> 
        <option value="" disabled>Select Name</option> 
        <option value="Home">Home</option> 
        <option value="Work">Work</option> 
        <option value="Mobile">Mobile</option> 
        <option value="Other">Other</option> 
        </select> 
        <input type='text' placeholder='Phone Number' onChange={(e) => setNumber(e.target.value)} value={number}/> 
        <button className='button green' type='submit'>Add Your Phone Please</button> 
        </form> 
        ); 
    } 

    export default NewContact;
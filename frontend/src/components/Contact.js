import { useState, useEffect } from 'react';  // import useEffect
import PhoneList from './PhoneList.js';
import CompanyList from './CompanyList.js';

function Contact(props) {
    const {contact, contacts, setContacts} = props;
    const [expanded, setExpanded] = useState(false);
    const [phones, setPhones] = useState([]);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch('http://localhost/api/contacts/' + contact.id + '/phones')
            .then(response => response.json())
            .then(data => setPhones(data))
            .catch((error) => {
                console.error('Error:', error);
            });
        fetch('http://localhost/api/contacts/' + contact.id + '/companies')
            .then(response => response.json())
            .then(data => setCompanies(data))
            .catch((error) => {
                console.error('Error fetching companies:', error);
            });
    }, []);

    const expandStyle = {
        display: expanded ? 'block' : 'none'
    };

    async function doDelete(e) {
        e.stopPropagation();
        
        const response = await fetch('http://localhost/api/contacts/' + contact.id, {
            method: 'DELETE',
        });

        let newContacts = contacts.filter((c) => {
            return c.id !== contact.id;
        });

        setContacts(newContacts);
    }
    async function doUpdate(e) {
        e.stopPropagation();

        const updatedContact = {
            ...contact,  // Keep existing contact details
            name: prompt("Enter new name", contact.name) || contact.name,  // Prompt for new name
            address: prompt("Enter new address", contact.address) || contact.address  // Prompt for new address
        };

        const response = await fetch('http://localhost/api/contacts/' + contact.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedContact)
        });

        if (response.ok) {
            let newContacts = contacts.map((c) => (c.id === contact.id ? updatedContact : c));
            setContacts(newContacts);
        } else {
            console.error('Failed to update the contact');
        }
    }

    return (
        <div key={contact.id} className='contact-summary'>
            <div className='contact-header'>
                <h3 className='contact-summary-title'>Contact Summary:</h3>
                <p className='contact-name'>Name: {contact.name}</p>
                <p className='contact-address'>Address: {contact.address}</p>
                <p className='contact-toggle' onClick={() => setExpanded(!expanded)}>
                    Click the contact to {expanded ? 'collapse' : 'expand'} {contact.name}'s phones and companies
                </p>

            </div>
            <div className='contact-buttons'>
                <button className='button red' onClick={doDelete}>Delete Contact</button>
                <button className='button blue' onClick={doUpdate}>Edit Contact</button>
            </div>

            {expanded && (
                <div style={{ marginTop: '10px' }}>
                    <hr />
                    <PhoneList phones={phones} setPhones={setPhones} contact={contact} />
                    <CompanyList companies={companies} setCompanies={setCompanies} contact={contact} />
                </div>
            )}

            <hr className='contact-separator' />
        </div>
    );
}

export default Contact;

function Phone(props) {
    const {contact, phone, phones, setPhones} = props;

    async function deletePhone() {
        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/phones/' + phone.id, {
            method: 'DELETE',
        });

        let newPhones = phones.filter((p) => {
            return p.id !== phone.id;
        });
       
        setPhones(newPhones);
    }
    
    async function doUpdate(e) {
        e.stopPropagation();

        const updatedPhone = {
            ...phone,
            phone_type: prompt("Enter new phone type", phone.phone_type) || phone.phone_type, 
            phone_number: prompt("Enter new phone number", phone.phone_number) || phone.phone_number
        };

        const response = await fetch('http://localhost/api/contacts/'+ contact.id + '/phones/' + phone.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPhone)
        });

        if (response.ok) {
            let newPhones = phones.map((c) => (c.id === phone.id ? updatedPhone : c));
            setPhones(newPhones);
        } else {
            console.error('Failed to update the phone');
        }
    }
	
    return (
		<tr>
            <td>{ phone.phone_type }</td>
            <td>{ phone.phone_number }</td>
            <td style={
                {
                    width: '14px',
                }
            }>
                <button className="button red" onClick={deletePhone}>Delete</button>
                <button className="button blue" onClick={doUpdate}>Edit</button>
            </td>
        </tr>
	);
} export default Phone;
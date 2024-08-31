function Company(props) {
    const {contact, company, companies, setCompanies} = props;

    async function deleteCompany() {
        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/companies/' + company.company_id, {
            method: 'DELETE',
        });

        let newCompanies = companies.filter((p) => {
            return p.company_id !== company.company_id;
        });

        setCompanies(newCompanies);
    }
    
    async function doUpdate(e) {
        e.stopPropagation();

        const updatedCompany = {
            ...company,
            company_name: prompt("Enter new company name", company.company_name) || company.company_name, 
            company_address: prompt("Enter new comany address", company.company_address) || company.company_address
        };

        const response = await fetch('http://localhost/api/contacts/'+ contact.id + '/companies/' + company.company_id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCompany)
        });

        if (response.ok) {
            let newCompanies = companies.map((c) => (c.company_id === company.company_id ? updatedCompany : c));
            setCompanies(newCompanies);
        } else {
            console.error('Failed to update the company');
        }
    }

	return (
		<tr>
            <td>{ company.company_name }</td>
            <td>{ company.company_address }</td>
            <td style={
                {
                    width: '14px',
                }
            }>
                <button className="button red" onClick={deleteCompany}>Delete</button>
                <button className="button blue" onClick={doUpdate}>Edit</button>
            </td>
        </tr>
	);
}

export default Company;

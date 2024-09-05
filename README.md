# README.md

Qian (Eric) Ding's shared repository: https://github.com/ruiqianding/EricAssignment2

I choose Option A

# TASK 1 – USER INTERFACE CHANGES 

# 1. Change Button Label in Contact Component

In "/frontend/src/components/Contact.js", change the text in the yellow rectangle from "Delete" to "Delete Contact".

<img title="1" alt="1" src= 1.png width="600">

# 2. Change Button Label in Phone Component

In "/frontend/src/components/NewPhone.js", change the text in the yellow rectangle from "Add" to "Add {contact.name}'s Phone".

<img title="2" alt="2" src= 2.png width="600">

# 3. Change Placeholder Text to Drop-Down Menu

In "/frontend/src/components/NewPhone.js", change the syntax in the yellow rectangle from the first picture to the second picture.

<img title="3" alt="3" src= 3.png width="600">
<img title="4_2" alt="4_2" src= 4_2.png width="600">

# 4. Change Table Label in <tr> Element

In "/frontend/src/components/PhoneList.js, change the text in the yellow rectangle from "Name" to "Phone Type".

<img title="5" alt="5" src= 5.png width="600">

# Task 2 - API Command Demonstrations

Show Contact:

http GET localhost/api/contacts

<img title="6" alt="6" src= 6.png width="600">

Add Contact:

http POST localhost/api/contacts "name"="Olivia"

<img title="7" alt="7" src= 7.png width="600">

Delete Contact:

http DELETE localhost/api/contacts/7

<img title="8" alt="8" src= 8.png width="600">

Update Contact:

http PUT localhost/api/contacts/4 "name"="Grace"

<img title="9" alt="9" src= 9.png width="600">
        
Show Phone:

(All phones of "contactId":6)

http GET localhost/api/contacts/6/phones

<img title="10" alt="10" src= 10.png width="600">

(phone of "contactId":6, "Id":3)

http GET localhost/api/contacts/6/phones/3

<img title="11" alt="11" src= 11.png width="600">

Add Phone:

http POST localhost/api/contacts/6/phones name="Home" number="9041250000"

<img title="12" alt="12" src= 12.png width="600">

Delete Phone:

http DELETE localhost/api/contacts/6/phones/4

<img title="13" alt="13" src= 13.png width="600">
        
Update Phone:

http PUT localhost/api/contacts/6/phones/10 name="Work" number="98882088"

<img title="14" alt="14" src= 14.png width="600">

# Task 3 – Database Modeling and Testing with Sequelize

# 1. Modify the Contacts Table

# a. In "/api/app.js", replace the following syntax with the syntax in the yellow rectangle

db.sequelize.sync({ alter: true })
  .then(() => {
    console.log("The database has been synchronized.");
  })
  .catch(err => {
    console.error("Unable to synchronize the database:", err);
  });

<img title="16" alt="16" src= 16.png width="600">

# b. In "/api/models/contact.model.js", add the syntax in the yellow rectangle.

<img title="15" alt="15" src= 15.png width="600">

# c. In "/api/controllers/contact.controller.js", add the syntax in the yellow rectangle.

<img title="24" alt="24" src= 24.png width="600">

# 2. Modify the Phones Table

# a. In "/api/models/phone.model.js", replace the following syntax with the syntax in the yellow rectangle.

phone_type: {
  type: Sequelize.STRING
},
phone_number: {
  type: Sequelize.STRING
}

<img title="17" alt="17" src= 17.png width="600">

# b. In "/api/controllers/phone.controller", change the text in the yellow rectangles:

name --> phone_type

number --> phone_number

<img title="28" alt="28" src= 28.png width="600">

# 3. Adjust the Front-End

# a. In "/frontend/src/components/NewContact.js", add the syntax in the yellow rectangle

<img title="18" alt="18" src= 18.png width="600">

# b. In "/frontend/src/components/NewPhone.js", change the text in the yellow rectangles:

name --> phone_type

number --> phone_number

<img title="19" alt="19" src= 19.png width="600">
<img title="20" alt="20" src= 20.png width="600">

# c. In "/frontend/src/components/Phone.js", change the text in the yellow rectangles:

name --> phone_type

number --> phone_number

<img title="21" alt="21" src= 21.png width="600">

# 4. Test All APIs for Contacts and Phones Tables

Show Contact:

(All Contacts)

http GET localhost/api/contacts

<img title="22" alt="22" src= 22.png width="600">

(Contact with "Id=6")

http GET localhost/api/contacts/6

<img title="23" alt="23" src= 23.png width="600">


Add Contact:

http POST localhost/api/contacts name="Tim" address="1000 Fortune Street Brooklyn"

<img title="25" alt="25" src= 25.png width="600">

Delete Contact:

http DELETE localhost/api/contacts/10

<img title="26" alt="26" src= 26.png width="600">

Update Contact:

http PUT localhost/api/contacts/6 "address"="88 Wondful Road Flamington"

<img title="27" alt="27" src= 27.png width="600">
        
Show Phone:

(All phones of "contactId":6)

http GET localhost/api/contacts/6/phones

<img title="29" alt="29" src= 29.png width="600">

(phone of "contactId":6, "Id":12)

http GET localhost/api/contacts/6/phones/12

<img title="30" alt="30" src= 30.png width="600">

Add Phone:

http POST localhost/api/contacts/16/phones phone_type="Work" phone_number="9008000000"

<img title="31" alt="31" src= 31.png width="600">

Delete Phone:

http DELETE localhost/api/contacts/6/phones/11

<img title="32" alt="32" src= 32.png width="600">
        
Update Phone:

http PUT localhost/api/contacts/16/phones/15 phone_type="Mobile" phone_number="0490080000"

<img title="33" alt="33" src= 33.png width="600">

# Task 4 – Expanding the Existing Tables

# 1. Table Creation
# a. In "/api/models/index.js, add the syntax in the yellow rectangle

<img title="34" alt="34" src= 34.png width="600">

# b. In "/api/models", create a new file: "company.model.js"

module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("company", {
        company_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        company_name: {
            type: Sequelize.STRING
        },
        company_address: {
            type: Sequelize.STRING
        },
        contactId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'contacts',
                key: 'id',
            }
        }
    });
  
    return Company;
};

# c. In "/api/controllers", create a new file: "company.controller.js"

const db = require("../models");
const Companies = db.companies;
const Op = db.Sequelize.Op;

// Create company
exports.create = (req, res) => {
    const company = {
        company_name: req.body.company_name,
        company_address: req.body.company_address,
        contactId: parseInt(req.params.contactId)
    };

    Companies.create(company)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred"
            });
        });
};

// Get all companies
exports.findAll = (req, res) => {

    Companies.findAll({
        where: {
            contactId: parseInt(req.params.contactId)
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get one company by id
exports.findOne = (req, res) => {
    Companies.findOne({
        where: {
            contactId: req.params.contactId,
            company_id: req.params.companyId
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Update one company by id
exports.update = (req, res) => {
    const company_id = req.params.companyId;

    Companies.update(req.body, {
        where: { company_id: company_id, contactId: req.params.contactId }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Company was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Company`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Company with id=" + company_id
        });
    });
};

// Delete one company by id
exports.delete = (req, res) => {
    const company_id = req.params.companyId;

    Companies.destroy({
        where: { company_id: company_id, contactId: req.params.contactId }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Company was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Company`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Company with id=" + company_id
        });
    });
};

# d. In "/api/controllers/contact.controller.js", add the syntax in the yellow rectangle.

<img title="40" alt="40" src= 40.png width="600">
<img title="41" alt="41" src= 41.png width="600">

# e. In "/api/controllers/stats.controller.js", add the syntax in the yellow rectangle

<img title="42" alt="42" src= 42.png width="600">

# f. In "/api/routes", create a new file: "Companies.routes.js"

module.exports = app => {
    const companies = require("../controllers/company.controller.js");
  
    var router = require("express").Router();
  
    router.post("/contacts/:contactId/companies", companies.create);
  
    router.get("/contacts/:contactId/companies", companies.findAll);
  
    router.get("/contacts/:contactId/companies/:companyId", companies.findOne);
  
    router.put("/contacts/:contactId/companies/:companyId", companies.update);
  
    router.delete("/contacts/:contactId/companies/:companyId", companies.delete);
  
    app.use('/api', router);
};

# g. In "/api/app.js", add the syntax in the yellow rectangle

<img title="35" alt="35" src= 35.png width="600">

# 2. API Creation

Show Company:

http GET localhost/api/contacts/6/companies

<img title="36" alt="36" src= 36.png width="600">

Add Company:

http POST localhost/api/contacts/6/companies company_name="Wonderful Pty Ltd" company_address="88 Lucky Street Flemington"

<img title="37" alt="37" src= 37.png width="600">

Delete Company:

http DELETE localhost/api/contacts/6/companies/2

<img title="38" alt="38" src= 38.png width="600">
        
Update Company:

http PUT localhost/api/contacts/16/companies/3 company_name="Evergreen Land Pty Ltd" company_address="121 Maxwell Road Long Lake"

<img title="39" alt="39" src= 39.png width="600">

# Task 5 – Front-End for Companies Table

# a. In "/frontend/src/components", create a new file: Company.js

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

# b. In "/frontend/src/components", create a new file: NewCompany.js

import { useState } from 'react';

function NewCompany(props) {
    const {contact, companies, setCompanies} = props;
    const [company_name, setName] = useState('');
    const [company_address, setAddress] = useState('');

    async function createCompany(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/companies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                company_name,
                company_address
            })
        });

        const data = await response.json();

        if (data.company_id) {
            setCompanies([...companies, data]);
        }

        setName('');
        setAddress('');
    }

    return ( 
        <form onSubmit={createCompany} onClick={(e) => e.stopPropagation()} className='new-company'> 
            <input type='text' placeholder='Company Name' onChange={(e) => setName(e.target.value)} value={company_name}/>
            <input type='text' placeholder='Company Address' onChange={(e) => setAddress(e.target.value)} value={company_address}/> 
        <button className='button green' type='submit'>Add {contact.name}'s Company</button> 
        </form> 
        ); 
    } 

export default NewCompany;

# c. In "/frontend/src/components", create a new file: CompanyList.js

import Company from './Company.js';
import NewCompany from './NewCompany.js';

function CompanyList(props) {
    const {contact, companies, setCompanies} = props;

	return (
        <div className='company-list'>
            <NewCompany companies={companies} setCompanies={setCompanies} contact={contact} />

            <table onClick={(e) => e.stopPropagation()}>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Company Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        companies.map((company) => {
                            return (
                                <Company key={company.company_id} company={company} companies={companies} setCompanies={setCompanies} contact={contact} />
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
	);
}

export default CompanyList;

# d. In "/frontend/src/components/Contact.js", add the syntax in the yellow rectangle

<img title="43" alt="43" src= 43.png width="600">
  
# e. In "/frontend/src/components/Contact.js", add the doUpdate function to use a prompt box for updating the contact information.
    
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
# f. In "/frontend/src/components/Contact.js", modify the return section as follows to: (i) Display the added contact summary, (ii) Implement the expand and collapse functionality for the phones and companies information, and (iii) Include the 'Edit Contact' button for the update function."
    
    return (
        <div key={contact.id} className='contact-summary'>
            <div className='contact-header'>
                <h3 className='contact-summary-title'>Contact Summary:</h3>
                <p className='contact-name'>Name: {contact.name}</p>
                <p className='contact-address'>Address: {contact.address}</p>
                <p className='contact-toggle' onClick={() => setExpanded(!expanded)}>
                    Click here to {expanded ? 'collapse' : 'expand'} {contact.name}'s phones and companies
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

# g. In "/frontend/src/components/ContactList.js", change the text in the yellow rectangle to "Add New Contact"

<img title="44" alt="44" src= 44.png width="600">

# h. In "/frontend/src/components/NewContact.js", add the syntax in the yellow rectangle

<img title="49" alt="49" src= 49.png width="600">

# i. In "/frontend/src/components/NewContact.js", modify the return section to include labels, creating a more instructional and interactive interface.
	
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

# j. In "/frontend/src/components/Phone.js", add the doUpdate function to use a prompt box for updating the phone information.
    
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

# k. In "/frontend/src/components/Phone.js", add the syntax in the yellow rectangle

<img title="45" alt="45" src= 45.png width="600">

# l. In "/frontend/src/components/Stats.js", add the syntax in the yellow rectangle

<img title="46" alt="46" src= 46.png width="600">
<img title="47" alt="47" src= 47.png width="600">

# m. In "/frontend/src/App.css", add the syntax bellow

.button.blue {
    background-color: #007bff; 
    color: white; 
}
.company-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.company-list > table {
    margin-top: 10px;
}
.company-list > table > thead > tr > th {
    padding: 5px;
}
.company-list > table > tbody > tr > td {
    padding: 5px;
}

.company-list > table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

.company-list > table td, .phone-list > table th {
    border: 1px solid #b1b1b1;
    padding: 8px;
}

.company-list > table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
}

.new-company {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.new-company > input {
    margin-right: 5px;
    width: 100%;
}
.contact-toggle {
    font-size: 0.9em;
    font-family: Arial, sans-serif;
    color: #888;
    margin-top: 10px;
    cursor: pointer;
    font-style: italic; /* Make the text italic */
}

# n. In "/frontend/src/App.js", change the text in the yellow rectangle to "Click a contact to view associated phone numbers and companies"

<img title="48" alt="48" src= 48.png width="600">
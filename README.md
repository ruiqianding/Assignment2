# README.md

Qian (Eric) Ding's shared repository: https://github.com/ruiqianding/EricAssignment2

I choose Option A

TASK 1 – USER INTERFACE CHANGES 

1. Change Button Label in Contact Component
In "/frontend/src/components/Contact.js", change the text in the yellow rectangle from "Delete" to "Delete Contact".
<img title="1" alt="1" src= 1.png width="600">
2. Change Button Label in Phone Component
In "/frontend/src/components/NewPhone.js", change the text in the yellow rectangle from "Add" to "Add Your Phone Please".
<img title="2" alt="2" src= 2.png width="600">
3. Change Placeholder Text to Drop-Down Menu
In "/frontend/src/components/NewPhone.js", change the syntax in the yellow rectangle from the first picture to the second picture.
<img title="3" alt="3" src= 3.png width="600">
<img title="4" alt="4" src= 4.png width="600">
4. Change Table Label in <tr> Element
In "/frontend/src/components/PhoneList.js, change the text in the yellow rectangle from "Name" to "Phone Type.
<img title="5" alt="5" src= 5.png width="600">

Task 2 - API Command Demonstrations

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
All phones of "contactId":6
http GET localhost/api/contacts/6/phones
<img title="10" alt="10" src= 10.png width="600">

phone of "contactId":6, "Id":3
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
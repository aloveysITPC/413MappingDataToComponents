import React from "react";
import Card from "./Card";
import contacts from "../contacts";

// function to be passed to the map function in the app function
function createCard(contact) {
  return (
    <Card
      id={contact.id}
      // may not usse key as a true property - it is only there for mapping
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      email={contact.email}
      tel={contact.phone}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* object function function  functional programming  - passing a function to a function  */}
      {contacts.map(createCard)}

      {/* map function loops through the contacts array  */}
      {/* each child in a list mus have a unique key property */}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;

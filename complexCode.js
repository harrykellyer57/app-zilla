// Filename: complexCode.js

/*
This code demonstrates a complex and elaborate implementation of a contact management system,
which allows the user to add, edit, and delete contacts. It also supports searching and sorting
contacts based on various criteria.

The code consists of multiple classes and functions to provide a modular and organized structure.
It handles all necessary validations and includes error handling for exceptional cases.

Please note that this is a simplified version for demonstration purposes and some functionality
may be omitted or simplified for brevity.
*/

class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

class ContactManager {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    // Validate contact details
    if (!contact || !contact.name || !contact.email || !contact.phone) {
      throw new Error("Invalid contact details provided.");
    }

    // Check for duplicate contact by email
    const isDuplicate = this.contacts.some((c) => c.email === contact.email);
    if (isDuplicate) {
      throw new Error("Contact with the same email already exists.");
    }

    // Add contact to the list
    this.contacts.push(contact);
  }

  editContact(email, updatedContact) {
    // Find the contact by email
    const index = this.contacts.findIndex((c) => c.email === email);
    if (index === -1) {
      throw new Error("Contact not found.");
    }

    // Update contact details
    this.contacts[index] = updatedContact;
  }

  deleteContact(email) {
    // Find the contact by email
    const index = this.contacts.findIndex((c) => c.email === email);
    if (index === -1) {
      throw new Error("Contact not found.");
    }

    // Remove contact from the list
    this.contacts.splice(index, 1);
  }

  searchContacts(keyword) {
    // Filter contacts by keyword
    return this.contacts.filter((c) =>
      c.name.includes(keyword) || c.email.includes(keyword) || c.phone.includes(keyword)
    );
  }

  sortContacts(criteria) {
    // Sort contacts based on given criteria
    return this.contacts.sort((a, b) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });
  }
}

// Usage example

const contactManager = new ContactManager();

// Add Contacts
contactManager.addContact(new Contact("John Doe", "john@example.com", "1234567890"));
contactManager.addContact(new Contact("Jane Smith", "jane@example.com", "9876543210"));
contactManager.addContact(new Contact("David Johnson", "david@example.com", "3456789012"));

// Edit a Contact
contactManager.editContact("jane@example.com", new Contact("Jane Brown", "jane@example.com", "9999999999"));

// Search Contacts
const searchResults = contactManager.searchContacts("Doe");
console.log(`Search Results:`, searchResults);

// Sort Contacts
const sortedContacts = contactManager.sortContacts("name");
console.log(`Sorted Contacts:`, sortedContacts);

// Delete a Contact
contactManager.deleteContact("john@example.com");
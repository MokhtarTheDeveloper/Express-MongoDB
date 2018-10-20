import  ContactSchema  from "../Models/model.js";
import mongoose from 'mongoose';


const Contact = mongoose.model('contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if (err){
            res.send(err)
        }
        res.json(contact)
    })
};

export const getContact = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) { 
            res.send(err)
        }
        res.json(contact)
    })
};

export const getContactByID = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if (err) { 
            res.send(err)
        }
        res.json(contact)
    })
}

export const updateContact = (req, res) => {
    Contact.findByIdAndUpdate({_id : req.params.contactID}, req.body, {new: true}, (err, contact) => {
        if (err) { 
            res.send(err)
        }
        res.json(contact)
    })
}

export const deleteContactByID = (req, res) => {
    Contact.findByIdAndDelete({_id: req.params.contactID}, (err, contact) => {
        if (err) { 
            res.send(err)
        }
        res.json(contact)
    })
}
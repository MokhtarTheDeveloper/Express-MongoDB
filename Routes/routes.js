import { addNewContact } from '../Controller/controller.js'
import { getContact, getContactByID,updateContact , deleteContactByID} from '../Controller/controller.js'

const routes = (app) => {
    app.route('/contact')
    .get((req,res,next)=> {
        console.log(`the source is ${req.originalUrl}`)
        console.log(`Method is ${req.method}`)
        next()
    },getContact)
    .post(addNewContact);

    app.route('/contact/:contactID')
    .get(getContactByID)
    .put(updateContact)
    .delete(deleteContactByID)
}

export default routes;

import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
    render() {
        return (
            <form className='ContactForm'>
                <h1>Add a Contact</h1>

                <div className="form-group">
                    <label for="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Enter name"/>
                </div>

                <div className="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="text" className="form-control" id="inputEmail" placeholder="Enter email"/>
                </div>

                <div className="form-group">
                    <label for="inputPhone">Phone</label>
                    <input type="text" className="form-control" id="inputPhone" placeholder="Enter phone"/>
                </div>

                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter address"/>
                </div>

                <div className="form-group">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="Enter city"/>
                </div>

                <div className="form-group">
                    <label for="inputState">State</label>
                    <input type="text" className="form-control" id="inputState" placeholder="Enter state"/>
                </div>

                <div className="form-group">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" placeholder="Enter zip code"/>
                </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}
export default ContactForm;
import React, { Component } from "react";
import SearchForm from "../components/SearchForm";


class Contact extends Component {
    state = {
        search: "",
        error: ""
    };


    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();

    };
    render() {
        return (
            <div>
                <div class="container-fluid w-75">
                    <div class="contact-box">
                        <form method="POST" action="mailto: jihyunjung0219@g">
                            <div class="title">
                                <h1>Contact</h1>
                            </div>
                            <div class="form-group">
                                <label for="Name">Name</label>
                                <input type="text" class="form-control" id="name" aria-describedby="inputName" placeholder="Full Name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label for="Message">Message</label>
                                <textarea type="placeholder" class="form-control" id="InputMsg" placeholder="Message here!"></textarea>
                            </div>
                            <br />
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;

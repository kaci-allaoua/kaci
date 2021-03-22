import React, { Component } from 'react'
import me from '../img/me.jpg';

export default class Contacts extends Component {
    render() {
        return (
            <div > 
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card align-items-center">
                                <div class="card-body">
                                    <img   src={me}  class="center-block"  height="450"/> 
                                    <br/>
                                    <br/>
                                    <h5 class="card-title">'À hiver qui est en eau, succède été bon et beau.'</h5>
                                    <p class="card-text"> 🏊🏻  🏊🏻 La natation est l'une de mes plus grandes passions 🏊🏻  🏊🏻  </p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                            <br/>
                            <form>
                                <div class="form-group" >
                                    <label for="inlineFormInput">Nom</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                                </div>

                                <div class="form-group" >
                                    <label for="inlineFormInput">Adresse email</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                                </div>
                                
                                <div class="form-group ">
                                    <label for="exampleFormControlTextarea1">Objet</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                
                                <div class="form-group ">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <a href="#" class="btn btn-info">Envoyer le message</a>
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}

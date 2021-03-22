import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class PhotoMain extends Component {

    constructor(){
        super();
        this.state={
            data:[]
        };
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/compact/landing/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }
    render() {
        const empData=this.state.data;
        const arr = new Array(empData.length);
        for(var i=0; i < empData.length-2; i+=1) {
            arr.push(
                <div class="card-group">
                    <div class="card"> 
                        <div class="card-body">
                        <img class="card-img-top1" src={empData[i].images ? empData[i].images[0] : "Pas d'image"} alt="Card image cap"  height="75"></img>
                        <br/>
                        <h5 class="card-title">{empData[i].name}</h5>
                        <a href="https://www.w3schools.com/">spécifications du {empData[i].name}</a> 
                        <p class="card-text"><small class="text-muted">Année de sortie : {empData[i+1].year}</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                        <img class="card-img-top2" src={empData[i+1].images ? empData[i+1].images[0] : "Pas d'image"} alt="Card image cap" height="75"></img>
                        <h5 class="card-title">{empData[i+1].name}</h5>
                        <Link to ={{
                            pathname:'/compact/',
                            hash: empData[i+1].name,
                            aboutProps:{
                                data:empData[i+1]
                            }
                        }}> link
                        </Link>
                        <p class="card-text"><small class="text-muted">Année de sortie : {empData[i+1].year}</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                        <img class="card-img-top3" src={empData[i+2].images ? empData[i+2].images[0] : "Pas d'image"} alt="Card image cap" height="75"></img>
                        <h5 class="card-title">{empData[i+2].name}</h5>
                        <a href="https://www.w3schools.com/">spécifications du {empData[i+2].name}</a>
                        <p class="card-text"><small class="text-muted">Année de sortie : {empData[i+1].year}</small></p>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>List of products</th>
                    </tr>
                </thead>
                <tbody>
                    {arr}
                </tbody>
            </table>
        );
    }
}
import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
          breweries: []
        };
        console.log("about",props.location.aboutProps.data)
    }
    
    render() {
        const arr = new Array(this.props.location.aboutProps.data.length)
        const data=this.props.location.aboutProps.data;
        for (const [key, value] of Object.entries(data)) {
            if (key != "images"){ 
                arr.push(
                            <tr>
                            <td>{key.trimLeft()}</td>
                            <td>{value.trimLeft()}</td>
                            </tr>
                )
            }
        }
        return (
            <div class="card" style={{ width: '32rem' }}>
                <div class="card-body">
                    <img class="card-img-top1" src={this.props.location.aboutProps.data.images} alt="Card image cap"  height="75" width="150"></img>
                    <h5 class="card-title">{this.props.location.aboutProps.data.name}</h5>
                    <p class="card-text">Full spec of the product</p>
                </div>
                <table class="table table-striped">
                    <tbody>
                        {arr}
                    </tbody>
                </table>        
            </div> 
        )
    }
}
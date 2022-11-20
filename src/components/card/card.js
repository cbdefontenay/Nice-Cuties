import { Component } from "react";
import './card.css';


class Card extends Component{
    render(){
        const {email, id, name} = this.props.monster;
        return(
            <div className="card-container" key={id}>
                <img alt="monster" src={`https://robohash.org/${id}?set=set4&size=180x180` }/>
                <h2> {name} </h2>
                <p>{email}</p>
            </div>
        );    
    }
}


export default Card;
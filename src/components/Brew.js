import React, { Component } from 'react';
import axios from 'axios'


class Brew extends Component {
  state = {
    cards: [],
    cardName: ''
  }

  updateSearch = () => {
    axios.get(`https://api.pokemontcg.io/v1/cards?name=${this.state.cardName}`).then(resp => {
      this.setState({
        cards: resp.data.cards
      })
      console.log(resp.data.cards)
    })
  }

  updateUserInput = event => {
    this.setState({
      cardName: event.target.value
    })
  }


  render() {
    return (
      <div className="main-div">
        <input type="search"
          placeholder="Type Pokemon Here"
          onChange={this.updateUserInput}
        >
        </input>
        <button onClick={this.updateSearch}>Search</button>
        <ul className="container">
          {this.state.cards.map(card => {
            return (
              <li key={card.id}>
                <section className="card-info-section">
                  <p>{card.name}</p>
                  <p>{card.nationalPokedexNumber}</p>
                  <p>{card.types}</p>
                </section>
                <div className="child-container">
                  <img src={card.imageUrlHiRes} style={{ width: "10rem" }}></img>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Brew;

import React, { Component } from 'react';
import krapow from './images/krapow.jpg';
import noodles from './images/noodles.jpg';
import padthai from './images/pad-thai.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ posts: json }))
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="container">
      <div class="jumbotron">
        <h1 class="display-4">Popular Thai Dishes</h1>
      </div>
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src={krapow} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Pad Krapow</h5>
            <p class="card-text">Pad krapow is a Thai stir-fry featuring holy basil, meat (usually chicken or pork), chilies, garlic, and fish sauce. It's known for its savory, spicy, and slightly sweet flavor profile, often served with rice and a fried egg on top.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
        <img class="card-img-top" src={noodles} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Boat Noodles</h5>
            <p class="card-text">Boat noodles pack a punch of flavor in small bowls. This Thai dish features thin rice noodles in a rich, meaty broth, traditionally infused with pork or beef blood for a unique depth. Enjoy bites of pork, beef, and offal, seasoned with aromatics and chilies for a truly satisfying experience.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
        <img class="card-img-top" src={padthai} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Pad Thai</h5>
            <p class="card-text">Pad Thai is a stir-fried rice noodle dish that bursts with sweet, savory, and tart flavors. Thin rice noodles mingle with fluffy eggs, fresh veggies, and your choice of protein, all coated in a delicious tamarind-based sauce and topped with crunchy peanuts.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div class="footer">
        <h3 class="h3-footer">Made with React.js</h3>
      </div>
    </div>
    );
  }
}
export default App;

import React, { Component } from 'react'
import './App.css'
import { unsplash } from './utils/api'
import { Images } from './components/Images';
import { SearchImages } from './components/SearchImages';

class App extends Component {

  state = {
    col1: [],
    col2: [],
    col3: [],
    search1: [],
    search2: [],
    search3: [],
    query: {}
  }

  componentDidMount() {
    unsplash.photos.listPhotos(1, 30, "latest")
      .then(response => {
        response.json().then(data => {
          this.setState({
            col1: data
          })
          console.log(data)
        })
      })
      .catch(err => {
        console.error(err);
      })

    unsplash.photos.listPhotos(2, 30, "latest")
      .then(response => {
        response.json().then(data => {
          this.setState({
            col2: data
          })
          console.log(data)
        })
      })
      .catch(err => {
        console.error(err);
      })

    unsplash.photos.listPhotos(3, 30, "latest")
      .then(response => {
        response.json().then(data => {
          this.setState({
            col3: data
          })
          console.log(data)
        })
      })
      .catch(err => {
        console.error(err);
      })
  }

  handleInput(query) {
    unsplash.search.photos(query.trim(), 1)
      .then(response => {
        response.json().then(data => {
          this.setState({
            search1: data.results
          })
          console.log("search: " + this.state.search1)
        })
      })
      .catch(err => {
        console.error(err);
      })
    unsplash.search.photos(query.trim(), 2)
      .then(response => {
        response.json().then(data => {
          this.setState({
            search2: data.results
          })
          console.log(data)
        })
      })
      .catch(err => {
        console.error(err);
      })
    unsplash.search.photos(query.trim(), 3)
      .then(response => {
        response.json().then(data => {
          this.setState({
            search3: data.results
          })
          console.log(data)
        })
      })
      .catch(err => {
        console.error(err);
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-search">
            <div className="App-search-content">
              <h1>API - Unsplash</h1>
              <input type="text" placeholder="Search a image" onChange={(event) => this.handleInput(event.target.value)} />
              <small>Example: wallpaper, background, dogs, technology</small>
            </div>
          </div>
        </header>
        {Object.keys(this.state.search1) < 1 && Object.keys(this.state.search2) < 1 && Object.keys(this.state.search3) < 1 ?
          <Images col1={this.state.col1} col2={this.state.col2} col3={this.state.col3} />
          :
          <div>
            <SearchImages search1={this.state.search1} search2={this.state.search2} search3={this.state.search3} />
          </div>
        }
      </div>
    );
  }
}

export default App

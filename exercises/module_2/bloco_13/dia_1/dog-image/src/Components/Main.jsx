import React from 'react';
import '../App.css';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      dogImage: undefined,
      loading: true,
      name: '',
      dogName: '',
      namedDog: [],
    };

    this.displayImage = this.displayImage.bind(this);
    this.newDog = this.newDog.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setDogName = this.setDogName.bind(this);
    this.setSavedDog = this.setSavedDog.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('Dog')) {
      this.setSavedDog();
    } else {
      this.fetchApi('https://dog.ceo/api/breeds/image/random');
    }
  }

  componentDidUpdate() {
    const { namedDog } = this.state;
    if (!localStorage.getItem('Dog')) {
      localStorage.setItem('Dog', namedDog);
    }
  }

  handleChange({ target }) {
    this.setState({ name: target.value });
  }

  setDogName() {
    const { name, dogImage } = this.state;
    this.setState({
      dogName: name,
      namedDog: [name, dogImage],
    });
    localStorage.removeItem('Dog');
  }

  setSavedDog() {
    const savedDog = localStorage.getItem('Dog');
    const link = savedDog.substring(savedDog.indexOf(',') + 1);
    const name = savedDog.substring(0, savedDog.indexOf(','));

    this.setState({
      dogImage: link,
      dogName: name,
      loading: false,
    });
    // Usei o código desse site como base para entender o substring:
    // https://www.w3resource.com/javascript-exercises/javascript-string-exercise-22.php
  }

  newDog() {
    const { dogImage } = this.state;
    const url = 'https://dog.ceo/api/breeds/image/random';
    this.setState({ dogName: '', name: '' });
    return !dogImage.includes('terrier') && this.fetchApi(url);
  }

  displayImage() {
    const { dogImage, name, dogName } = this.state;

    return (
      <div className="Dog-container">
        <img src={ dogImage } alt="Imagem de um cachorro" className="Dog-Image" />
        <button
          type="button"
          className="next-btn"
          onClick={ this.newDog }
        >
          New
        </button>
        <div>
          <p>{ dogName }</p>
          <label htmlFor="name">
            Dê um nome ao cachorro:
            <input type="text" id="name" onChange={ this.handleChange } value={ name } />
            <button type="button" onClick={ this.setDogName }>Enviar</button>
          </label>
        </div>
      </div>
    );
  }

  fetchApi(url) {
    this.setState({ loading: true }, async () => {
      const response = await fetch(url);
      const object = await response.json();
      this.setState({
        dogImage: object.message,
        loading: false,
      });
    });
  }

  render() {
    const { loading } = this.state;
    const loadingDisplay = <span className="loading">Loading...</span>;

    return (
      <div className="Main-container">
        {loading ? loadingDisplay : this.displayImage()}
      </div>
    );
  }
}

export default Main;

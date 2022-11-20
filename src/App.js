import {Component} from 'react';
import CardList from './components/card-lis/card-list';
import SearchBox from './components/card-lis/search-box/search-box';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
     monsters:[],
     searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render(){
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Nice cuties</h1>
      <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monster' />
       <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;

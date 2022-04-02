import React, { Component } from 'react'

import './App.css'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

export default class App extends Component {
  
  constructor(){
    super();
    // this.state ={
    //   gods : [
    //     {
    //       name: 'Indra',
    //       id: 'god1'
    //     },
    //     {
    //        name: 'Hanuman',
    //       id: 'god2'
    //     },
    //     {
    //       name:'Ram',
    //       id: 'god3'
    //     }
    //   ]
    // };
    this.state ={
      monsters : [],
      searchFeild:'',
    };
    //this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => console.log(users));
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users=>console.log(users));
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>this.setState({monsters: users}));
  }

  // handleChange(e){
  //   this.setState({searchFeild: e.target.value})
  // }

  handleChange = (e) => {
    this.setState({searchFeild: e.target.value})
  }

  render() {
    //search

    const {monsters,searchFeild} = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    )
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>

        {/* <input type='search' placeholder='search monsters' onChange={e => this.setState({searchFeild: e.target.value})  }/>
        {console.log(this.state)} */}
        {/* <input type='search' placeholder='search monsters' onChange={e => this.setState({searchFeild: e.target.value},()=>console.log(this.state))  }/> */}


        {/* <SearchBox placeholder={'search monsters'} handleChange={e => this.setState({searchFeild: e.target.value})}/> */}
        {/* <SearchBox placeholder={'search monsters'} handleChange={e => this.handleChange}/> */}
        <SearchBox placeholder={'search monsters'} handleChange={this.handleChange}/>


        {/* <CardList monsters={this.state.monsters}/> */}
        <CardList monsters={filteredMonsters}/> 
      </div>
    )
  }
}


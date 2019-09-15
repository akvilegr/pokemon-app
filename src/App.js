import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from  "./Header";
import Pokemon from  "./Pokemon";
import SearchField from "./SearchField";
import WeaknessesFilter from "./WeaknessesFilter";
import HeightFilter from "./HeightFilter";


const POKEMON_LIST_URL = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      displayedPokemons: [],
      query: "",
      weaknessFilter: "",
      heightFilter: ""
    };
  }

  componentDidMount() {
    fetch(POKEMON_LIST_URL).then((response) => {
        response.json().then((data) => {
        console.log("fetched data >>>", data);
      this.setState({
          pokemons: data.pokemon,
          displayedPokemons: data.pokemon
        })
      });
      });
    }

    handleSearch(event) {
      console.log("event", event);
      let query = event.target.value;
      console.log(query)
       
      let displayedPokemons = this.state.pokemons.filter(pokemon => 
        pokemon.name.toLowerCase().includes(query.toLowerCase()) || pokemon.type.join().toLowerCase().includes(query.toLowerCase())
      );

      console.log("displayedPokemons", displayedPokemons);
      this.setState({
        displayedPokemons: displayedPokemons
      })
    }

    filterByWeakness(event) {
      let weaknessFilter = event.target.value;
      this.setState({
        weaknessFilter: weaknessFilter
      });

      if (weaknessFilter === 0) {
        this.setState({
          displayedPokemons: this.state.pokemons
        })
      } else {
        let displayedPokemons = this.state.pokemons.filter(pokemon => 
          pokemon.weaknesses.join().toLowerCase().includes(weaknessFilter.toLowerCase())
        );
  
        this.setState({
          displayedPokemons: displayedPokemons
        });

      }
    }

    filterByHeight(event) {
      
      let heightFilter = event.target.value;
      this.setState({
        heightFilter: heightFilter
      });

      if (heightFilter === 0) {
        this.setState({
          displayedPokemons: this.state.pokemons
        })
      } else {
        let displayedPokemons = this.state.pokemons.filter((pokemon) => {
            return (pokemon.height.split(" ")[0] > heightFilter[0]) && (pokemon.height.split(" ")[0] <= heightFilter[1])
          }
        );
        console.log("displayedPokemons", displayedPokemons);
        this.setState({
          displayedPokemons: displayedPokemons
        });
      }

    }
 
  render() {
    const { displayedPokemons } = this.state;
    return (
      <div>
      <Header/>
      <Grid container  justify="space-evenly" style={{padding: '3rem'}}>
        <SearchField onChange={this.handleSearch.bind(this)} value={this.state.query}/>
        <WeaknessesFilter onChange={this.filterByWeakness.bind(this)} value={this.state.weaknessFilter}/>
        <HeightFilter onChange={this.filterByHeight.bind(this)} value={this.state.heightFilter}/>
      </Grid>
      <Grid container spacing={3} justify="space-evenly" style={{padding: '3rem'}}>
      {displayedPokemons.map(pokemon =>
        <Grid key={pokemon.id} item xs={2}>
          <Pokemon name={pokemon.name} img={pokemon.img} height={pokemon.height} weaknesses={pokemon.weaknesses} type={pokemon.type}/>
        </Grid>
        )}
        <div style={{content: "", flex: 'auto'}} />
      </Grid>
      </div>      
    );
  }
}
export default App;

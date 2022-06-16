import './App.css';
import { Grid } from '@mui/material';
import { BeerCard } from './components/BeerCard';
import { SearchBar } from './components/SearchBar';

// 1.- Fetch data from https://api.punkapi.com/v2/beers/ and display it in ASC order by abv
// 2.- Create a search engine by beer's name

function App() {
  return (
    <Grid container spacing={2} style={{padding: '3pc'}}>
      <Grid item xs={12} >
      <h1>Wiki Beer</h1>
      <SearchBar />
      </Grid>
      <Grid item xs={4} padding={2}>
        <BeerCard />
      </Grid>
    </Grid>
  );
}

export default App;

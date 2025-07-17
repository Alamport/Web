import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  const movieNumber = 1;


  return (
    <>
      {/* {movieNumber === 1 ? (
        <MovieCard movie={{title: "Adin's Bio", release_date: "2025"}}/>
        ) : (
        <MovieCard movie={{title: "Crazy Rich Asians", release_date: "2024"}}/>
        )} */}

      {movieNumber === 1 && <MovieCard movie={{title: "Adin's Film", release_data: "2025"}} />}
      
      {/* <Text display="Displaying!"/>
      <Text display="Hello!"/> */}
    </>

  )
}

function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App

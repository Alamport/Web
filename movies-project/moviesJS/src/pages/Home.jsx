import MovieCard from "../components/MovieCard"

function Home() {
  const movies = [
    {id: 1, title: "The Sixth Sense", release_date: "1999"},
    {id: 2, title: "The Terminal", release_date: "2004"},
    {id: 3, title: "How to Lose a Guy in 10 Days", release_date: "2003"},
    {id: 4, title: "Crazy Rich Asians", release_date: "2018"},
    {id: 5, title: "No Reservations", release_date: "2007"},
    {id: 6, title: "Burnt", release_date: "2015"},
    {id: 7, title: "Ratatouille", release_date: "2007"},
    {id: 8, title: "20th Century Girl", release_date: "2022"},
  ]

  const handleSearch = () => {

  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          placeholder="Search for movies..." 
          className="search-input"></input>
      </form>
      <button type="submit" className="search-button">Search</button>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home
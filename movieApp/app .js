const form = document.querySelector("form");
const input = document.querySelector(".searchBox");
const movie_container = document.querySelector(".movie-container");



const getMovieDetails = async(movie)=>{
let api_key ="1ecb0a55";    
let url =`http://www.omdbapi.com/?apikey=${api_key}&t=${movie}`;
try{
const response =await fetch(url);
const data = await response.json();
console.log(data);
if(!response.ok){ throw error("unable to fetch movie data");}
showMovieDetails(data);

}
catch(error){
    showError("No movie found!!");
}
}

const showMovieDetails = (data)=>{
    movie_container.innerHTML="";
    movie_container.classList.remove("noBackground");
    
    const  {Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster} = data;

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-info");
    movieElement.innerHTML = `<h2>${Title}</h2>
                              <p><strong>Rating: &#11088;</strong>${imdbRating}</p>`;

    const movieGenreElement = document.createElement("div"); 
    movieGenreElement.classList.add("movie-genre");
    
    
    Genre.split(",").forEach(element => {
        const p = document.createElement('p');
        p.innerHTML = element;
        movieGenreElement.appendChild(p);
    });

    movieElement.appendChild(movieGenreElement);
    
    movieElement.innerHTML +=`<p><strong>Released Date: </strong>${Released}</p>
    <p><strong>Duration: </strong>${Runtime}
    <p><strong>Cast: </strong>${Actors}<p><strong>Plot: </strong>${Plot}`;     
    
    

   const posterElement = document.createElement("div");
   posterElement.classList.add("movie-poster");
   posterElement.innerHTML = `<img src= "${Poster}"/>`;


   movie_container.appendChild(posterElement); 
   movie_container.appendChild(movieElement); 
   
}

const showError=(msg)=>{
    movie_container.innerHTML = `<h2>${msg}</h2>`;
    movie_container.classList.add("noBackground");
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const movieName = input.value.trim();
    if(movieName != ""){
        showError("Fetching movie.......");
       getMovieDetails(movieName);
    }
    else{
        showError("Enter Movie name to get movie information");
    }
});
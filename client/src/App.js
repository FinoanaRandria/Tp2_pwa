import { useEffect, useState } from "react";
import axios from "axios";


function App() {
    
     const [data,setData] = useState([])
     const [movieName , setMovieName] = useState('')

     const apiKey = "7733263982f2fbede06debb35a9009ff";
     
     const handleSubmit = (e)=>{
      e.preventDefault(); 
         console.log(movieName);

         const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${apiKey}`
    axios.get(url)
    .then((response)=>{
            console.log(response.data.results);
            setData(response.data.results)
    }).catch((err)=>{
      console.log(err);
    })

     }

    
    
     function truncateOverview(overview, wordLimit){
      const words = overview.split(" ");
  
      if (words.length <= wordLimit) {
        return overview;
      }
  
      const truncatedText = words.slice(0, wordLimit).join(" ");
      return `${truncatedText} ...`;
    }
    

  return (
    <div className="App">
         <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Find your  favorite  movie</h2>
            
            <div >
                   <form className="mt-6 flex max-w-md gap-x-4" onSubmit={handleSubmit}>
                   <input
                id="email-address"
                            
                type="text"
                 onChange={(e)=>setMovieName(e.target.value)}
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Search your movie"
              />
              <button
                 
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Search
              </button>

                   </form>
              
            </div>
          </div>
          
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
        
    <h2 className="text-center mt-8 mb-8">Résultats de la recherche :</h2>

       <div className="flex flex-wrap  flex-row justify-center">

                        
        {data.map((movie) => (
          <div className="m-2" key={movie.id}>
          
                <div className="max-w-sm rounded overflow-hidden shadow-lg h-[1010px]">


                
                  
                  <div>
                  <img className="h-[600px] object-cover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                  </div>
                 
                  <h2 className="m-4 text-lg font-bold"> Title : {movie.title}</h2>
                   
                     <h3 className=" m-4 text-center font-bold">Description: </h3>
                    <p className="px-2" >
                        {truncateOverview(movie.overview,41)}
                    </p>


                </div>
               

          </div>
        ))}
      

       
       </div>

    </div>
  );
}

export default App;

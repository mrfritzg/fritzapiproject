export default function DeleteFavorite({heroID}) {
    // console.log(key)
    function removeCharacter(id) {

        //get the current hero objects from local storage
        let currentStorage = JSON.parse(localStorage.getItem("favs")) || []

        console.log(currentStorage);
       
        let newStorage = currentStorage.filter(prevHeroes => (heroID !== prevHeroes.id))
            //update local storage
        localStorage.setItem("favs", JSON.stringify(newStorage)) 
        // setFavCharacters(newStorage)
  
        }
    
    return (
        <div>
        <button onClick= { () => { removeCharacter(heroID) }}>
    Remove from Favorites </button>
        </div>
    )
}
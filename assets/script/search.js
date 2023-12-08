userRecipe = "pasta"; // TODO uncomment when want to use user recipe request from audio

// add listeners for recipe search
$("#search-btn").click(function () {
    recipeComplexSearch(userRecipe);
});

function recipeComplexSearch(query) {
    // console.log("click search.js running");
    // assign query search to interpreted recipe
    // let query = userRecipe;
    let auth = 'apiKey=3a12b110705e48fab6dd9e0ae25f9a15';
    let number = 'number=10';
    // Recipe search state: use a recipe API https://api-ninjas.com/api/recipe
    //  to search for relevant recipes based on the user's criteria
    // TODO uncoment when want to use recipe 
    const uri = 'https://api.spoonacular.com/recipes/complexSearch?query=' + query + '&' + auth + '&' + number;
    fetch(uri)
        .then(response => { return response.json(); })
        .then(data => { startRecipeResult(data); 
        
        localStorage.setItem('recipeData', JSON.stringify(data))});
}

function recipeInformation(){
    let auth = 'apiKey=3a12b110705e48fab6dd9e0ae25f9a15';
    let recipeID = '631814';

    const url4ID = 'https://api.spoonacular.com/recipes/' + recipeID + '/information';

    fetch(url4ID)
        .then(response => { return response.json(); })
        .then(data => { getRecipeInfo(data); });

}

console.log(recipeInformation);
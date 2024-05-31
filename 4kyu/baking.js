function cakes(recipe, available) {
    return Object.keys(recipe).every(key => available[key]) ? Math.min(...Object.keys(recipe).map(key => Math.floor(available[key] / recipe[key]))) : 0;
  }
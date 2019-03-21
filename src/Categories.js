import data from './data.js';

class Categories {
  constructor() {
    this.categories = [];
  }
  grabCategories() {
    const seperatedCategories = Object.keys(data.categories).map(topic => {
    var rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
    return topic.replace( rex, '$1$4 $2$3$5' ).toUpperCase();
    });
    this.categories.push(seperatedCategories);
    console.log(this.categories);
  }
}


export default Categories;
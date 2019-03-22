import data from './data.js';
import domUpdates from './domUpdates.js';

class Categories {
  constructor(categoriesArr) {
    this.categoriesArr = categoriesArr;
  }
  grabCategories() {
    const seperatedCategories = Object.keys(data.categories).map(topic => {
    var rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
    return topic.replace( rex, '$1$4 $2$3$5' ).toUpperCase();
    });    
    this.categoriesArr = seperatedCategories;
  }
}

export default Categories;
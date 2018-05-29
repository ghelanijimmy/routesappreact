import React from 'react';
import { Link, Route } from 'react-router-dom';

const Cat = ({match,data}) => {
  var category= data.find(p => p.id == match.params.catId);
  var catData;

  if(category)
    catData = <div>
      <h3> {category.name} </h3></div>;
  else
    catData = <h2> Sorry. Category doesnt exist </h2>;

  return (
    <div>
      <div>
         {catData}
      </div>
    </div>
  )
}
export default Cat;

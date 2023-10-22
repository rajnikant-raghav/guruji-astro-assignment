import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
const Details = () => {
    const navigate = useNavigate();
    const details = useSelector(state=>state.details.value);
    if(!Object.keys(details).length > 0){
      navigate('/')
    }
  return (
    <>
    {Object.keys(details).length > 0 && (
    <div className='details_container'>
      <img src={details.recipe.image} alt="" />
      <div className='details_right'>
        <h3>{details.recipe.label}</h3>
        <span>Provided By {details.recipe.source}</span><br /><br />
        <a className='btn1' href={details.recipe.shareAs} target='blank'>Publisher</a>
        <a className='btn2' href={details.recipe.url} target='blank'>Recipe URL</a>
        <br /><br />
        <br />
        <h2>Ingredients</h2>
        <br />
        <div className='Ingredients'>
            {details.recipe.ingredientLines.map((val)=>(
                <div>{val}</div>
            ))}
        </div>
      </div>
    
    </div>
    )}
    </>
  )
}

export default Details

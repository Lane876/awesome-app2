import React from 'react';
import { Link } from 'react-router-dom';
import {VscGithub} from 'react-icons/vsc'

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' target="_blank" href={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
        <a href={props.github} target="_blank" style={{position:"absolute", top:"0", right:"0", padding:"0.5rem", color:" white", backgroundColor:"rgba(0,0,0,.5)", borderRadius:"8px"}}>
            <VscGithub size='25px'/>
        </a>
      </li>
    </>
  );
}

export default CardItem;
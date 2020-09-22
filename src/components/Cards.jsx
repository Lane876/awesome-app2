import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out My Work!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/instagram.png'
              text="Instagram Clone"
              label='React.js, Apollo, GraphQL, Hasura, Material-UI, firebase.'
              path='https://instalane.netlify.app/'
              github='https://github.com/Lane876/instagram-clone'
            />
            <CardItem
              src='images/thundershop.png'
              text='Tech e-commerce app where users can buy different products. Admin has access to CRUD options. Built with '
              label='React.js, redux, firebase, Stripe.'
              path='https://romantic-tesla-d09dc6.netlify.app/'
              github='https://github.com/Lane876/react-firebase-ecommerce'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/moviedborg.png'
              text='Browse movies and add them to your list of favorite movies or movies to watch later. API from https://www.themoviedb.org/.'
              label='React.js, Material-UI, firebase and redux'
              path='https://moviedborg.netlify.app/'
              github='https://github.com/Lane876/moviedb-firebase'
            />
            <CardItem
              src='images/ideasaver.jpg'
              text='App for saving your ideas. It has sign in with google functionality so your ideas will be private.'
              label='React.js, Material-UI, and real-time firebase database'
              path='https://ideasaver.netlify.app/'
              github= "https://github.com/Lane876/firebase-idea-app"

            />
            <CardItem
              src='images/musicapp.png'
              text='Music app where you can add songs from youtube or soundcloud and create your music list.'
              label='React.js, GraphQL, Context, Material-UI, React-Player, Apollo, firebase'
              path='https://music-share-app.web.app/'
              github="https://github.com/Lane876/music-share"
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
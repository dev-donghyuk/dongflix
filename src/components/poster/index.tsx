import React from 'react';
import { Wrapper, Image } from './styles';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

type PosterType = {
   id: number;
   imageUrl: string;
   title: string;
   rating: number;
   year: string;
   type: boolean;
};

const Poster: React.FC<PosterType> = ({ type, rating, id, imageUrl, title, year }) => {
   let star_rating = rating * 10;
   return (
      <Link to={type ? `/movie/${id}` : `/tv/${id}`}>
         <Wrapper>
            <Grid className="image_Wrap">
               <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w200${imageUrl}` : '/dongflix/images/notVideo.jpg'} className="image">
                  <Grid className="text_box">
                     <h2 className="title">{title.length > 15 ? `${title.substring(0, 15)}...` : title}</h2>
                     <p className="year">{year}</p>
                  </Grid>
                  <span className="rating">
                     <span className="star">
                        <span className="star_cover" style={{ width: `${star_rating}%` }} />
                     </span>
                  </span>
               </Image>
            </Grid>
         </Wrapper>
      </Link>
   );
};

export default Poster;

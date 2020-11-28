import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Helmet from 'react-helmet';
import { movieApi } from 'api';

import Wrapper from './styles';
import Section from 'components/section';
import Poster from 'components/poster';

type DataType = {
   nowPlaying: object[];
   upComing: object[];
   popular: object[];
   error: string;
};

const Movie: React.FC = () => {
   const [data, setData] = useState<object>({});
   const MovieFunction = async () => {
      try {
         const nowPlaying: DataType = await movieApi.nowPlaying();
         const upComing: DataType = await movieApi.upComing();
         const popular: DataType = await movieApi.popular();
         setData({
            ...data,
            nowPlaying: nowPlaying,
            upComing: upComing,
            popular: popular,
         });
         console.log({
            ...data,
            nowPlaying: nowPlaying,
            upComing: upComing,
            popular: popular,
         });
      } catch (e) {
         setData({ ...data, error: "Can't find Tvs information." });
      }
   };

   useEffect(() => {
      console.log(123);
      MovieFunction();
   }, []);
   return (
      <Wrapper>
         <Helmet>
            <title>Movies | Dongflix</title>
         </Helmet>
         <Grid className="box_wrap">
            <Section title="Now Playing">
               {data.nowPlaying.map((x, index) => {
                  return (
                     <Grid item className="Poster_Wrap" key={x.id}>
                        <Poster
                           id={x.id}
                           title={x.original_title}
                           imageUrl={x.poster_path}
                           rating={x.vote_average}
                           year={x.release_date.substring(0, 4)}
                           type={true}
                        />
                     </Grid>
                  );
               })}
            </Section>
         </Grid>
      </Wrapper>
   );
};

export default Movie;

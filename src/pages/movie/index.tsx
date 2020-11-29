/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Helmet from 'react-helmet';
import { movieApi } from 'api';

import Section from 'components/section';
import Poster from 'components/poster';
import PosterWrap from 'components/poster-wrap';
import Message from 'components/message';

type DataType = {
   nowPlaying: any[];
   upComing: any[];
   popular: any[];
   error: string;
};

const Movie: React.FC = () => {
   const [data, setData] = useState<DataType>({
      nowPlaying: [],
      upComing: [],
      popular: [],
      error: '',
   });
   const MovieFunction = async () => {
      try {
         const nowPlaying = await movieApi.nowPlaying();
         const upComing = await movieApi.upComing();
         const popular = await movieApi.popular();
         setData({
            ...data,
            nowPlaying: nowPlaying.data.results,
            upComing: upComing.data.results,
            popular: popular.data.results,
         });
      } catch (e) {
         console.log({ e });
         setData({ ...data, error: "Can't find Tvs information." });
      }
   };

   useEffect(() => {
      MovieFunction();
   }, []);
   return (
      <>
         <Helmet>
            <title>Movies | Dongflix</title>
         </Helmet>
         <PosterWrap>
            {/*  */}
            {data.nowPlaying && data.nowPlaying.length > 0 && (
               <Section title="Now Playing">
                  {data.nowPlaying.map((x, index) => {
                     return (
                        <Grid item className="poster" key={x.id}>
                           <Poster
                              type="movie"
                              rating={x.vote_average}
                              id={x.id}
                              imageUrl={x.poster_path}
                              title={x.original_title}
                              year={x.release_date.substring(0, 4)}
                           />
                        </Grid>
                     );
                  })}
               </Section>
            )}
            {/*  */}
            {data.upComing && data.upComing.length > 0 && (
               <Section title="UpComing Movies">
                  {data.upComing.map((x, index) => {
                     return (
                        <Grid item className="poster" key={x.id}>
                           <Poster
                              type="movie"
                              rating={x.vote_average}
                              id={x.id}
                              imageUrl={x.poster_path}
                              title={x.original_title}
                              year={x.release_date.substring(0, 4)}
                           />
                        </Grid>
                     );
                  })}
               </Section>
            )}
            {/*  */}
            {data.popular && data.popular.length > 0 && (
               <Section title="Popular Movies">
                  {data.popular.map((x, index) => {
                     return (
                        <Grid item className="poster" key={x.id}>
                           <Poster
                              type="movie"
                              rating={x.vote_average}
                              id={x.id}
                              imageUrl={x.poster_path}
                              title={x.original_title}
                              year={x.release_date.substring(0, 4)}
                           />
                        </Grid>
                     );
                  })}
               </Section>
            )}
            {/*  */}
            {data.error && <Message text={data.error} />}
         </PosterWrap>
      </>
   );
};

export default Movie;

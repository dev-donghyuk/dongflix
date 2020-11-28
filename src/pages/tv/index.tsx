import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Helmet from 'react-helmet';
import { tvApi } from 'api';

import Section from 'components/section';
import Poster from 'components/poster';
import PosterWrap from 'components/poster-wrap';
import Message from 'components/message';

type DataType = {
   topRated: any[];
   popular: any[];
   airingToday: any[];
   error: string;
};

const Tv: React.FC = () => {
   const [data, setData] = useState<DataType>({
      topRated: [],
      popular: [],
      airingToday: [],
      error: '',
   });
   const MovieFunction = async () => {
      try {
         const topRated = await tvApi.topRated();
         const popular = await tvApi.popular();
         const airingToday = await tvApi.airingToday();
         setData({
            ...data,
            topRated: topRated.data.results,
            popular: popular.data.results,
            airingToday: airingToday.data.results,
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
            {data.topRated && data.topRated.length > 0 && (
               <Section title="Top Rated">
                  {data.topRated.map((x, index) => {
                     return (
                        <Grid item className="poster" key={x.id}>
                           <Poster
                              id={x.id}
                              title={x.original_name}
                              imageUrl={x.poster_path}
                              rating={x.vote_average}
                              year={x.first_air_date.substring(0, 4)}
                              type="tv"
                           />
                        </Grid>
                     );
                  })}
               </Section>
            )}
            {/*  */}
            {data.popular && data.popular.length > 0 && (
               <Section title="Popular TV">
                  {data.popular.map((x, index) => {
                     return (
                        <Grid item className="poster" key={x.id}>
                           <Poster
                              id={x.id}
                              title={x.original_name}
                              imageUrl={x.poster_path}
                              rating={x.vote_average}
                              year={x.first_air_date.substring(0, 4)}
                              type="tv"
                           />
                        </Grid>
                     );
                  })}
               </Section>
            )}
            {/*  */}
            {data.airingToday && data.airingToday.length > 0 && (
               <Section title="Airing Today TV">
                  {data.airingToday.map((x, index) => {
                     return (
                        <Grid item className="poster" key={x.id}>
                           <Poster
                              id={x.id}
                              title={x.original_name}
                              imageUrl={x.poster_path}
                              rating={x.vote_average}
                              year={x.first_air_date.substring(0, 4)}
                              type="tv"
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

export default Tv;

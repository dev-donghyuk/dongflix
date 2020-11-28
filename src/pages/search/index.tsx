import React, { useState, useRef } from 'react';
import Helmet from 'react-helmet';
import { Grid } from '@material-ui/core';
import { movieApi, tvApi } from 'api';

import Wrapper from './styles';
import Section from 'components/section';
import Poster from 'components/poster';
import PosterWrap from 'components/poster-wrap';
import Message from 'components/message';

type DataType = {
   movieResult: any[] | null;
   tvResult: any[] | null;
   searchTerm: string;
   error: string;
};

const Search: React.FC = () => {
   const [data, setData] = useState<DataType>({
      movieResult: null,
      tvResult: null,
      searchTerm: '',
      error: '',
   });

   const searchTermRef = useRef<HTMLInputElement>(null);

   const searchFunction = async () => {
      let searchTerm: string | undefined = searchTermRef.current?.value;
      try {
         if (searchTerm) {
            let movieResults = await movieApi.search(encodeURIComponent(searchTerm));
            let tvResults = await tvApi.search(encodeURIComponent(searchTerm));
            setData({
               ...data,
               movieResult: [...movieResults.data.results],
               tvResult: [...tvResults.data.results],
               searchTerm: searchTerm,
            });
         } else if (searchTerm === '') {
            setData({
               movieResult: [],
               tvResult: [],
               searchTerm: '',
               error: '',
            });
         }
      } catch (e) {
         setData({ ...data, error: "Can't find results." });
      }
   };

   return (
      <Wrapper>
         <Helmet>
            <title>Search | Dongflix</title>
         </Helmet>
         {/*  */}
         <Grid className="search_form">
            <input
               type="text"
               ref={searchTermRef}
               placeholder="Search Movies or TV Shows..."
               onKeyUp={(e) => e.key === 'Enter' && searchFunction()}
            />
         </Grid>
         {/*  */}
         <PosterWrap>
            {data.movieResult && data.movieResult.length > 0 && (
               <Section title="Movie Results">
                  {data.movieResult.map((x, index) => {
                     return (
                        <Grid item className="poster" key={x.id}>
                           <Poster
                              id={x.id}
                              title={x.original_title}
                              imageUrl={x.poster_path}
                              rating={x.vote_average}
                              year={x && x.release_date && x.release_date.substring(0, 4) && x.release_date.substring(0, 4)}
                              type="movie"
                           />
                        </Grid>
                     );
                  })}
               </Section>
            )}
            {/*  */}
            {data.tvResult && data.tvResult.length > 0 && (
               <Section title="TV Results">
                  {data.tvResult.map((x, index) => {
                     return (
                        <Grid item className="poster" key={x.id}>
                           <Poster
                              id={x.id}
                              title={x.original_name}
                              imageUrl={x.poster_path}
                              rating={x.vote_average}
                              year={
                                 x && x.first_air_date && x.first_air_date.substring(0, 4) ? x.first_air_date.substring(0, 4) : 'Not Found'
                              }
                              type="tv"
                           />
                        </Grid>
                     );
                  })}
               </Section>
            )}
            {/*  */}
            {data.movieResult && data.tvResult && data.movieResult.length === 0 && data.tvResult.length === 0 && data.searchTerm !== '' && (
               <Message text={`Nothing found : ${data.searchTerm}`} />
            )}
            {/*  */}
         </PosterWrap>
      </Wrapper>
   );
};

export default Search;

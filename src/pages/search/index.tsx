/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
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

   const [currentSearchTerm, setCurrentSearchTerm] = useState<string>('');

   const searchFunction = async (term: string) => {
      let searchTerm: string | undefined = '';
      // 새로고침 시, 전에 검색한 기록이 있으면 반영
      if (term !== '') {
         searchTerm = term;
         // 화면에 표시하는 데이터는 디코딩 문자열
         setCurrentSearchTerm(decodeURIComponent(JSON.parse(searchTerm)));
      } else {
         // 통신하는 데이터는 인코딩 문자열
         searchTerm = encodeURIComponent(currentSearchTerm);
         // 로컬 저장소에 json형태로 set
         localStorage.setItem('searchTerm', JSON.stringify(searchTerm));
      }
      try {
         if (searchTerm) {
            let movieResults = await movieApi.search(searchTerm);
            let tvResults = await tvApi.search(searchTerm);
            setData({
               ...data,
               movieResult: [...movieResults.data.results],
               tvResult: [...tvResults.data.results],
               searchTerm: searchTerm,
               error: `Nothing found : "${decodeURIComponent(searchTerm)}"`,
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

   useEffect(() => {
      let currentSearchTerm = localStorage.getItem('searchTerm');
      if (currentSearchTerm) {
         searchFunction(currentSearchTerm);
      }
   }, []);

   return (
      <Wrapper>
         <Helmet>
            <title>Search | Dongflix</title>
         </Helmet>
         {/*  */}
         <Grid className="search_form">
            <input
               type="text"
               value={currentSearchTerm}
               placeholder="Search Movies or TV Shows..."
               onChange={(e) => {
                  setCurrentSearchTerm(e.target.value);
               }}
               onKeyUp={(e) => e.key === 'Enter' && searchFunction('')}
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
               <Message text={data.error} />
            )}
            {/*  */}
         </PosterWrap>
      </Wrapper>
   );
};

export default Search;

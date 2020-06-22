import React from "react";
import { Wrapper, Image } from "./styles";
import { Grid, Link } from "@material-ui/core";

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Wrapper>
        <Grid className="Image_Wrap">
          <Image bgUrl={imageUrl} className="Image">
            <Grid className="Text_Box">
              <h2 className="Title">
                {title.length > 15 ? `${title.substring(0, 15)}...` : title}
              </h2>
              <p className="Year">{year}</p>
            </Grid>
            <span className="Rating">
              <span role="img" aria-label="rating">
                ⭐️
              </span>
              {rating}/10
            </span>
          </Image>
        </Grid>
      </Wrapper>
    </Link>
  );
};

export default Poster;

import React from "react";
import { Wrapper, Image } from "./styles";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => {
  var star_rating = rating * 10;
  return (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Wrapper>
        <Grid className="Image_Wrap">
          <Image
            bgUrl={
              imageUrl
                ? `https://image.tmdb.org/t/p/w200${imageUrl}`
                : "/dongflix/images/notVideo.jpg"
            }
            className="Image"
          >
            <Grid className="Text_Box">
              <h2 className="Title">
                {title.length > 15 ? `${title.substring(0, 15)}...` : title}
              </h2>
              <p className="Year">{year}</p>
            </Grid>
            <span className="Rating">
              <span className="Star">
                <span
                  className="Star_Cover"
                  style={{ width: `${star_rating}%` }}
                ></span>
              </span>
            </span>
          </Image>
        </Grid>
      </Wrapper>
    </Link>
  );
};

export default Poster;

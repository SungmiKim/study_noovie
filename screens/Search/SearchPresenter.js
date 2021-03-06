import React from "react";
import styled from "styled-components/native";
import { movieApi } from "../../api";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import Input from "../../components/Search/Input";
import Vertical from "../../components/Vertical";
import ScreenContainer from "../../components/ScrollContainer";

const Container = styled.ScrollView`
  background-color: black;
`;

export default ({ movies, shows, onChange, onSubmit, keyword }) => (
  <ScreenContainer
    refreshFn={onSubmit}
    loading={false}
    contentContainerStyle={{
      paddingTop: 10,
    }}
  >
    <Input
      placeholder={"Write a keyword"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies.length !== 0 && (
      <HorizontalSlider title={"Movie Results"}>
        {movies.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            title={movie.title}
            votes={movie.vote_average}
            poster={movie.poster_path || movie.backdrop_path}
          />
        ))}
      </HorizontalSlider>
    )}
    {shows.length !== 0 && (
      <HorizontalSlider title={"TV Results"}>
        {shows.map((show) => (
          <Vertical
            id={show.id}
            key={show.id}
            poster={show.poster_path || show.backdrop_path}
            title={show.name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
    )}
  </ScreenContainer>
);

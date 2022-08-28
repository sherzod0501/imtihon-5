import { Routes, Route } from "react-router-dom";
import {
  Films,
  Home,
  Popular,
  TopMovies,
  UpMovies,
  TvShow,
  Movie,
  AddBook,
  AddAuthor,
  AddSetting,
  Book,
  BookSingle,
} from "./Pages";

import { Temuriylar, Jadidlar, Sovet, Mustaqilik } from "./SmallPage";

import { Oqilganlar, OqishniXox, Oqilmoqda, Adiblar } from "./BookPage";

import { MyAcc, MySetting, Security } from "./Setting";
import { useState } from "react";

export const Private = () => {
  return (
    <div>
      <Films />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Temuriylar />} />
          <Route path="jadid" element={<Jadidlar />} />
          <Route path="sovet" element={<Sovet />} />
          <Route path="mustaqilik" element={<Mustaqilik />} />
        </Route>
        <Route path="/movies" element={<Popular />} />
        <Route path="/top" element={<TopMovies />} />
        <Route path="/up" element={<UpMovies />} />
        <Route path="/tvshow" element={<TvShow />} />
        <Route path="/single/:id" element={<Movie />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/addauthor" element={<AddAuthor />} />
        <Route path="/addsetting" element={<AddSetting />}>
          <Route path="myacc" element={<MyAcc />} />
          <Route path="security" element={<Security />} />
          <Route path="mysetting" element={<MySetting />} />
        </Route>
        <Route path="/books" element={<Book />}>
          <Route index element={<Oqilganlar />} />
          <Route path="oqishnixox" element={<OqishniXox />} />
          <Route path="oqishmoqda" element={<Oqilmoqda />} />
          <Route path="adiblar" element={<Adiblar />} />
        </Route>
        <Route path="/booksingle/:id" element={<BookSingle />} />
      </Routes>
    </div>
  );
};

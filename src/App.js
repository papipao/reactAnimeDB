import React, { useState, useEffect } from "react";
import "./app.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const res = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`);
    const data = await res.json();
    // console.log(data.top);
    setTopAnime(data.top.slice(0, 5));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    fetchAnime(search);
    setSearch("");
  };

  const fetchAnime = async (query) => {
    const res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`);
    const data = await res.json();
    // console.log(data);
    setAnimeList(data.results);
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <div className="">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent handleSearch={handleSearch} search={search} animeList={animeList} setSearch={setSearch} />
      </div>
    </div>
  );
}

export default App;

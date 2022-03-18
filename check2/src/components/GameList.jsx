import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import Game from "./Game.jsx"

const GameList = () => {
    const [gameList, setGameList] = useState(["id"]);
    const [filter, setFilter] = useState(true);

    useEffect(() => {
        axios
        .get(`https://apis.wilders.dev/wild-games/games/`)
        .then((res) =>{setGameList(res.data);})
        .catch((err) =>
          console.log(err)
          );
    },[]);
    console.log(gameList);

    return (
        <div className='liste'>
            <p>Liste : {gameList.name}</p>
        </div>
    );
};

export default GameList;
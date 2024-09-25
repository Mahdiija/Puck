import { Suspense } from "react";
import PokemonCards from "./getfetch";


const Cards = () => {
  return (
    <div>
      <Suspense fallback={<div>loading..</div>}>
         <PokemonCards />
      </Suspense>
      
    </div>
  );
};

export default Cards;
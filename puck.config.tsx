import { DropZone, type Config } from "@measured/puck";
import Cards from "./components/Cards";
    


type Props = {
  
  PokemonCards: { pokemon: any };     
};


export const config: Config<Props> = {
  components: {
    
    PokemonCards: {
      render: Cards, 
    },
   
  },
};

export default config;
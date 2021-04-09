export enum HeroUniverse{
    DC='dc',
    MARVEL='marvel'

}
export interface Hero{

  id:string;
  name: string;
  imageUrl: string;
  universe: HeroUniverse;
  description: string; 
}

export interface HeroGetResponse{

  cursor:string|undefined;
  heroes: Hero[];
}


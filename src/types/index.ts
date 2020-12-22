export type Artist = {
  title: string;
  appleMusicLink: string;
}

export type Category = {
  id: string;
  appleMusicLink: string;
  title: string;
}

export type Album = {
  id: string;
  loved: boolean;
  title: string;
  artworkSource: string;
  price: {
    amount: number,
    currency: string,
  };
  rights: string;
  appleMusicLink: string;
  releaseDate: Date;
  artist: Artist;
  category: Category;
}
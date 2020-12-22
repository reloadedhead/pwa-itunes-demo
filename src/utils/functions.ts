import { Album } from "../types";

export const modelAlbumsResponse = (response: unknown): Album[] => {
  return ((response as never)['feed']['entry'] as never[]).map(item => ({
    id: item['id']['attributes']['im:id'],
    title: item['title']['label'],
    artworkSource: item['im:image']?.[(item['im:image'] as never[]).length - 1]?.['label'],
    appleMusicLink: item['link']['attributes']['href'],
    rights: item['rights']['label'],
    releaseDate: item['im:releaseDate']['label'],
    artist: {
      title: item['im:artist']['label'],
      appleMusicLink: item['im:artist']?.['attributes']?.['href']
    },
    category: {
      id: item['category']['attributes']['im:id'],
      appleMusicLink: item['category']['attributes']['scheme'],
      title: item['category']['attributes']['term']
    },
    price: {
      amount: parseFloat(item['im:price']['attributes']['amount']),
      currency: item['im:price']['attributes']['currency'],
    }
  }));
};
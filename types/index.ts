export type APIProduct = {
    id: number,
    slug: string,
    name: string,
    image: {desktop: string},
    category: string,
    price: number,
    description: string,
    features: string,
    gallery: {
      first: {desktop: string},
      second: {desktop: string},
      third: {desktop: string}
    },
    others: [
      {
        slug: string,
        name: string,
        image: {desktop: string}
      },
      {
        slug: string,
        name: string,
        image: {desktop: string}
      },
      {
        slug: string,
        name: string,
        image: {desktop: string}
      }
    ]
  };

export interface ProductType extends APIProduct {
  count: number;
}

export type RecommendationType = {
      slug: string;
      name: string;
      image: {
        desktop: string;
      };
    }
  
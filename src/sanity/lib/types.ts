// sanity.types.ts
export type PostsQueryResult = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  author: {
    name: string;
    image?: {
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
  };
  mainImage: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  body: {
    _key: string;
    _type: string;
    children: {
      _key: string;
      _type: string;
      marks: string[];
      text: string;
    }[];
    markDefs: any[];
    style: string;
  }[];
}[];


export type PostQueryResult = {
  title: string | null;
  body: (
    | {
      _type: 'block';
      children: {
        _key: string | null;
        _type: string | null;
        marks: string[] | null;
        text: string | null;
      }[];
    }
    | {
      _type: 'image';
      asset: {
        _ref: string | null;
        _type: string | null;
      };
      alt: string | null;
    }
  )[] | null;
  mainImage: {
    _type: string | null;
    asset: {
      _ref: string | null;
      _type: string | null;
    } | null;
  } | null;
};

export interface SanityBlock {
  _key: string;
  _type: string;
  children: SanityBlockChild[];
  markDef?: any;
  style?: string;
}

export interface SanityBlockChild {
  _key: string;
  _type: string;
  marks: string[];
  text: string;
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
  caption?: string;
  crop?: {
    _type: 'sanity.imageCrop';
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    _type: 'sanity.imageHotspot';
    height: number;
    width: number;
    x: number;
    y: number;
  };
}

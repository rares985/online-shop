import { PRODUCTS_BEGIN, PRODUCTS_FAILURE, PRODUCTS_SUCCESS } from '../constants/action-types';
/* eslint-disable max-len */
const initialState = {
  products: [
    {
      id: 'b0e44a58-b6e1-4492-a5ca-1050aebc9b7c',
      title: 'Stephen South',
      description:
        'After Johnson demanded to be traded, Lakers owner Jerry Buss fired Westhead and replaced him with Riley.',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '8f06ee8c-4e88-493f-a2ee-830f43324694',
      title: 'Allan Davis',
      description: '3 Squadron.',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '0343a660-0260-435c-800a-1636a5dbd404',
      title: 'Timos Perlegas',
      description:
        'The fruits of choice in the south were lemons, citrons, bitter oranges (the sweet type was not introduced until several hundred years later), pomegranates, quinces, and, of course, grapes.',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 'ad6fe309-daf3-4cc3-b952-f571e4dbcd8c',
      title: 'Ricardo Uceda',
      description:
        'In practice, the vast majority of Groups is organised by primary schools and secondary schools in the category of Sponsored Scout Group.',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '28790de8-c39b-4f83-ba27-1c18bb8e8ff3',
      title: 'Susumu Kurobe',
      description:
        'Commonwealth Commissioner Sir Marc Noble suggested that the Hong Kong branch become a full member of the WOSM, and they were accepted as its 111th full member on on 26 April 1977 with its name formally changed to The Scout Association of Hong Kong.',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 'a094ed20-2be5-41ab-8e62-90136d3d70ec',
      title: 'Elana Binysh',
      description:
        'One of the most common constituents of a medieval meal, either as part of a banquet or as a small snack, were sops, pieces of bread with which a liquid like wine, soup, broth, or sauce could be soaked up and eaten.',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '63e985ca-ca19-44c8-b017-89c736209e82',
      title: 'Bert Trautmann',
      description: 'He also had influence in Surrey, Essex, and Kent.',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 'faae1710-9702-48c6-9393-ee22f731ef76',
      title: 'Leconte de Lisle',
      description:
        "The Chronicle's anonymous scribe appears to have incorporated much information recorded in earlier periods.",
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '3a135ebc-ff8c-4193-9cd9-ace884e757d9',
      title: 'Rex Brown',
      description: 'Both sexes have blue-grey bills and grey legs and feet.',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '9e6eaaa5-8cba-4325-b35f-7b0583ff22df',
      title: 'Assunta De Rossi',
      description:
        "Although Johnson denied responsibility for Westhead's firing, he was booed across the league, even by Lakers' fans.",
      image: 'https://picsum.photos/200/300',
    },
  ],
  loading: false,
  error: null,
};
/* eslint-enable max-len */

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_BEGIN:
      return state;
    case PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    default:
      return state;
  }
};

export default catalogReducer;

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../actions/newsAction'
import { CardVue } from '../CardVue/CardVue'
import { WrapperForMain } from './Main.style'
import { Pagination } from '../Pagination/Pagination'

type elemsType = {
  isLoading: boolean;
  cards: [];
}

type StateType = {
  cards: elemsType;
}

type MainProps = {
  cards: Cardtype[];
  isLoading: boolean;
  getNews: Function;
}

export interface Cardtype {
  source: Object;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}


const Main = (props: MainProps) => {
  const { cards, isLoading, getNews } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(4);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currrentNews = cards ? cards.slice(indexOfFirstNews, indexOfLastNews) : cards;

  const paginate = (pageNumber : number) => setCurrentPage(pageNumber);


  useEffect(() => {
    getNews();
  }, [getNews]
  );

  return (
    <div>
      <WrapperForMain>
        { isLoading ?
          (<div>Loading ...</div>)
          :

          currrentNews.map((card: Cardtype) => (
            <CardVue
              key={card.publishedAt}
              cardVue={card}
            />
          ))}
      </WrapperForMain>

      { cards ?
        <Pagination 
          newsPerPage={newsPerPage} 
          totalNews={cards.length} 
          paginate={paginate} />
        :
        <></>
      }
    </div>
  );
}

export default connect(
  (state: StateType) => ({
    cards: state.cards.cards,
    isLoading: state.cards.isLoading
  }),

  {
    getNews: () => getNews()
  }
)(Main)


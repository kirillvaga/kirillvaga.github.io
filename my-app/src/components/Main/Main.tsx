import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../actions/newsAction'
import { CardVue } from '../CardVue/CardVue'
import { WrapperForMain, MainSection } from './Main.style'
import { PaginationForCard } from '../Pagination/Pagination'
import { Select } from '../Select/Select'

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
  const [newsPerPage, setPerPage] = useState(3);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currrentNews = cards ? cards.slice(indexOfFirstNews, indexOfLastNews) : cards;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const selectChangeHandler = (event: any) => {
    setPerPage(+event.target.value);
    setCurrentPage(+1);
  }

  useEffect(() => {
    getNews();
  }, [getNews]
  );

  return (
    <MainSection>
      <WrapperForMain>
        {isLoading ?
          (<div>Loading ...</div>)
          :

          currrentNews.map((card: Cardtype) => (
            <CardVue
              key={card.publishedAt}
              cardVue={card}
            />
          ))}
      </WrapperForMain>
      <div>
        {!isLoading ?
          <PaginationForCard
            newsPerPage={newsPerPage}
            totalNews={cards.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          :
          <></>
        }
        <Select
          label="News per page"
          value={newsPerPage}
          onChange={selectChangeHandler}
          options={[
            { text: 3, value: 3 },
            { text: 4, value: 4 },
            { text: 5, value: 5 }
          ]}
        />
      </div>
    </MainSection>
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

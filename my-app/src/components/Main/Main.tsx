import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../actions/newsAction'
import { CardVue } from '../CardVue/CardVue'
import { WrapperForMain } from './Main.style'

type elemsType = {
  isLoading: boolean;
  cards: [];
}

type StateType = {
  cards: elemsType;
}

type MainProps = {
  cards: object[];
  isLoading: boolean;
  getNews: Function;
}

const Main = (props: MainProps) => {
  const { cards, isLoading, getNews } = props;

  useEffect(() => {
    getNews();
  }, []);

  return (
    <WrapperForMain>
      {isLoading ?
        (<div>Loading ...</div>)
        :
        cards.map((card: any) => (
          <CardVue
            key={card.publishedAt}
            cardVue={card}
          />
        ))}
    </WrapperForMain>
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


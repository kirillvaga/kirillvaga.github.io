import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../actions/newsAction'
import { CardVue } from '../CardVue/CardVue'
import { WrapperForMain } from './Main.style'


type elemsType = {
  isLoading: boolean;
  cards: [];
}

type stateType = {
  cards: elemsType;
}

type MainProps = {
  cards: object[];
  isLoading: boolean;
  getNews: Function;
}

function Main(props: MainProps) {
  const { cards, isLoading } = props;

  useEffect(() => {
    props.getNews();
  }, []);

  return (
    <WrapperForMain>
      {isLoading ?
        (<div>Loading ...</div>)
        :
        cards.map((card: object, item: number) => (
          <CardVue
            key={item}
            cardVue={card}
          />
        ))}
    </WrapperForMain>
  );
}

export default connect(
  (state: stateType) => ({
    cards: state.cards.cards,
    isLoading: state.cards.isLoading
  }),

  {
    getNews: () => getNews()
  }
)(Main)


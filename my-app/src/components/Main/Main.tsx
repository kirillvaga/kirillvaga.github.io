import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNews } from '../../actions/newsAction'
import CardVue from '../CardVue/CardVue'

type MainProps = {
  cards: any,
  isLoading: boolean,
  getNews: any
}

function Main (props: MainProps) {
    const { cards, isLoading } = props;

    useEffect(() => {
       props.getNews();
    }, []);
    return (
      <div>
        {isLoading ?
          (<div>Loading ...</div>)
          :
          cards.map((card: any, item: number) => (
            <CardVue 
              key = {item}
              cardVue = {card}
            />
          ))}
      </div>
    );
  }

export default connect(
  (state: any) => ({
    cards: state.cards.cards,
    isLoading: state.cards.isLoading
  }), 
  (dispatch: any) => ({
    getNews: () => dispatch(getNews())
  })
)(Main)


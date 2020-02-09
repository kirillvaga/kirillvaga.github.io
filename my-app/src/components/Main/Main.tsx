import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNews } from '../../actions/newsAction'
import CardVue from '../CardVue/CardVue'

interface MainProps {
  cards: any,
  isLoading: boolean,
  getNews: any
}

class Main extends Component<MainProps>{

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    const { cards, isLoading } = this.props;
    // console.log(cards[0]);
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
}

const mapStateToProps = (state: any) => ({
  cards: state.cards.cards,
  isLoading: state.cards.isLoading
})

const mapDispatchToProps = (dispatch: any) => ({
  getNews: bindActionCreators(getNews, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)


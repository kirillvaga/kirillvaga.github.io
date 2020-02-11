import React from 'react';
import {CardWithStyle} from './CardVue.style'
import '../App/App.css'
import { WrapperForCard } from './CardVue.style'


type CardVue = {
  key: number;
  cardVue: any;
}


export const CardVue = (props: CardVue) => {
  const { title, author, content, publishedAt } = props.cardVue;

  return (<WrapperForCard><CardWithStyle title={title} bordered><p>{author}</p><p>{content}</p><p>{publishedAt}</p></CardWithStyle></WrapperForCard>);
}
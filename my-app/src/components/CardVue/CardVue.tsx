import React from 'react';
import { CardWithStyle } from './CardVue.style'
import '../App/App.css'
import { WrapperForCard } from './CardVue.style'
import { Cardtype } from '../Main/Main'

interface CardVueType {
  cardVue : Cardtype;
} 

export const CardVue = ({ cardVue: { title, author, content, publishedAt }}:CardVueType) => {
  return (<WrapperForCard><CardWithStyle title={title} bordered><p>{author}</p><p>{content}</p><p>{publishedAt}</p></CardWithStyle></WrapperForCard>);
}

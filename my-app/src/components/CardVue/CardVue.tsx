import React from 'react';
import { CardWithStyle } from './CardVue.style'
import '../App/App.css'
import { WrapperForCard } from './CardVue.style'

interface CardVueType {
  cardVue : CardElementsType;
} 

interface CardElementsType {
  title: string;
  author: string;
  content: string;
  publishedAt: string;
}

export const CardVue = ({ cardVue: { title, author, content, publishedAt }}:CardVueType) => {
  return (<WrapperForCard><CardWithStyle title={title} bordered><p>{author}</p><p>{content}</p><p>{publishedAt}</p></CardWithStyle></WrapperForCard>);
}

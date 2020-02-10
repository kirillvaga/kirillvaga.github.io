import React from 'react';
import { Card } from 'antd';
import '../App/App.css'
import {WrapperForCard} from './CardVue.style'

type CardVue = {
  key: any;
  cardVue: any;
}


const CardVue = (props: CardVue) => {
  const { title, author, content, publishedAt} = props.cardVue;

  return (<WrapperForCard><Card title={title} bordered={true}><p>{author}</p><p>{content}</p><p>{publishedAt}</p></Card></WrapperForCard>);
}

export default CardVue;
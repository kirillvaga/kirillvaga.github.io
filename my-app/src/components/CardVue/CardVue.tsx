import React from 'react';
import { Card } from 'antd';
import './index.css'

type CardVue = {
  key: any;
  cardVue: any;
}


const CardVue = (props: CardVue) => {
  console.log(props.cardVue);
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title={props.cardVue.title} bordered={true}>
        <p>{props.cardVue.author}</p>
        <p>{props.cardVue.content}</p>
        <p>{props.cardVue.publishedAt}</p>
      </Card>
    </div>
  );
}

export default CardVue;
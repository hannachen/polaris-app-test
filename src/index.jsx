import React from 'react';
import ReactDOM from 'react-dom';
import {AppProvider} from '@shopify/polaris';
import Start from './Start';

ReactDOM.render(<AppProvider
  apiKey='app_bridge_key'
  shopOrigin='shop1.myshopify.io'
>
  <Start />
</AppProvider>, document.getElementById('root'));

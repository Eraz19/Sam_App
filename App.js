import React from 'react';
import { View} from 'react-native';

import MainPage from './component/HomePages/MainPage';
import Message from './component/Message/Message';
import ProRegistrationForm from './component/Registration/ProRegistrationForm';

const App = () => {
  
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Message />
    </View>
  );

};

export default App;

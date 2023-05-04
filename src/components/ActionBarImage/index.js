import React from 'react';

import { View, Image } from 'react-native';

const ActionBarImage = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={require('../../../assets/logo-udb.png')}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginRight:10
        }}
      />
    </View>
  );
};

export default ActionBarImage;

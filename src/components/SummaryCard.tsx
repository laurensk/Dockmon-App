import React from 'react';
import {Text, View} from 'react-native';

interface PropsType {}

class SummaryCard extends React.Component<PropsType> {
  render() {
    return (
      <View
        style={{
          height: 100,
          backgroundColor: 'white',
          borderRadius: 8,
          padding: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 3,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5,
        }}>
        <Text>summary</Text>
      </View>
    );
  }
}

export default SummaryCard;

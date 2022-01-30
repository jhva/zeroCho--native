import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

function Complete() {
  const [count, setCount] = useState(1);
  return (
    <View>
      <Pressable
        onPress={() => {
          setCount(p => p + 1);
        }}>
        {count}
      </Pressable>
    </View>
  );
}

export default Complete;

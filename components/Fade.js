import React, {useState} from 'react';
import {Animated, Text, View, TouchableOpacity} from 'react-native';

const FadeInView = props => {
  const [fadeAnim] = useState(new Animated.Value(-50)); // Initial value for opacity: 0

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: -50,
      duration: 300,
    }).start();
  };

  let id;

  const fadeIn = () => {
    clearTimeout(id);
    Animated.timing(fadeAnim, {
      toValue: 50,
      duration: 300,
    }).start();
    id = setTimeout(fadeOut, 1000);
  };

  return (
    <>
      <TouchableOpacity onPress={fadeIn}>
        <Text>FadeInView</Text>
      </TouchableOpacity>
      <Animated.View // Special animatable View
        style={{
          position: 'absolute',
          ...props.style,
          bottom: fadeAnim,
        }}>
        {props.children}
      </Animated.View>
    </>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FadeInView
        style={{
          width: 250,
          height: 50,
          backgroundColor: 'powderblue',
          borderRadius: 5,
        }}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
          Fading in
        </Text>
      </FadeInView>
    </View>
  );
};

import React, {useState} from 'react';
import {Animated, Text, View, TouchableOpacity} from 'react-native';

const FadeInView = props => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
    }).start();
  };

  return (
    <>
      <TouchableOpacity onPress={fadeIn}>
        <Text>FadeInView</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fadeOut}>
        <Animated.View // Special animatable View
          style={{
            ...props.style,
            opacity: fadeAnim, // Bind opacity to animated value
          }}>
          {props.children}
        </Animated.View>
      </TouchableOpacity>
      <Text>XDs</Text>
    </>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView
        style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
          Fading in
        </Text>
      </FadeInView>
    </View>
  );
};

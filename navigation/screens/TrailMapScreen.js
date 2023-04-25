import React, { useRef } from 'react';
import { View, Text, Image, Animated, PanResponder } from 'react-native';

const DraggableView = () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            pan.setOffset({
                x: pan.x._value,
                y: pan.y._value
            });
        },
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x,
                dy: pan.y,
            },
        ]),
        onPanResponderRelease: () => {
            pan.flattenOffset();
        }
    });
    return (
        <View
        onStartShouldSetResponderCapture={() => {return false}}>
            <Animated.View
            {...panResponder.panHandlers}
            style={{transform: [{ translateX: pan.x }, { translateY: pan.y }] }}>
                <Image
                source={require('./images/BMTrailsMap.jpg')} />
            </Animated.View>    
        </View>
    );
};

export default function TrailMapScreen({ navigation }) {
    return (
        <View>
            <DraggableView />
        </View>
        
    );
}


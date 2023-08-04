import React, { useRef } from 'react';
import { View, Text, Image, Animated, PanResponder, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';


export default function TrailMapScreen({ navigation }) {
    return (
        <View>
            <ImageZoom
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={300}
            imageHeight={225} 
            >
                <Image 
                style={{width: 300, height: 225}}
                source={require('./images/BMTrailsMap.jpg')} />
            </ImageZoom>
        </View>
        
    );
}


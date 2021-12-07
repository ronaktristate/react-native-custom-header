import React, { } from 'react';
import { View, StyleSheet, ViewStyle, StyleProp, ImageBackground, Image, ImageStyle, ImageResizeMode } from 'react-native'
import FastImage, { ResizeMode } from 'react-native-fast-image';

export type Props = {
   containerStyle: StyleProp<ViewStyle>,
   source: any,
   resizeMode: ResizeMode,
   defaultImage: any,
   defaultImageResizeMode: ImageResizeMode,
   defaultImageStyle: StyleProp<ImageStyle>,
   imageStyle: StyleProp<ImageStyle>,
   errorImage: any,
   errorImageStyle: StyleProp<ImageStyle>,
   style: StyleProp<ImageStyle>,
   isBase64: boolean,
}

export type State = {
   failToLoad: boolean,
   loadComplete: boolean,
}

export default class CustomFastImage extends React.Component<Props, State>{

   constructor(props: any) {
      super(props);
      this.state = {
         failToLoad: false,
         loadComplete: false,
      };
   }

   render() {
      let { containerStyle } = this.props;
      return (
         <View style={[styles.container, containerStyle]}>
            {this.renderImageView()}
         </View>
      );
   }

   renderImageView() {
      let { loadComplete, failToLoad } = this.state;
      let {
         source,
         resizeMode,
         defaultImage,
         defaultImageResizeMode,
         defaultImageStyle = {},
         imageStyle = {},
         errorImage,
         errorImageStyle = {},
         style = {}, // while style is set it will overright all image styles
      } = this.props;
      if (failToLoad) {
         // renders while image load failed
         return (
            <FastImage
               source={errorImage}
               resizeMode={resizeMode || 'cover'}
               style={style ? style : [styles.errorImageStyle, errorImageStyle]}
            />
         )
      } else if (loadComplete) {
         // after cache network image
         return (
            <FastImage
               source={source}
               resizeMode={resizeMode || 'cover'}
               style={style ? style : [styles.imageStyle, imageStyle]}
            />
         )
      } else {
         // default image rendering
         return (
            <ImageBackground
               source={defaultImage}
               style={style ? style : [styles.defaultImageStyle, defaultImageStyle]}
               resizeMode={defaultImageResizeMode || 'cover'}
            >
               {this.props.isBase64 &&

                  <Image
                     source={source}
                     resizeMode={resizeMode || 'cover'}
                     style={style ? style : [styles.imageStyle, imageStyle]}
                  />
                  ||
                  <FastImage
                     source={source}
                     onError={() => this.setState({ failToLoad: true })}
                     onLoad={() => this.setState({ loadComplete: true })}
                     onLoadStart={() => this.setState({ loadComplete: false })}
                     resizeMode={resizeMode || 'cover'}
                     style={{ height: 50, width: 50 }} // I know, Hack for load image! :)
                  />
               }
            </ImageBackground>
         )
      }
   }
}

let styles = StyleSheet.create({
   container: {
   },
   imageStyle: {
      height: 150,
      width: 150
   },
   defaultImageStyle: {
      height: 150,
      width: 150
   },
   errorImageStyle: {
      height: 150,
      width: 150
   }
});
import React, { } from 'react';
import { View, StyleSheet, ViewStyle, StyleProp, ImageBackground, Image, ImageStyle, ImageResizeMode, ImageSourcePropType } from 'react-native'
import FastImage, { ResizeMode, Source } from 'react-native-fast-image';

export type Props = {
   containerStyle: StyleProp<ViewStyle>,
   source: Source,
   resizeMode: ResizeMode,
   defaultImage: any,
   defaultImageResizeMode: ImageResizeMode,
   defaultImageStyle: StyleProp<ImageStyle>,
   imageStyle: StyleProp<ImageStyle>,
   errorImage: Source,
   errorImageStyle: StyleProp<ImageStyle>,
   style: StyleProp<ImageStyle>,
   isBase64: boolean,
   base64Source: ImageSourcePropType,
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
      return (
         <View style={[styles.container, this.props.containerStyle]}>
            {this.renderImageView()}
         </View>
      );
   }

   renderImageView() {
      let { loadComplete, failToLoad } = this.state;
      let { source, resizeMode, defaultImage,
         defaultImageResizeMode, defaultImageStyle = {}, imageStyle = {},
         errorImage, errorImageStyle = {}, base64Source, style = {},
      } = this.props;
      if (failToLoad) {
         return (
            <FastImage
               source={errorImage}
               resizeMode={resizeMode || 'cover'}
               style={style ? style : [styles.errorImageStyle, errorImageStyle]}
            />
         )
      }
      else if (loadComplete) {
         return (
            <FastImage
               source={source}
               resizeMode={resizeMode || 'cover'}
               style={style ? style : [styles.imageStyle, imageStyle]}
            />
         )
      }
      else {
         return (
            <ImageBackground
               source={defaultImage}
               style={style ? style : [styles.defaultImageStyle, defaultImageStyle]}
               resizeMode={defaultImageResizeMode || 'cover'}
            >
               {this.props.isBase64 &&
                  <Image
                     source={base64Source}
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
                     style={{ height: 50, width: 50 }}
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
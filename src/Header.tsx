import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Platform, ImageProps } from 'react-native';
import { getStatusBarHeight } from './iPhoneHelp';

export type Props = {
   backButton: boolean,
   onBackButtonPress: Function,
   rightIcon: boolean,
   rightImage: any,
   middleText: string,
   leftIcon: ImageProps,
   leftIconPress: Function,
   mainStyle: any,
   middleTextStyle: any,
   onPressRightIcon: any,
   rightImageStyle: any
};

const Header: React.FC<Props> = ({
   backButton,
   onBackButtonPress,
   rightIcon,
   rightImage,
   middleText,
   leftIcon,
   leftIconPress,
   mainStyle,
   middleTextStyle,
   onPressRightIcon,
   rightImageStyle
}) => {
   return (
      <View style={[styles.container, mainStyle,]} >
         <View style={styles.firstView}>
            {
               backButton ?
                  <View
                     style={[styles.backButton]}
                  >
                     <TouchableOpacity
                        onPress={() => { if (onBackButtonPress) onBackButtonPress(); }}
                        delayPressIn={0}
                     >
                        <Image source={require("./assets/back-icon.png")} />
                     </TouchableOpacity>
                  </View>
                  :
                  leftIcon ?
                     <View
                        style={[styles.backButton]}
                     >
                        <TouchableOpacity
                           onPress={() => leftIconPress && leftIconPress()}
                           delayPressIn={0}
                           hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
                        >
                           <Image source={leftIcon.source} />
                        </TouchableOpacity>
                     </View>
                     :
                     null
            }
         </View>
         <View
            style={[styles.middleView]}>
            {middleText ?
               <Text numberOfLines={1} style={[styles.middleTextStyle, middleTextStyle, {}]}> {middleText}</Text>
               :
               null}
         </View>
         {rightIcon ?
            <View style={[styles.lastView]}>
               <TouchableOpacity activeOpacity={0.8} onPress={onPressRightIcon}>
                  {rightImage ?
                     <Image source={rightImage} style={rightImageStyle} />
                     : null
                  }
               </TouchableOpacity>
            </View>
            :
            <View style={[styles.lastView]} />
         }
      </View>
   )
}

export default Header;


/**component styling */
const styles = StyleSheet.create({
   container: {
      paddingTop: Platform.OS === 'android'
         ? 25 :
         (getStatusBarHeight(true) + 10),
      flexDirection: 'row',
      paddingBottom: 15,
   },
   backButton: {
   },
   middleView: {
      alignItems: 'center',
      flex: 3.5,
   },
   middleTextStyle: {
      fontSize: 20,
      color: "black",
   },
   firstView: {
      paddingLeft: 20,
      flex: 0.3
   },
   lastView: {
      alignItems: 'flex-end',
      paddingRight: 20,
      flex: 0.3
   },
})


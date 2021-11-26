import React, { Component } from "react";
import { Text, View, StatusBar, StyleSheet, TouchableOpacity, Image, Platform, Keyboard, ImageBackground } from 'react-native';
import { getStatusBarHeight } from './iPhoneXHelper';
import PropTypes from 'prop-types';

/**Custom Header Component */
class HeaderComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   /**component render method */
   render() {
      const {
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
      } = this.props;

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
                              <Image source={leftIcon} />
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
      );
   }
}

/**Header Component Prop types */
HeaderComponent.propTypes = {
   backButton: PropTypes.bool,
   onBackButtonPress: PropTypes.func,
   rightIcon: PropTypes.bool,
   rightImage: PropTypes.any,
   middleText: PropTypes.string,
   leftIcon: PropTypes.bool,
   leftIconPress: PropTypes.func,
   mainStyle: PropTypes.any,
   middleTextStyle: PropTypes.any,
   onPressRightIcon: PropTypes.func,
   rightImageStyle: PropTypes.any
}

/**Header Component default prop types */
HeaderComponent.defaultProps = {
   backButton: false,
   middleText: "Home",
   leftIcon: false,
   rightIcon: false,
}

export default HeaderComponent;

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


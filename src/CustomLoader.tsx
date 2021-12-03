import React, { } from 'react'
import { View, ActivityIndicator, StyleSheet, Dimensions, ViewStyle, StyleProp, ActivityIndicatorProps, } from 'react-native'

export type Props = {
   loading: boolean,
   color: string,
   containerStyle: StyleProp<ViewStyle>,
   activityIndicatorProps: ActivityIndicatorProps,
}

const CustomLoader: React.FC<Props> = ({
   loading,
   color,
   containerStyle,
   activityIndicatorProps
}) => {
   return (
      <React.Fragment>
         {
            loading && <View style={[styles.container, containerStyle]}>
               <View style={styles.subView}>
                  <ActivityIndicator
                     size={activityIndicatorProps.size || 'large'}
                     animating={true}
                     color={color || "white"}
                  />
               </View>
            </View>
         }
      </React.Fragment>
   )
}

export default CustomLoader;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: Dimensions.get("screen").height,
      width: '100%',
      position: 'absolute',
      backgroundColor: 'transparent',
   },
   subView: {
      height: Dimensions.get("screen").height,
      width: Dimensions.get("screen").width,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.75)",
   }
})
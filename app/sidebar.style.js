import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../constants";
const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.blue_pale,
      width: '100%',
      height: '100%',
      paddingTop: 50,
    //   paddingLeft: 10,
    },
   
    tab: {
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small/2,
        borderRadius: SIZES.small,
        borderWidth: 1,
      
        borderColor:  COLORS.secondary2,
        marginVertical: 10,
        marginHorizontal:15
      },
      tabText: {
        fontFamily: FONT.medium,
        color: COLORS.secondary2 ,
        textAlign:'center'
      },
      menuTitle: {
        fontFamily: FONT.medium,
        color: COLORS.secondary2 ,
        textAlign:'center'
      },
  });
  export default styles;
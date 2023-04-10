import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../../constants";
const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.blue_pale,
      width: '100%',
      height: '100%',
      paddingTop: 20,
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
        fontSize:SIZES.large,
        color: COLORS.secondary2 ,
        marginLeft:20,
        textAlign:'left',
        marginBottom:5
      },
      
      separator: {
          height: 1,
          backgroundColor: 'gray',
          marginVertical: 10,
        },
      
  });
  export default styles;
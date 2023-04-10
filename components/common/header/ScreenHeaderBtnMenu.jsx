import { Image, Share, TouchableOpacity } from "react-native";
import { COLORS, icons, images, SIZES } from "../../../constants";
import styles from "./screenheader.style";
import { useRef, useState } from "react";

const ScreenHeaderBtnMenu = ({ iconUrl, dimension, drawerRef }) => {
  const [dOpen,setDOpen]=useState(false);
  const handleBtnPress = () => {
    if (drawerRef && drawerRef.current) {
      drawerRef.current.openDrawer();
    }
  }; 
 


  return (
    <TouchableOpacity style={styles.btnContainer} onPress={dOpen? ()=>{

      drawerRef.closeDrawer();
      setDOpen(false);
    }: ()=>{
      setDOpen(true);
      drawerRef.openDrawer();
    }

    }>
      <Image
        source={dOpen? icons.close : iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtnMenu;

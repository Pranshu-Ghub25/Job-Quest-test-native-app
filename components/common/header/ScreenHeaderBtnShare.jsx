import { Image, Share, TouchableOpacity } from "react-native";

import styles from "./screenheader.style";



// const shareContentFunc = () => {
//   return (
//     shareContent.message=(curr_data.)
//   )
// }



const shareContent = {
  message: "halllo",
  url: 'https://example.com',
}; 

const shareOptions = {
  dialogTitle: 'Share via',
};


const onShare = async (message) => {
  try {

    const result = await Share.share({message}, shareOptions);
    if (result.action === Share.sharedAction) {
      console.log('Shared successfully');
    } else if (result.action === Share.dismissedAction) {
      console.log('Sharing dismissed');
    }
  } catch (error) {
    console.log(error.message);
  }
};
const ScreenHeaderBtn = ({ iconUrl, dimension,message}) => {
  {console.log()}
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={()=>{onShare(message)} }>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;

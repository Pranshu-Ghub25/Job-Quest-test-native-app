import { SafeAreaView, ScrollView,FlatList, View ,DrawerLayoutAndroid,StyleSheet,Text,Button,TouchableOpacity, Alert} from "react-native";
import { COLORS, icons, images, SIZES } from "../../../constants";
import styles from './sidebar.style';
const sidebarItem=["My Profile","Applications","Wishlist","Premium/Subscriptions","Build Your Resume⚡"];
// import Wishlist from "../components/menu/wishlist/Wishlist";



const handleMenu = () => {
  Alert.alert(
    'Work in progress🙂⚒️',
    'Thanks for visiting🙌',
    [
      { text: 'Okay,I understand 😊' }
    ],
    { cancelable: false }
  );
};
const Sidebar = () => {
 
    return (
      <View style={styles.container}>
        <Text style={styles.menuTitle}>Menu</Text>
        <View style={styles.separator} />
      <FlatList
          data={sidebarItem}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab}
              onPress={handleMenu}
            >
              <Text style={styles.tabText} >{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          
        />
      </View>
    );
};



  export default Sidebar; 
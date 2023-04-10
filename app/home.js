import { useRef, useState } from "react";
import { SafeAreaView, ScrollView,FlatList, View ,DrawerLayoutAndroid,StyleSheet,Text,Button,TouchableOpacity} from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  SidebarComp,
  ScreenHeaderBtn,
  Welcome,ScreenHeaderBtnMenu
} from "../components";
// import Sidebar from "./Sidebar";
// import Sidebar from "../components";
// import Sidebar from "./Sidebar";r
const Home = () => {
  
  const drawerRef=useRef(null);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");




  const navigationView = () => (
    <SidebarComp/>
  );



  





  return (
    
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={navigationView}>
        { console.log(drawerRef)}
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blue_pale }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.blue_pale },
          headerShadowVisible: false,
          headerLeft: () => (
              
            <ScreenHeaderBtnMenu iconUrl={icons.menu} dimension='60%' drawerRef={drawerRef.current} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />

          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
    </DrawerLayoutAndroid>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#FFFFFF',
//     width: '80%',
//     height: '100%',
//     paddingTop: 50,
//     paddingLeft: 20,
//   },item
//   : {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
// });
export default Home;

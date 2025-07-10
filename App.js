// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "darkorchid", width: "50%", height: 70 }}
      ></View>
    </SafeAreaView>
  );
}

const styleContainer = { backgroundColor: "orange" };

// styles is an obj, whose attribute is container is also an obj
// like in java => obj.attribute
// StyleSheet ensure that no properties are accidentally misspell properties
const styles = StyleSheet.create({
  container: {
    flex: 1, // grows and fills the entire screen
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",

    // since SafeAreaView doesn't work for android we need to put padding
    // so we'll add platform module
    // if android, padding is 20, else 0
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

// export default function App() {
//   let x = 1;
//   console.log("App executed!");

//   // define function
//   const handlePress = () => console.log("Text clicked via handlePress.");

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Hello this is PlantsForYou!!</Text>

//       {/* <Text numberOfLines={1} onPress={handlePress}>
//         {/*onPress={() => console.log("Text clicked!")} >*/}
//       {/* numberOfLines will truncate the text into as many lines as specified. here its 1 line */}
//       {/* Hello this is PlantsForYou!! just fill this so that it spills into next
//         line and then truncate it.
//        </Text>  */}

//       {/* <Image source={require("./assets/icon.png")} /> */}
//       {/* require returns a number that's a reference to the image */}

//       <TouchableNativeFeedback onPress={() => console.log("Image tapped!")}>
//         <View
//           style={{ width: 200, height: 70, backgroundColor: "darkorchid" }}
//         ></View>
//         {/* <Image
//           blurRadius={10}
//           fadeDuration={1000}
//           source={{
//             width: 200,
//             height: 300,
//             uri: "https://picsum.photos/200/300",
//           }}
//         /> */}
//       </TouchableNativeFeedback>

//       <Image
//         blurRadius={0.5}
//         fadeDuration={1000}
//         source={{
//           width: 200,
//           height: 300,
//           uri: "https://picsum.photos/200/300",
//         }}
//       />

//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

//export default function App() {
//   return (
//     // SafeAreaView works only for iOS and not for Android
//     <SafeAreaView style={styles.container}>
//       {/*array of styles: <SafeAreaView style={[styles.container, styleContainer]}> */}
//       <Button
//         title="Click Me"
//         // onPress={() => alert("Button tapped.")}
//         onPress={() =>
//           // CUSTOMISED ALERT BOX THAT GIVES INFO
//           Alert.alert("My Alert", "Massage eheh", [
//             { text: "yes", onPress: () => console.log("YES.") },
//             { text: "no", onPress: () => console.log("NO.") },
//           ])
//         }
//         color={"orange"}
//       />
//     </SafeAreaView>
//   );
// }

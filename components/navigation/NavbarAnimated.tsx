import { View } from "react-native";
import { TabBarIcon } from "./TabBarIcon";

export default function AnimatedNav({ focused, name }: any) {

  const Focused: any = [
    {
      backgroundColor: '#fff',
      width: 50,
      height: 50,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: '#00215e',
      position: 'relative',
      top: -25,
      display: 'flex',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    {
      fgcolor: '#00215e',
    },
  ]

  const UnFocused: any = [
    {
      width: 50,
      height: 50,
      // borderRadius: 10,
      // borderWidth: 2,
      borderColor: '#fff',
      display: 'flex',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    {
      fgcolor: '#fff',
    },
  ];

  return (
    <View
      style={focused ? Focused : UnFocused[0]}>
      <TabBarIcon name={name} color={ focused ? Focused[1].fgcolor : UnFocused[1].fgcolor} size={35} style={{ marginBottom: 5 }} />
    </View>
  );
}

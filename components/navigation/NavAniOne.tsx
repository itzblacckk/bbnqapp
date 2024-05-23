import { View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function AnimatedNavOne({ focused, name }: any) {

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
      width: 55,
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
      <FontAwesome name={name} color={ focused ? Focused[1].fgcolor : UnFocused[1].fgcolor} size={30} style={{ marginBottom: 5 }} />
    </View>
  );
}

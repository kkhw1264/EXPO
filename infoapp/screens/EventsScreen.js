import {View, Text, Pressable} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import EventsSecondScreen from './EventsSecondScreen';

const EventsScreen = ({navigation}) => {
  return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Events!</Text>
  <Pressable
    onPress={() => navigation.navigate('EventsSecond')}
    >
    <View 
      style={{
      borderWidth: 1, 
      padding: 20, 
      backgroundColor: 'salmon', 
      borderRadius: 5,
      marginTop: 10
    }}
    >

      <Text style={{
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
      }}>NATIONAL DAY PARADE 2025</Text>
      </View>
    </Pressable>
    <View>
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Upcoming Events:</Text>
      <Text> Event: National Day Parade </Text> 
      <Text> Date: 9th August </Text>
      <Text> Time: 5:00 PM </Text>
      <Text> Venue: Marina Bay </Text>
      <Text> Description: Celebrate Singapore's National Day with a grand parade featuring performances, fireworks </Text>
    </View>
  </View>
  );
};

const Stack = createStackNavigator();

const EventsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsScreen} />
      <Stack.Screen name="EventsSecond" component={EventsSecondScreen} />
      <Stack.Screen name="EventsThird" component={EventsSecondScreen} />
      {/* Additional screens can be added here */}
    </Stack.Navigator>
  );
};

export default EventsStack;
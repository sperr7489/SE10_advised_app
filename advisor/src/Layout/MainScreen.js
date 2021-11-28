import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
  useNavigationState,
} from '@react-navigation/native';

import {styles} from '../styles/styles';

const MainScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  console.log(route);

  return (
    <View style={styles.center}>
      <Text style={styles.title}>{route.params.foodName}</Text>
      {Platform.select({
        ios: (
          <Button
            title="View Bottom Tabs"
            onPress={() => navigation.navigate('BottomTabs', {name: 'param 1'})}
          />
        ),
        android: (
          <TouchableOpacity
            style={{marginBottom: 16}}
            onPress={() =>
              navigation.navigate('BottomTabs', {name: 'param 1'})
            }>
            <Text style={{color: 'blue', fontSize: 20}}>View Bottom Tabs</Text>
          </TouchableOpacity>
        ),
      })}
      {Platform.select({
        ios: (
          <Button
            title="View Top Tabs"
            onPress={() => navigation.navigate('TopTabs', {name: 'param 2'})}
          />
        ),
        android: (
          <TouchableOpacity
            style={{marginBottom: 16}}
            onPress={() => navigation.navigate('TopTabs', {name: 'param 2'})}>
            <Text style={{color: 'blue', fontSize: 20}}>View Top Tabs</Text>
          </TouchableOpacity>
        ),
      })}
      {Platform.select({
        ios: (
          <Button
            title="Pass Data Back"
            onPress={() =>
              navigation.navigate('Feed', {data: 'We have new data!'})
            }
          />
        ),
        android: (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Feed', {data: 'We have new data!'})
            }>
            <Text style={styles.androidButtonText}>Pass Data Back</Text>
          </TouchableOpacity>
        ),
      })}
    </View>
  );
};

export default MainScreen;

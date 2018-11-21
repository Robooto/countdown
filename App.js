import React from 'react';
import { View } from 'react-native';
import EventList from './EventList';
import EventForm from './EventForm';
import PizzaTranslator from './PizzaTranslator';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  list: {
    screen: EventList
  },
  form: {
    screen: EventForm
  },
  translator: {
    screen: PizzaTranslator
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

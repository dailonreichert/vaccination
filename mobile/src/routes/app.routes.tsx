import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import CreateAppointment from '../pages/CreateAppointment';
import CreateAnimal from '../pages/CreateAnimal';
import AppointmentCreated from '../pages/AppointmentCreated';
import AnimalCreated from '../pages/AnimalCreated';
import ListAppointments from '../pages/ListAppointments';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#999591' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="CreateAppointment" component={CreateAppointment} />
    <App.Screen name="CreateAnimal" component={CreateAnimal} />
    <App.Screen name="AppointmentCreated" component={AppointmentCreated} />
    <App.Screen name="AnimalCreated" component={AnimalCreated} />
    <App.Screen name="ListAppointments" component={ListAppointments} />

    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation'

//IMPORT EVERYTHING!!
import createform from '../screens/createform'
import successadmin from '../screens/successadmin'
import listofcreatedqueues from '../screens/listofcreatedqueues'
import queuers from '../screens/queuers'
import currentqueuer from '../screens/currentqueuer'
import listofactivequeues from '../screens/listofactivequeues'
import joinaqueue from '../screens/joinaqueue'
import successclient from '../screens/successclient'
import listofyourqueues from '../screens/listofyourqueues'
import seestatus from '../screens/seestatus'
import rescindname from '../screens/rescindname'




//stack1

const CreateAQueuePage = StackNavigator({
  CreateForm: { screen: createform },
	SuccessAdmin: {screen: successadmin},
}, {
  initialRouteName: 'CreateForm',
  navigationOptions: {
    title: 'Create A Queue Page',

    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
})
//stack2
const YourCreatedQueuesPage = StackNavigator({
  ListOfCreatedQueues: { screen: listofcreatedqueues },
  Queuers: {screen: queuers},
  CurrentQueuer: {screen: currentqueuer}
}, {
  initialRouteName: 'ListOfCreatedQueues',
})
//stack3
const ActiveQueuesPage = StackNavigator({
  ListOfActiveQueues: { screen: listofactivequeues },
  JoinAQueue: {screen: joinaqueue},
  SuccessClient: {screen: successclient},
}, {
  initialRouteName: 'ListOfActiveQueues',
})
//stack4
const QueuesYouAreInPage = StackNavigator({
  ListOfYourQueues: { screen: listofyourqueues },
  SeeStatus: {screen: seestatus},
  RescindName: {screen: rescindname},
}, {
  initialRouteName: 'ListOfYourQueues',
})

//drawer combining all the stacks
const Drawer = DrawerNavigator({
  'Create A Queue': { screen: CreateAQueuePage },
  'Your Created Queues': {screen: YourCreatedQueuesPage},
  'Active Queues' : {screen: ActiveQueuesPage},
  'Queues You Are In': {screen: QueuesYouAreInPage},
})

export {Drawer}

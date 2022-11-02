import { StatusBar } from 'expo-status-bar';
import { useRef, useState  } from 'react';
import { Alert, Animated, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native';
import icon from './assets/meo.jpg'
import iconChuot from './assets/chuot.jpg'

export default function App() {

  const [location, setLocation] 
      = useState({
        x: null,
        y: null,
        left: new Animated.Value(10),
        top: new Animated.Value(10)

      });
  const [locationChuot1, setLocationChuot1] 
      = useState({
        x1: null,
        y1: null,
        left1: new Animated.Value(Math.random()*480),
        top1: new Animated.Value(Math.random()*480)

      });
  const [locationChuot2, setLocationChuot2] 
      = useState({
        x2: null,
        y2: null,
        left2: new Animated.Value(Math.random()*480),
        top2: new Animated.Value(Math.random()*480)

      });
  const [locationChuot3, setLocationChuot3] 
      = useState({
        x3: null,
        y3: null,
        left3: new Animated.Value(Math.random()*480),
        top3: new Animated.Value(Math.random()*480)

      });
  

  function onPress(evt){
    console.log('====================================');
    var x = evt.nativeEvent.locationX;
    console.log('====================================');
    console.log(x);
    console.log('====================================');
    var y = evt.nativeEvent.locationY;
    console.log('====================================');
    var x1 = Math.random()*480;
    var y1 = Math.random()*480;
    var x2 = Math.random()*480;
    var y2 = Math.random()*480;
    var x3 = Math.random()*480;
    var y3 = Math.random()*480;
    
    setLocation({
      x: x,
      y: y,
      left: x,
      top: y,
    })
    setLocationChuot1({
      x1:x1,
      y1:y1,
      left1:x1,
      top1:y1,
    })
    setLocationChuot2({
      x2:x2,
      y2:y2,
      left2:x2,
      top2:y2,
    })
    setLocationChuot3({
      x3:x3,
      y3:y3,
      left3:x3,
      top3:y3,
    })
    
  }
  
  const {top, left} = location;
  const {top1, left1} = locationChuot1;
  const {top2, left2} = locationChuot2;
  const {top3, left3} = locationChuot3;

  return (
    <SafeAreaView
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder= {()=>true}
      onResponderGrant={onPress}
      
      style={styles.container}>

        <Animated.Image
        source = {icon}
        style={{left: left, top: top, height:50,width:50,position:'absolute'}}
        />
        <Animated.Image
        source = {iconChuot}
        style={{left: left1, top: top1, height:30,width:40,position:'absolute'}}
        />
        <Animated.Image
        source = {iconChuot}
        style={{left: left2, top: top2, height:30,width:40,position:'absolute'}}
        />
        <Animated.Image
        source = {iconChuot}
        style={{left: left3, top: top3, height:30,width:40,position:'absolute'}}
        />
       
     

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


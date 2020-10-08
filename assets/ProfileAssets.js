import React, { Component } from "react";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  ImageBackground,
  TextInput,
  FlatList,
} from "react-native";

import { Button } from "react-native-elements";

import LinearGradient from "react-native-linear-gradient";
import RadialGradient from "react-native-radial-gradient";

import Icon from "react-native-vector-icons/Ionicons";

var starSize = 30;
export default class ProfileAssets extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <LinearGradient
          colors={["#19B2EA", "white"]}
          style={{ height: "17%" }}
        ></LinearGradient>

        <LinearGradient
          colors={["white", "#19B2EA"]}
          style={{
            height: "17%",
            top: 435.5,
          }}
        ></LinearGradient>

        <TouchableOpacity
          style={{
            alignSelf: "center",
            width: "30%",
            height: "20%",
            bottom: 100,
            zIndex: 0,
            right: 110,
          }}
        >
          <View
            style={{
              top: 0,
              borderWidth: 3.75,
              borderColor: "#46A4C5",
              backgroundColor: "white",
              width: "100%",
              height: "100%",
              alignSelf: "center",
              borderRadius: 100,
            }}
          >
            <Icon
              name="person-outline"
              size={75}
              style={{
                alignSelf: "center",
                color: "#46A4C5",
                top: 20,
              }}
            ></Icon>
          </View>
        </TouchableOpacity>
        <View style={{ bottom: 136 }}>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              zIndex: 2,
              bottom: 71,
              left: 51,
            }}
          >
            <Icon
              name="star"
              size={starSize}
              style={{
                alignSelf: "center",
                top: 60,
                color: "black",
              }}
            ></Icon>
            <Icon
              name="star"
              size={starSize}
              style={{
                alignSelf: "center",
                top: 60,
                color: "black",
              }}
            ></Icon>
            <Icon
              name="star"
              size={starSize}
              style={{
                alignSelf: "center",
                top: 60,
                color: "black",
              }}
            ></Icon>
            <Icon
              name="star"
              size={starSize}
              style={{
                alignSelf: "center",
                top: 60,
                color: "black",
              }}
            ></Icon>
            <Icon
              name="star"
              size={starSize}
              style={{
                alignSelf: "center",
                top: 60,
                color: "black",
              }}
            ></Icon>
          </View>

          <Text
            style={{
              alignSelf: "center",
              bottom: 115,
              fontSize: 25,
              left: 73,
              color: "#03688C",
              zIndex: 1,
            }}
          >
            Gregory Winthrop
          </Text>
          <Text
            style={{
              alignSelf: "center",
              bottom: 110,
              left: 27.75,
              fontSize: 22,
              color: "#03688C",
              zIndex: 1,
            }}
          >
            100 Cases
          </Text>
        </View>
        <View style={{ padding: 40, bottom: 185, right: 35 }}>
          <Text
            style={{
              alignSelf: "flex-start",
              bottom: 35,
              fontSize: 22,
              color: "#03688C",
              zIndex: 1,
              textDecorationLine: "underline",
              left: 35,
            }}
          >
            About Me:
          </Text>
          <Text
            style={{
              alignSelf: "flex-start",
              bottom: 30,
              fontSize: 18,
              color: "#067AA3",
              zIndex: 1,
              left: 34.5,
            }}
          >
            (18 years old)
          </Text>
          <Text
            style={{
              alignSelf: "flex-start",
              bottom: 30,
              fontSize: 18,
              color: "#067AA3",
              zIndex: 1,
              left: 35,
            }}
          >
            <Text
              style={{
                alignSelf: "flex-start",
                bottom: 30,
                fontSize: 18,
                color: "#067AA3",
                zIndex: 1,
                left: 40,
              }}
            >
              Freshman CS major at Harvard University with knowledge in Python
              and Java. Willing to help with assignments or answering any
              general questions
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 300,
            height: 75,
            backgroundColor: "white",
            bottom: 228,
            alignSelf: "center",
            borderWidth: 3,
            borderHeight: 3,
            borderColor: "#006B91",
            shadowColor: "#006B91",
            shadowOffset: {
              width: 0,
              height: 11,
            },
            shadowRadius: 14.78,
            elevation: 11,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 30,
              top: 13,
              color: "#006B91",
            }}
          >
            Account Settings
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//Button
const AccountSettingsButton = () => {
  <TouchableOpacity
    style={{
      width: 300,
      height: 75,
      backgroundColor: "white",
      bottom: 228,
      alignSelf: "center",
      borderWidth: 3,
      borderHeight: 3,
      borderColor: "#006B91",
      shadowColor: "#006B91",
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowRadius: 14.78,
      elevation: 11,
    }}
  >
    <Text
      style={{
        alignSelf: "center",
        fontSize: 30,
        top: 13,
        color: "#006B91",
      }}
    >
      Account Settings
    </Text>
  </TouchableOpacity>;
};

//View in the middle of the screen. Contains the user's age and description
const AboutMe = () => {
  <View style={{ padding: 40, bottom: 185, right: 35 }}>
    <Text
      style={{
        alignSelf: "flex-start",
        bottom: 35,
        fontSize: 22,
        color: "#03688C",
        zIndex: 1,
        textDecorationLine: "underline",
        left: 35,
      }}
    >
      About Me:
    </Text>
    <Text
      style={{
        alignSelf: "flex-start",
        bottom: 30,
        fontSize: 18,
        color: "#067AA3",
        zIndex: 1,
        left: 34.5,
      }}
    >
      (18 years old)
    </Text>
    <Text
      style={{
        alignSelf: "flex-start",
        bottom: 30,
        fontSize: 18,
        color: "#067AA3",
        zIndex: 1,
        left: 35,
      }}
    >
      <Text
        style={{
          alignSelf: "flex-start",
          bottom: 30,
          fontSize: 18,
          color: "#067AA3",
          zIndex: 1,
          left: 40,
        }}
      >
        Freshman CS major at Harvard University with knowledge in Python and
        Java. Willing to help with assignments or answering any general
        questions
      </Text>
    </Text>
  </View>;
};

//View to the right of profile pic. Contains name, # of cases, and stars
const NameAndStats = () => {
  return (
    <View style={{ bottom: 136 }}>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          zIndex: 2,
          bottom: 71,
          left: 51,
        }}
      >
        <Icon
          name="star"
          size={starSize}
          style={{
            alignSelf: "center",
            top: 60,
            color: "black",
          }}
        ></Icon>
        <Icon
          name="star"
          size={starSize}
          style={{
            alignSelf: "center",
            top: 60,
            color: "black",
          }}
        ></Icon>
        <Icon
          name="star"
          size={starSize}
          style={{
            alignSelf: "center",
            top: 60,
            color: "black",
          }}
        ></Icon>
        <Icon
          name="star"
          size={starSize}
          style={{
            alignSelf: "center",
            top: 60,
            color: "black",
          }}
        ></Icon>
        <Icon
          name="star"
          size={starSize}
          style={{
            alignSelf: "center",
            top: 60,
            color: "black",
          }}
        ></Icon>
      </View>
    </View>
  );
};

//Default profile photo, can be changed on press
const ProfileBlankButton = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          width: "100%",
          height: "100%",
          bottom: 110,
          rigth: 100,
        }}
      >
        <View
          style={{
            top: 10,
            borderWidth: 5,
            borderColor: "#46A4C5",
            backgroundColor: "white",
            width: "37%",
            height: "23%",
            alignSelf: "center",
            borderRadius: 100,
          }}
        >
          <Icon
            name="person-outline"
            size={75}
            style={{
              alignSelf: "center",
              color: "#46A4C5",
              top: 27,
            }}
          ></Icon>
        </View>
      </TouchableOpacity>
    </View>
  );
};

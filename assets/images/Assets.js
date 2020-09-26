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
} from "react-native";

import { Button } from "react-native-elements";

import LinearGradient from "react-native-linear-gradient";
import RadialGradient from "react-native-radial-gradient";

import Icon from "react-native-vector-icons/Ionicons";
export default class Assets extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <LinearGradient
          colors={["#19B2EA", "white"]}
          style={{ height: "19%" }}
        ></LinearGradient>
        <LinearGradient
          colors={["white", "#19B2EA"]}
          style={{
            height: "19%",
            top: 409,
          }}
        ></LinearGradient>

        <Icon name="md-send" size={30}></Icon>
        <View>
          <TextInput
            style={{
              backgroundColor: "white",
              borderRightWidth: 2,
              borderLeftWidth: 2,
              borderBottomWidth: 2,
              borderTopWidth: 2,
              borderColor: "#AAAAAA",
              borderRadius: 10,
              width: "70%",
              height: 40,
              top: 200,
              alignSelf: "center",
              right: 50,
              textAlignVertical: "center",
            }}
            placeholder="Say something"
          ></TextInput>

          <TouchableOpacity
            style={{
              alignSelf: "center",
              backgroundColor: "white",
              borderRightWidth: 2,
              borderLeftWidth: 2,
              borderBottomWidth: 2,
              borderTopWidth: 2,
              borderColor: "#00910F",
              borderRadius: 60,
              width: 60,
              height: 60,
              top: 150,
              left: 140,
              shadowColor: "#00910F",
              shadowOffset: {
                width: 0,
                height: 11,
              },
              elevation: 11,
            }}
          ></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const SendMessage = () => {
  return (
    <View>
      <TextInput
        style={{
          backgroundColor: "white",
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderBottomWidth: 2,
          borderTopWidth: 2,
          borderColor: "#AAAAAA",
          width: "60%",
          height: 50,
          top: 180,
          alignSelf: "center",
          textAlignVertical: "top",
          right: 65,
          textAlignVertical: "center",
        }}
        placeholder="Say something"
      ></TextInput>

      <TouchableOpacity
        style={{
          alignSelf: "center",
          backgroundColor: "white",
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderBottomWidth: 2,
          borderTopWidth: 2,
          borderColor: "#00910F",
          width: 105,
          height: 50,
          top: 130,
          left: 130,
        }}
      >
        <Text
          color="#00910F"
          style={{
            zIndex: 10,
            color: "#00910F",
            alignSelf: "center",
            top: 9,
            fontSize: 20,
          }}
        >
          Send
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Message = () => {
  return (
    <View>
      <Text style={{ color: "#03688C", left: 20, fontSize: 18, bottom: 90 }}>
        Username:
      </Text>
      <Text
        style={{
          alignSelf: "center",
          padding: 100,
          left: 30,
          bottom: 212,
          fontSize: 16,
        }}
      >
        Hey what's up, heard about your issue and I'm down to help in any way I
        can. How's your day been.
      </Text>
    </View>
  );
};

const RequestAccepted = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        alignSelf: "center",
        width: 300,
        height: 500,
        bottom: 175,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: "#AAAAAA",
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          top: 25,
          fontSize: 20,
          color: "#03688C",
          textDecorationLine: "underline",
        }}
      >
        Request Accepted
      </Text>
      <Text
        style={{
          color: "#03688C",
          fontSize: 16,
          alignSelf: "center",
          top: 150,
        }}
      >
        Your request to chat has been accepted
      </Text>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          backgroundColor: "white",
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderBottomWidth: 2,
          borderTopWidth: 2,
          borderColor: "#03688C",
          width: 115,
          height: 115,
          top: 280,
          left: 75,
        }}
      >
        <Text
          color="#00910F"
          style={{
            zIndex: 10,
            color: "#03688C",
            alignSelf: "center",
            top: 40,
            fontSize: 20,
          }}
        >
          View Issue
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          backgroundColor: "white",
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderBottomWidth: 2,
          borderTopWidth: 2,
          borderColor: "#00910F",
          width: 115,
          height: 115,
          top: 165,
          right: 75,
        }}
      >
        <Text
          color="#00910F"
          style={{
            zIndex: 10,
            color: "#00910F",
            alignSelf: "center",
            top: 40,
            fontSize: 20,
          }}
        >
          Chat
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const RequestSent = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        alignSelf: "center",
        width: 300,
        height: 500,
        bottom: 175,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: "#AAAAAA",
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          top: 25,
          fontSize: 20,
          color: "#03688C",
          textDecorationLine: "underline",
        }}
      >
        Request Sent
      </Text>
      <Text
        style={{
          color: "#03688C",
          fontSize: 16,
          alignSelf: "center",
          top: 150,
        }}
      >
        You have sent a request to chat
      </Text>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          backgroundColor: "white",
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderBottomWidth: 2,
          borderTopWidth: 2,
          borderColor: "#00910F",
          width: 115,
          height: 115,
          top: 280,
        }}
      >
        <Text
          color="#00910F"
          style={{
            zIndex: 10,
            color: "#00910F",
            alignSelf: "center",
            top: 40,
            fontSize: 20,
          }}
        >
          Ok
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Declined = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        alignSelf: "center",
        width: 300,
        height: 500,
        bottom: 175,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: "#AAAAAA",
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          top: 25,
          fontSize: 20,
          color: "#03688C",
          textDecorationLine: "underline",
        }}
      >
        Declined
      </Text>
      <TextInput
        style={{
          backgroundColor: "white",
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderBottomWidth: 2,
          borderTopWidth: 2,
          borderColor: "#AAAAAA",
          width: "90%",
          height: 200,
          top: 60,
          alignSelf: "center",
          textAlignVertical: "top",
        }}
        placeholder="Leave a message"
      ></TextInput>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          backgroundColor: "white",
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderBottomWidth: 2,
          borderTopWidth: 2,
          borderColor: "#00910F",
          width: 115,
          height: 115,
          top: 110,
        }}
      >
        <Text
          color="#00910F"
          style={{
            zIndex: 10,
            color: "#00910F",
            alignSelf: "center",
            top: 40,
            fontSize: 20,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const UserFound = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        alignSelf: "center",
        width: 300,
        height: 500,
        bottom: 175,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: "#AAAAAA",
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          top: 20,
          fontSize: 20,
          color: "#03688C",
          textDecorationLine: "underline",
        }}
      >
        User Found
      </Text>
      <Text style={{ top: 35, left: 10, color: "black", fontSize: 15 }}>
        Description
      </Text>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          backgroundColor: "white",
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderBottomWidth: 2,
          borderTopWidth: 2,
          borderColor: "#910000",
          width: 115,
          height: 115,
          left: 70,
          top: 275,
        }}
      >
        <Text
          style={{
            zIndex: 10,
            color: "#910000",
            alignSelf: "center",
            top: 40,
            fontSize: 20,
          }}
        >
          Decline
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          backgroundColor: "white",
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderBottomWidth: 2,
          borderTopWidth: 2,
          borderColor: "#00910F",
          width: 115,
          height: 115,
          right: 70,
          top: 160,
        }}
      >
        <Text
          color="#00910F"
          style={{
            zIndex: 10,
            color: "#00910F",
            alignSelf: "center",
            top: 40,
            fontSize: 20,
          }}
        >
          Accept
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const CancelSearch = () => {
  return (
    <TouchableOpacity
      style={{
        width: 370,
        height: 100,
        bottom: 60,
        backgroundColor: "white",
        borderColor: "#910000",
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        shadowColor: "#910000",
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowRadius: 14.78,
        elevation: 11,
        alignSelf: "center",
      }}
    >
      <Text
        style={{
          fontSize: 40,
          color: "#006B91",
          alignSelf: "center",
          top: 20,
        }}
      >
        Search For Helper
      </Text>
    </TouchableOpacity>
  );
};

const EnterSituation = () => {
  return (
    <TextInput
      style={{
        backgroundColor: "white",
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: "#AAAAAA",
        width: "90%",
        height: 200,
        bottom: 100,
        alignSelf: "center",
        textAlignVertical: "top",
      }}
      placeholder="Enter your situation"
    ></TextInput>
  );
};

const SearchForHelper = () => {
  return (
    <TouchableOpacity
      style={{
        width: 370,
        height: 100,
        bottom: 60,
        backgroundColor: "white",
        borderColor: "#006B91",
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        shadowColor: "#006B91",
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowRadius: 14.78,
        elevation: 11,
        alignSelf: "center",
      }}
    >
      <Text
        style={{
          fontSize: 40,
          color: "#006B91",
          alignSelf: "center",
          top: 20,
        }}
      >
        Search For Helper
      </Text>
    </TouchableOpacity>
  );
};
const BackDarkness = () => {
  return (
    <TouchableOpacity
      style={{
        opacity: 0.25,
        backgroundColor: "black",
        height: 700,
        bottom: 275,
      }}
    ></TouchableOpacity>
  );
};
const SearchTopics = () => {
  return (
    <TextInput
      style={{
        justifyContent: "center",
        alignItems: "stretch",
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        height: 50,
        width: "85%",
        alignSelf: "center",
        borderColor: "#AAAAAA",
        textAlign: "left",
        bottom: 90,
      }}
      placeholder="Search Topics"
    ></TextInput>
  );
};

const Notification = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#03688C",
        width: 420,
        height: 149,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          width: 420,
          height: 143,
          top: 3,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 30,
            color: "#03688C",
            top: 45,
            right: 50,
          }}
        >
          You have a match!!!
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const MenuButton = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#03688C",
        width: 300,
        height: 120,
        zIndex: 1,
        alignSelf: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#03688C",
          width: 305,
          height: 125,
          opacity: 0.2,
          alignSelf: "center",
          bottom: 1.5,
          zIndex: 1,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "white",
          width: 295,
          height: 115,
          opacity: 1,
          alignSelf: "center",
          bottom: 122,
          zIndex: 1,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 30,
            top: 37,
            color: "#03688C",
            zIndex: 0,
            right: 2,
          }}
        >
          I NEED ADVICE
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const HeaderFooter = () => {
  return (
    <View>
      <LinearGradient
        colors={["#19B2EA", "white"]}
        style={{ height: "27%" }}
      ></LinearGradient>

      <LinearGradient
        colors={["white", "#19B2EA"]}
        style={{
          height: "27%",
          top: 413,
        }}
      ></LinearGradient>
    </View>
  );
};

const TopicButton = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "#03688C",
          width: 120,
          height: 120,
          zIndex: 1,
          left: 100,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#03688C",
            width: 125,
            height: 125,
            opacity: 0.4,
            alignSelf: "center",
            bottom: 1.5,
            zIndex: 1,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "white",
            width: 115,
            height: 115,
            opacity: 1,
            alignSelf: "center",
            bottom: 122,
            zIndex: 1,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 14,
              top: 43,
              color: "#03688C",
              zIndex: 0,
            }}
          >
            RELATIONSHIPS
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

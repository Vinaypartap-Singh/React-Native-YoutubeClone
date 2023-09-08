import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";

export default function ShortsTab({ shorts }) {
  return (
    <View>
      <TouchableOpacity
        style={{ marginTop: 20, marginRight: 20, position: "relative" }}
      >
        <Image
          source={shorts.image}
          style={{
            height: 300,
            width: 220,
            objectFit: "cover",
            borderRadius: 20,
          }}
        />
        {/* Top Right Icon */}
        <View style={{ width: "100%", height: "100%", position: "absolute" }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                marginTop: 10,
                marginRight: 4,
              }}
            >
              <Icon.MoreVertical
                strokeWidth={1.2}
                height={26}
                color={"white"}
              />
            </View>
          </View>
          <View style={{ position: "absolute", bottom: 10, padding: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              {shorts.title}
            </Text>
            <Text style={{ color: "white", marginTop: 10 }}>
              {" "}
              {shorts.viewCount} views
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

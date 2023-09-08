import {
  Image,
  NativeModules,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { themeColors } from "../theme/theme";
import * as Icon from "react-native-feather";
import { categories, shortVideos, videos } from "../constants";
import ShortsTab from "../components/ShortsTab";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("All");

  const { StatusBarManager } = NativeModules;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: themeColors.bg }}
    >
      <View>
        <StatusBar barStyle={"light-content"} />
        <SafeAreaView
          style={{
            marginTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
          }}
        >
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                source={require("../assets/icons/youtubeIcon.png")}
                style={{ height: 40, width: 40 }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Youtube
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
            >
              <Icon.Cast strokeWidth={1.2} height={28} color={"white"} />
              <Icon.Bell strokeWidth={1.2} height={28} color={"white"} />
              <Icon.Search strokeWidth={1.2} height={28} color={"white"} />
              <Image
                source={require("../assets/images/avatar.png")}
                style={{ width: 30, height: 30, borderRadius: 50 }}
              />
            </View>
          </View>
        </SafeAreaView>
        {/* Scroll View Categories */}
        <View style={{ marginTop: 10 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => {
              let isActive = category === activeCategory;
              const TextColor = isActive ? "black" : "white";
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(category)}
                  key={category}
                  style={{
                    margin: 5,
                    backgroundColor: isActive
                      ? "white"
                      : "rgba(255,255,255,0.1)",
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: TextColor }}>{category}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {/* Shorts Tab */}
        <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image
              source={require("../assets/icons/shortsIcon.png")}
              style={{ height: 30, width: 30 }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Shorts
            </Text>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {shortVideos.map((shorts) => {
                return <ShortsTab shorts={shorts} />;
              })}
            </ScrollView>
          </View>
        </View>
        {/* Video Feed */}
        <View>
          {videos.map((data) => {
            return (
              <TouchableOpacity style={{ marginVertical: 20 }}>
                <Image source={data.thumbnail} style={{ height: 280 }} />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    paddingHorizontal: 20,
                    marginTop: -40,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      paddingVertical: 3,
                      paddingHorizontal: 8,
                      fontWeight: "bold",
                    }}
                  >
                    {data.duration}
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 40,
                    paddingHorizontal: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <Image
                    source={data.avatar}
                    style={{ width: 60, height: 60, borderRadius: 50 }}
                  />
                  <View>
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {data.title}
                    </Text>
                    <View
                      style={{ flexDirection: "row", gap: 10, marginTop: 10 }}
                    >
                      <Text style={{ color: "rgba(255,255,255, 0.6)" }}>
                        {data.channelTitle}
                      </Text>
                      <Text style={{ color: "rgba(255,255,255, 0.6)" }}>
                        {data.viewCount} views
                      </Text>
                      <Text style={{ color: "rgba(255,255,255, 0.6)" }}>
                        {data.publishedText}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

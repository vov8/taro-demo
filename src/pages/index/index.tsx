import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import Timer from "tard-uu";
import { Picker } from "../../components";
import "./index.scss";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        ddd
        <Timer />
      </View>
    );
  }
}

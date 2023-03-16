import { StyleSheet, Text, View, Image, Switch, Alert } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { icons, COLORS, SIZES } from "../../styles/index";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoading,
  selectUserInfo,
} from "../../redux/selectors/userSelectors";
import {resetWeeklyLimit} from '../../redux/actions/UserActions'

const handleToggleNavigation = (dispatch, navigation, isweeklyLimitEnabled, item) => {
  const toggleValueSelector = isweeklyLimitEnabled && item.type === "WEEK";
  if (toggleValueSelector) {
    dispatch(resetWeeklyLimit());
  } else {
    navigation.navigate("Limit");
  }
}

const ListItem = ({ item }) => {
  const { image, title, meta, toggle, isToggleMenu } = item;
  const [toggleEnabled, setToggleEnabled] = useState(false);
  const loading = useSelector(selectLoading);
  const userInfo = useSelector(selectUserInfo);
  const isweeklyLimitEnabled = userInfo?.weeklyLimitEnabled;
  const dispatch = useDispatch();

  const toggleValueSelector =  isweeklyLimitEnabled && item.type==="WEEK"
   
  const handleToggleNavigation = useCallback(()=>{
    if(toggleValueSelector){
      dispatch(resetWeeklyLimit());
    }else{
      navigation.navigate("Limit")
    }
  },[toggleValueSelector,navigation]);

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image source={image} style={styles.iconStyle} />
        <View style={styles.menuInfoWrapper}>
          <Text style={styles.titlestyle}>{title}</Text>
          <Text style={styles.metaTextStyle} numberOfLines={2}>
            {meta}
          </Text>
        </View>
      </View>

      {isToggleMenu && (
        <Switch
          style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
          trackColor={{
            false: COLORS.toggleFalseTrackColor,
            true: COLORS.toggleTrueTrackColor,
          }}
          thumbColor={toggle ? COLORS.white : COLORS.white}
          ios_backgroundColor={COLORS.toggleFalseTrackColor}
          onValueChange={handleToggleNavigation}
          value={toggleValueSelector}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding / 2,
    backgroundColor: COLORS.white,
  },
  menuInfoWrapper: {
    width: "80%",
  },
  contentWrapper: { flexDirection: "row", justifyContent: "space-between" },
  titlestyle: { fontWeight: "400" },
  metaTextStyle: { color: "#b9b9b9", fontSize: 14 },
  iconStyle:{ height: 30, width: 30 }
});

export default ListItem;

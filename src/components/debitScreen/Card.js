import React, { useCallback, useMemo, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES } from "../../styles";
import {
  SvgVisaLogo,
  SvgAspireLogo,
  SvgShow,
  SvgRemove,
} from "../../assets/svg/svg";
import { useSelector } from "react-redux";
import {
  selectUserInfo,
  selectLoading,
} from "../../redux/selectors/userSelectors";

const { width, height } = Dimensions.get("screen");

const CARD_WIDTH = width - 48; //Ensures that the currency notation and the card's left end align just like the mock up
const CARD_HEIGHT = 0.6 * CARD_WIDTH; // Aspect Ratio of the card is 0.6 [h/w]

const CardNumberDisplay = ({ cardDisplayFlag, cardNumber }) => {
  // Split the card number into groups of 4 digits
  const groups = cardNumber.match(/.{1,4}/g) || [];

  // Mask all but the last group if show is false
  const maskedGroups = cardDisplayFlag
    ? groups
    : groups.map((group, index) =>
        index === groups.length - 1 ? group : "****"
      );

  // Concatenate the groups with spaces in between
  const displayString = maskedGroups.join(" ");

  return <Text style={styles.cardNumberText}>{displayString}</Text>;
};

const Card = React.memo(
  ({
    nameOnCard,
    cardNumber,
    cardValidThru,
    cardCVV,
    cardDetailsDisplayed,
    setCardNumberVisible,
  }) => {
    const userInfo = useSelector(selectUserInfo);
    const loading = useSelector(selectLoading);
    const card_number = userInfo?.card_info?.card_number;
    const thru = userInfo?.card_info?.thru;
    const cvv = userInfo?.card_info?.cvv;
    const weekly_limit = userInfo?.card_info?.weekly_limit;
    const amount_spent = userInfo?.card_info?.amount_spent;

    const [showCard, setShowCard] = useState(false);
    const handleShowCardNumberPress = useCallback(() => {
      setShowCard(!showCard);
    }, [showCard]);

    function CarNumberComponent() {
      const CardNumberDisplayMemoised = useMemo(
        () => (
          <CardNumberDisplay
            cardDisplayFlag={showCard}
            cardNumber={card_number || ""}
            loading={loading}
          />
        ),
        [card_number]
      );

      return <View>{CardNumberDisplayMemoised}</View>;
    }

    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
          <TouchableOpacity
            onPress={handleShowCardNumberPress}
            style={styles.cardButton}
          >
            {false ? <SvgShow /> : <SvgRemove />}
            <Text style={styles.cardButtonText}>
              {cardDetailsDisplayed ? "Hide card number" : "Show card number"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.topLogoContainer}>
            <Image
              style={styles.topLogo}
              source={require("../../assets/AspireLogo.png")}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cardDetails}>
            <View style={styles.userNameContainer}>
              <Text style={styles.userName}>{"Ajaykumar"}</Text>
            </View>
            <View style={styles.cardNumberContainer}>
              <View style={{ flex: 1 }}>
                <CarNumberComponent />
                {/* <CardNumberDisplay
                  cardDisplayFlag={true}
                  cardNumber={"123456778987"}
                /> */}
              </View>

              <View style={styles.validThruCvvContainer}>
                <Text style={styles.validThru}>{`Thru: ${thru}`}</Text>
                <Text style={styles.cvv}>
                  CVV: {showCard ? cvv : "* * *"}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomLogoContainer}>
            <Image
              style={styles.bottomLogo}
              source={require("../../assets/VisaLogo.png")}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.cardOverlay} />
      </View>
    );
  }
);
export default Card;

const styles = StyleSheet.create({
  iconImage: {
    height: 16,
    width: 16,
    marginRight: 6,
  },
  bullets: {
    height: 8,
    width: 8,
    borderRadius: 8,
    margin: 2,
    backgroundColor: "white",
  },
  shadow: {
    shadowColor: "#AAA",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 8,
  },
  cardContainer: {
    backgroundColor: "transparent",
    width: CARD_WIDTH,
    height: CARD_HEIGHT + 32,
    marginTop: -90,
  },
  cardImageContainer: {
    backgroundColor: "white",
    alignSelf: "flex-end",
    width: 151,
    height: 45,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  cardButton: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardButtonText: {
    paddingLeft: 5,
    color: COLORS.primaryGreen,
    fontSize: 12,
    fontWeight: "600",
  },
  card: {
    backgroundColor: COLORS.primaryGreen,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
    marginTop: -13,
    padding: 0,
    zIndex: 9999,
  },
  topLogoContainer: {
    marginTop: 24,
    height: 21,
    marginRight: 24,
    alignItems: "flex-end",
  },
  topLogo: { width: 74 },
  cardDetails: {
    height: CARD_HEIGHT - 89,
    flexDirection: "column",
    alignContent: "space-between",
  },
  userNameContainer: { flex: 1, justifyContent: "center", marginLeft: 24 },
  userName: { color: "white", fontWeight: "700", fontSize: 22 },
  cardNumberContainer: {
    flex: 1,
    marginLeft: 24,
    alignContent: "space-between",
  },
  validThruCvvContainer: { flexDirection: "row", alignItems: "center" },
  validThru: { color: "white", fontWeight: "bold", fontSize: 16 },
  cvv: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
    textAlign: "center",
  },
  bottomLogoContainer: {
    marginBottom: 24,
    marginRight: 24,
    height: 20,
    alignItems: "flex-end",
  },
  bottomLogo: { width: 59 },
  cardOverlay: {
    backgroundColor: "white",
    width: width,
    height: 85,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    marginBottom: 0,
    marginTop: -85,
    marginLeft: -24,
    marginRight: -24,
  },
  cardNumberText: {
    fontSize: SIZES.h2,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

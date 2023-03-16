import React, { useCallback, useMemo } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { COLORS } from '../../styles';
import { SvgVisaLogo, SvgAspireLogo, SvgShow, SvgRemove} from "../../assets/svg/svg";
// import { Button } from 'react-native-elements';
// import { useDispatch, useSelector, useStore } from 'react-redux';
// import { selectAppColorSolid } from '../store/slices/appVariablesSlice';
// import { selectCardCVV, selectCardNumber, selectCardNumberVisible, selectCardValidThru, selectNameOnCard, setCardNumberVisible } from '../store/slices/debitCardSlice';

const {width, height} = Dimensions.get('screen');

const CARD_WIDTH = (width-48);  //Ensures that the currency notation and the card's left end align just like the mock up
const CARD_HEIGHT = 0.6*CARD_WIDTH; // Aspect Ratio of the card is 0.6 [h/w]

const CardNumberDisplay = ({ cardDisplayFlag, cardNumber }) => {
    const cardNumberParts = cardNumber.match(/.{1,4}/g) || [];
  
    if (!cardDisplayFlag || !cardNumber) {
      return (
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginLeft: -4, flexDirection: 'row', width: 50, alignItems:'center'}}>
            {[1, 2, 3, 4].map((_, i) => (
              <View key={i} style={styles.bullets}></View>
            ))}
          </View>
          <View style={{ marginLeft: 20, flexDirection: 'row', width: 50 , alignItems:'center'}}>
            {[1, 2, 3, 4].map((_, i) => (
              <View key={i} style={styles.bullets}></View>
            ))}
          </View>
          <View style={{ marginLeft: 20, flexDirection: 'row', marginRight: 20, width: 50, alignItems:'center' }}>
            {[1, 2, 3, 4].map((_, i) => (
              <View key={i} style={styles.bullets}></View>
            ))}
          </View>
          <Text style={{ color: 'white', fontWeight: '500', fontSize: 16, width: 50, letterSpacing: 2, textAlign:'center' }}>{cardNumberParts[cardNumberParts.length - 1]}</Text>
        </View>
      );
    }
  
    return (
      <View style={{ flexDirection: 'row' }}>
        {cardNumberParts.map((part, i) => (
          <Text key={i} style={{ color: 'white', fontWeight: '500', fontSize: 16, marginLeft: i > 0 ? 20 : 0, width: 50, letterSpacing: 2 }}>
            {part}
          </Text>
        ))}
      </View>
    );
  };
  const CardView = React.memo(({ nameOnCard, cardNumber, cardValidThru, cardCVV, cardDetailsDisplayed, setCardNumberVisible }) => {
    const handleShowCardNumberPress = useCallback(() => {
      setCardNumberVisible({ cardNumberVisible: !cardDetailsDisplayed });
    }, [cardDetailsDisplayed, setCardNumberVisible]);
  
    const cardNumberDisplay = useMemo(() => <CardNumberDisplay cardDetailsDisplayed={false} cardNumber={cardNumber} />, [cardNumber]);
  
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
          <TouchableOpacity onPress={handleShowCardNumberPress} style={styles.cardButton}>
            {false ? <SvgShow /> : <SvgRemove />}
            <Text style={styles.cardButtonText}>{cardDetailsDisplayed ? 'Hide card number' : 'Show card number'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.topLogoContainer}>
            <Image style={styles.topLogo} source={require('../../assets/AspireLogo.png')} resizeMode='contain' />
          </View>
          <View style={styles.cardDetails}>
            <View style={styles.userNameContainer}>
              <Text style={styles.userName}>{"Ajaykumar"}</Text>
            </View>
            <View style={styles.cardNumberContainer}>
                <View style={{flex:1}}>
                <CardNumberDisplay cardDisplayFlag={true} cardNumber={"123456778987"}/>
                </View>
             
              <View style={styles.validThruCvvContainer}>
                <Text style={styles.validThru}>{`Thru: ${cardValidThru}`}</Text>
                <Text style={styles.cvv}>CVV: {cardDetailsDisplayed ? cardCVV : '* * *'}</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomLogoContainer}>
            <Image style={styles.bottomLogo} source={require('../../assets/VisaLogo.png')} resizeMode='contain' />
          </View>
        </View>
        <View style={styles.cardOverlay} />
      </View>
    );
  });
export default CardView

const styles = StyleSheet.create({
    iconImage: {
        height: 16,
        width: 16,
        marginRight: 6,
    },
    bullets:{
        height: 8,
        width: 8,
        borderRadius: 8,
        margin: 2,
        backgroundColor: 'white',
    },
    shadow:{
        shadowColor: '#AAA',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.5,
        elevation: 8,
    },
    cardContainer:{ backgroundColor: 'transparent', width: CARD_WIDTH, height: CARD_HEIGHT + 32, marginTop: -90 },
    cardImageContainer:{ backgroundColor: 'white', alignSelf: 'flex-end', width: 151, height: 45,borderTopRightRadius: 6, borderTopLeftRadius: 6 },
    cardButton:{flex:0.8,flexDirection:'row',justifyContent:'center',alignItems:'center'},
    cardButtonText:{
        paddingLeft:5,
        color: COLORS.primaryGreen,
        fontSize: 12,
        fontWeight: "600",
    },
    card:{backgroundColor: COLORS.primaryGreen, width: CARD_WIDTH, height: CARD_HEIGHT, borderRadius: 10, marginTop: -13, padding: 0,  zIndex: 9999},
    topLogoContainer:{marginTop: 24, height: 21, marginRight: 24, alignItems:'flex-end'},
    topLogo:{width: 74},
    cardDetails:{height: CARD_HEIGHT-89, flexDirection:'column', alignContent:'space-between'},
    userNameContainer:{flex: 1, justifyContent: 'center', marginLeft: 24},
    userName:{color:'white', fontWeight:'700', fontSize:22},
    cardNumberContainer:{flex: 1, marginLeft: 24, alignContent: 'space-between'},
    validThruCvvContainer:{flexDirection: 'row'},
    validThru:{color:'white', fontWeight:'400', fontSize:16},
    cvv:{color:'white', fontWeight:'400', fontSize:15, marginLeft: 10},
    bottomLogoContainer:{marginBottom: 24, marginRight: 24, height: 20, alignItems: 'flex-end'},
    bottomLogo:{width: 59},
    cardOverlay:{backgroundColor: 'white', width: width, height: 85, borderTopRightRadius: 18, borderTopLeftRadius: 18, marginBottom: 0, marginTop: -85, marginLeft: -24, marginRight: -24}

})

import { useNavigation } from "@react-navigation/native";

export const navigateTo =(route)=>{
    const navigation = useNavigation();
    navigation.navigate(route)

}
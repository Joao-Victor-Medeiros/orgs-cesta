import {SafeAreaView, StatusBar, View} from 'react-native';
import Cesta from "./src/telas/Cesta/index";
import {Montserrat_400Regular, Montserrat_700Bold, useFonts} from "@expo-google-fonts/montserrat";
import mock from './src/mocks/cesta'


export default function App() {
    const [fontecarregada] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold
    });

    if(!fontecarregada) {
        return <View />
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <StatusBar/>
            <Cesta {...mock}/>
        </SafeAreaView>
    );
}
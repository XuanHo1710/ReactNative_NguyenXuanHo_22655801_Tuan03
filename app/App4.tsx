import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
    return (
        <SafeAreaView style={styles.container} >
            <LinearGradient
                colors={['#e0f7fa', '#e0f7fa', '#45bfff']}
                style={styles.container}
            >
                <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ flex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontWeight: 700, paddingTop: 10, fontSize: 50 }}>CODE</Text>
                    </View>
                    <View style={{ flex: 2, alignItems: 'center', padding: 20, gap: 50 }}>
                        <Text style={{ fontWeight: 600, fontSize: 27 }}>VERIFICATION</Text>
                        <Text style={{ textAlign: "center", fontWeight: 600 }}>Enter online password sent on ++849092605798</Text>
                    </View>
                    <View style={{ flex: 1, gap: 30 }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <View style={{ border: "2px solid #000", width: 50, height: 50 }}></View>
                            <View style={{ border: "2px solid #000", width: 50, height: 50 }}></View>
                            <View style={{ border: "2px solid #000", width: 50, height: 50 }}></View>
                            <View style={{ border: "2px solid #000", width: 50, height: 50 }}></View>
                            <View style={{ border: "2px solid #000", width: 50, height: 50 }}></View>
                            <View style={{ border: "2px solid #000", width: 50, height: 50 }}></View>
                        </ View>
                        <TouchableOpacity style={{ width: 300, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, backgroundColor: "yellow" }} > VERIFY CODE </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, display: "flex", gap: 20, flexDirection: "row" }}>

                    </View>
                </View>
            </ LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    }
});

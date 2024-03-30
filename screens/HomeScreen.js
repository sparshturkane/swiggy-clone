import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function HomeScreen() {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-red-500">Home Screen</Text>
            <StatusBar style="auto" />
        </View>
    );
}

export default HomeScreen;
import { PermissionsAndroid, Platform } from "react-native";
 const CameraPermission = async () => {
    try {
        if(Platform.OS === "ios") {
            return true;
        }
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "App Camera Permission",
                message: "App needs access to your camera ",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.warn(err);
    }
};
export default CameraPermission
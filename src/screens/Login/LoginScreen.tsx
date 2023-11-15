import React from "react";
import Box from "../../components/Box";
import FastImage from "react-native-fast-image";
import { Images } from "@/components";

const LoginScreen = () => {
    const { LogoLogin } = Images;

    return <Box><FastImage source={LogoLogin} /></Box>
}

export default React.memo(LoginScreen);
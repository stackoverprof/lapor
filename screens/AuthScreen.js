import React from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import { css } from '@emotion/native'

import RaisedButton from '../components/atomic/RaisedButton'
import img_googleIcon from '../assets/img/icons/google.png'
import img_logo from '../assets/img/logo-lapor.png'
import img_thief from '../assets/img/illus/thief.png'

const Auth = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <View style={styles.containerLeft}>
                <Image source={img_logo} style={styles.logo} />
            </View>

            <ImageBackground 
                source={img_thief} 
                style={styles.lower} 
                imageStyle={[styles.lowerbg, {resizeMode: 'stretch', top: undefined, left: undefined}]}
            >
                <RaisedButton style={styles.authButton} wide iconsrc={img_googleIcon} size={20}>Sign In with Google</RaisedButton>
            </ImageBackground>
        </View>
    )
}

export default Auth

const styles = {
    screen: css`
        flex: 1;
        justify-content: space-between;
        align-items: center;
        padding-top: 140px;
    `,
    button: css`
        margin: 6px 0;
    `,
    authButton: css`
        margin: 6px 0;
    `,
    logo: css`
        width: 152px;
        height: 47.2px;
    `,
    containerLeft: css`
        width: 100%;
        padding: 0 48px;
        justify-content: flex-start;
    `,
    lower: css`
        position: relative;
        padding-bottom: 32px;
        flex: 1;
        max-height: 260px;
        height: 270px;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
    `,
    lowerbg: css`
        position: absolute;
        width: 375px;
        align-self: flex-end;
    `,
}
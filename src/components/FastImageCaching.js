import React from 'react'
import FastImage from 'react-native-fast-image'
import { DEFAULT_FAILED_IMAGE } from '../constants/helper'


const FastImageCaching = ({ styles, image, isNotContain }) => {
    return (
        <FastImage
            style={styles}
            source={{
                uri: image || DEFAULT_FAILED_IMAGE,
                priority: FastImage.priority.normal,
            }}
            resizeMode={isNotContain ? FastImage.resizeMode.cover : FastImage.resizeMode.contain}
        />
    )
}

export default FastImageCaching
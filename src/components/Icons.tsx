import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

type IconsProps = {
    name: string;
};

const Icons: React.FC<IconsProps> = ({ name }) => {
    switch (name) {
        case 'circle':
            return <Icon name="circle" size={30} color="#F7CD2E" />;
        case 'cross':
            return <Icon name="times" size={30} color="#38cc77" />;
        default:
            return <Icon name="pencil" size={30} color="#38CC77" />;
    }
};

export default Icons;

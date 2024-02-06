import { Appbar } from 'react-native-paper'
import React from 'react';
import { getHeaderTitle } from '@react-navigation/elements'

function MainAppbar(props) {
    const title = getHeaderTitle(props.options, props.route.name)
    console.log(props.navigation);
    return (
        <Appbar.Header style={{ backgroundColor: props.backgroundColor }}>
            {props.back ? <Appbar.BackAction onPress={() => props.navigation.goBack()} /> : null}
            <Appbar.Content title={title} />
            {props.back ? null : <Appbar.Action icon={props.icon} onPress={props.getUserPos} />}
            {props.back ? null : <Appbar.Action icon='cog' onPress={() => props.navigation.navigate('Settings')} />}
        </Appbar.Header>
    );
}

export default MainAppbar;
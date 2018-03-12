import { Component } from 'react';
import { Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import HomeIcon from '../Assets/home.png'
import ProfileIcon from '../Assets/user.png'

export class Tabs extends Component{
    constructor(props){
        super(props);
            this.state={
                selectedTab: 'home'
            }
        }
    
    render(){
        return(
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={HomeIcon} />}
                    renderSelectedIcon={() => <Image source={HomeIcon} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Text>Mi Pantalla de inicio</Text>
                    {homeView}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    renderIcon={() => <Image source={ProfileIcon} />}
                    renderSelectedIcon={() => <Image source={ProfileIconn} />}
                    renderBadge={() => <CustomBadgeView />}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <Text>Mi Pantalla de Perfil</Text>
                    {profileView}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
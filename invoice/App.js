import React, { Component } from 'react';
import { 
  Container, Header, Title,
   Content, List, ListItem,
    Footer, FooterTab, 
    Button, Left, Right, 
    Body, Icon, Text ,
    Switch, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';


export default class App extends Component {

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
        <Header >
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Invoice</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="funnel"/>
            </Button>
          </Right>
        </Header>
        <Content>
        <List>

        <ListItem icon>
          <Body>
            <Text>Kilgore Trou</Text>
            <Text>INV-0001</Text>
            <Text>feb6 2018</Text>
          </Body>  
          <Right>
            <Text>$4000</Text>
          </Right>
          <Right>
            <Text>paid</Text>
          </Right>
        </ListItem>

        <ListItem icon>
        <Body>
          <Text>Zachary Bowman</Text>
          <Text>INV-0001</Text>
          <Text>feb6 2018</Text>
        </Body>  
        <Right>
          <Text>$4000</Text>
          
        </Right>
      </ListItem>

      </List>
        </Content>
      
      </Container>
      </StyleProvider>
    );
  }
}
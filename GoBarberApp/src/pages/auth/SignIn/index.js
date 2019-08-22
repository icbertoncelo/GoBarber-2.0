import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Image } from 'react-native';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from '../styles';

import Background from '~/components/Background';
import logo from '~/assets/logo.png';

export default function SignIn({ navigation }) {
  const emailRef = useRef();

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Email"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            blurOnSubmit={false}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Password"
            ref={emailRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            // blurOnSubmit={false}
          />

          <SubmitButton onPress={() => {}}>Access</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Create a new account</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

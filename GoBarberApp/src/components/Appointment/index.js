import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { parseISO, formatRelative } from 'date-fns';
import en from 'date-fns/locale/en-US';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ data, onCancel }) {
  const { provider, date, past, cancelable, canceled_at } = data;

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(date), new Date(), {
      locale: en,
      addSuffix: true,
    });
  }, [date]);

  return (
    <Container past={past}>
      <Left>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatars/50/${provider.name}.png`,
          }}
        />

        <Info>
          <Name>{provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {cancelable && !canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}

Appointment.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string,
    past: PropTypes.bool,
    cancelable: PropTypes.bool,
    canceled_at: PropTypes.string,
    provider: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
};

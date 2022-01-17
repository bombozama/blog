/* eslint-disable max-len */
import React from 'react';
import { useAuth } from '@admin/features/authentication/context/auth.context';
import {
  makeStyles,
  NeutralColors,
  Persona,
  PersonaInitialsColor,
  PersonaSize,
  PrimaryButton,
  Stack
} from '@fluentui/react';
import { useHistory } from 'react-router';
import { userPersonaText } from '@admin/helpers/misc';
import logo from '../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'relative',
    display: 'flex',
    background: NeutralColors.black,
    width: '100%'
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  dropdownRight: {
    right: '0 !important',
    left: 'auto !important'
  },
  divider: {
    flexGrow: 1
  },
  button: {
    color: `${theme.palette.white} !important`,
    backgroundColor: NeutralColors.black,
    borderColor: NeutralColors.black,
  }
}));

const Header = () => {
  const { user, logOut } = useAuth();
  const history = useHistory();
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <Stack
        horizontal
        horizontalAlign='space-between'
        style={{ width: '100%' }}
      >
        <Stack horizontal>
          <PrimaryButton
            className={styles.button}
            menuIconProps={{ style: { display: 'none' } }}
            style={{ height: 48, color: NeutralColors.white }}
            href='/admin'
          >
            <img
              src={logo}
              alt="Wheel the World"
              className="wtw-logo inside"
          />
          </PrimaryButton>
        </Stack>
        <Stack horizontal>
          <PrimaryButton
            className={styles.button}
            menuIconProps={{ style: { display: 'none' } }}
            style={{ height: 48 }}
            href='https://gowheeltheworld.com'
            target='_blank'
          >WTW Website</PrimaryButton>
          <PrimaryButton
            className={styles.button}
            menuIconProps={{ style: { display: 'none' } }}
            style={{ height: 48, minWidth: 0, padding: '0 12px' }}
            onRenderIcon={() => (
              <Persona
                size={PersonaSize.size32}
                initialsColor={PersonaInitialsColor.rust}
                text={userPersonaText(user)}
                hidePersonaDetails
              />
            )}
            menuProps={{
              items: [
                {
                  key: 'profile',
                  text: 'Profile',
                  onClick: () => {
                    history.push(`/users/edit/${user.id}`);
                  }
                },
                {
                  key: 'logout',
                  text: 'Log Out',
                  onClick: () => {
                    logOut.execute();
                  }
                }
              ]
            }}
          />
        </Stack>
      </Stack>
    </header>
  );
};

export default Header;

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
            style={{ height: 48 }}
            href='/admin'
          >
            <svg viewBox="0 0 124.81 18.83" className='wtw-logo' aria-label='Wheel the World'>
              <polygon fill="currentColor" points="35.23 12.41 34.21 5.46 32.15 5.46 31.21 12.41 30.18 5.46 28.13 5.46 30.31 18.45 32.18 18.45 33.22 11.3 34.34 18.45 36.21 18.45 38.24 5.46 36.18 5.46 35.23 12.41" />
              <polygon fill="currentColor" points="44.22 10.97 41.85 10.97 41.85 5.46 39.89 5.46 39.89 18.45 41.85 18.45 41.85 12.94 44.22 12.94 44.22 18.45 46.18 18.45 46.18 5.46 44.22 5.46 44.22 10.97" />
              <polygon fill="currentColor" points="47.93 18.45 53.51 18.45 53.51 16.48 49.89 16.48 49.89 12.93 52.53 12.93 52.53 10.96 49.89 10.96 49.89 7.42 53.51 7.42 53.51 5.45 47.93 5.45 47.93 18.45" />
              <polygon fill="currentColor" points="54.86 18.45 60.44 18.45 60.44 16.48 56.82 16.48 56.82 12.93 59.46 12.93 59.46 10.96 56.82 10.96 56.82 7.42 60.44 7.42 60.44 5.45 54.86 5.45 54.86 18.45" />
              <polygon fill="currentColor" points="63.75 5.46 61.79 5.46 61.79 18.45 67.13 18.45 67.13 16.5 63.75 16.5 63.75 5.46" />
              <polygon fill="currentColor" points="90.28 12.39 89.3 5.76 87.34 5.76 86.44 12.39 85.47 5.76 83.51 5.76 85.58 18.14 87.37 18.14 88.36 11.33 89.43 18.14 91.2 18.14 93.14 5.76 91.18 5.76 90.28 12.39" />
              <path fill="currentColor" d="M97.38,5.61a2.94,2.94,0,0,0-2.95,3v6.76a2.88,2.88,0,0,0,.85,2.09,3,3,0,0,0,5.06-2.09V8.57a3,3,0,0,0-3-3Zm1,9.7a1,1,0,0,1-.31.75,1.09,1.09,0,0,1-1.52,0,1,1,0,0,1-.32-.75V8.53a1,1,0,0,1,.32-.76,1.07,1.07,0,0,1,1.83.76Z" />
              <path fill="currentColor" d="M107.87,10.52V8.72a3.12,3.12,0,0,0-.64-2.1,2.86,2.86,0,0,0-2.29-.86h-3V18.14h1.87V13.48h1.24l1.13,4.66h2l-1.38-5.4A2.89,2.89,0,0,0,107.87,10.52Zm-1.82,0a1.06,1.06,0,0,1-.31.76,1,1,0,0,1-.76.31h-1.12v-4H105a1,1,0,0,1,1.07,1.08Z" />
              <polygon fill="currentColor" points="111.72 5.76 109.86 5.76 109.86 18.14 114.94 18.14 114.94 16.29 111.72 16.29 111.72 5.76" />
              <path fill="currentColor" d="M119.16,5.75h-2.93V18.14h2.93a2.8,2.8,0,0,0,2.07-.87,2.83,2.83,0,0,0,.86-2.09V8.71a2.88,2.88,0,0,0-.85-2.09A2.8,2.8,0,0,0,119.16,5.75Zm1.12,9.47A1.06,1.06,0,0,1,120,16a1,1,0,0,1-.75.33h-1.13V7.66h1.13A1,1,0,0,1,120,8a1.07,1.07,0,0,1,.31.76Z" />
              <polygon fill="currentColor" points="69.82 9.08 70.83 9.08 70.83 15.83 71.96 15.83 71.96 9.08 72.97 9.08 72.97 7.95 69.82 7.95 69.82 9.08" />
              <polygon fill="currentColor" points="75.78 11.33 74.66 11.33 74.66 7.95 73.53 7.95 73.53 15.83 74.66 15.83 74.66 12.45 75.78 12.45 75.78 15.83 76.91 15.83 76.91 7.95 75.78 7.95 75.78 11.33" />
              <polygon fill="currentColor" points="77.47 15.83 80.29 15.83 80.29 14.7 78.6 14.7 78.6 12.45 80.01 12.45 80.01 11.33 78.6 11.33 78.6 9.08 80.29 9.08 80.29 7.95 77.47 7.95 77.47 15.83" />
              <polygon fill="currentColor" points="11.59 7.09 13.88 4.16 16.7 10.61 17.14 9.68 19.47 5.85 20.12 6.29 20.12 6.29 20.91 6.86 21.44 6.07 26.7 18.45 27.91 18.45 21.56 3.99 20.6 5.51 19.01 4.42 16.74 8.25 14.13 1.89 10.82 6.54 9.83 11.51 8 8.06 2.71 18.5 3.89 18.5 8.06 10.2 12.34 18.5 13.56 18.5 10.48 12.72 11.59 7.09" />
              <path fill="currentColor" d="M19.36,11.71A.74.74,0,1,0,20.1,11,.74.74,0,0,0,19.36,11.71Z" />
              <path fill="currentColor" d="M20.84,17,21,14.67a.44.44,0,0,0-.13-.32c-.08-.14-.43-.13-.43-.13L19,14.3l.78-.89A.68.68,0,0,0,20,13a.47.47,0,0,0-.26-.42l-2-1.18c-.07-.07-.23-.05-.23-.05a.6.6,0,0,0-.3.13l-1,.89a.44.44,0,0,0,.31.75.43.43,0,0,0,.34-.16l.69-.62.62.36-1,1.2a2.19,2.19,0,0,0-1.24.59,2.29,2.29,0,0,0,1.56,4,2.3,2.3,0,0,0,2.29-2.3,2.22,2.22,0,0,0-.23-1h0l.55,0L20,17a.45.45,0,1,0,.89,0Zm-3.37.72A1.49,1.49,0,0,1,16,16.19a1.44,1.44,0,0,1,.28-.87,2.62,2.62,0,0,1,.22-.25,1.51,1.51,0,0,1,1-.37,1.49,1.49,0,1,1,0,3Z" />
            </svg>
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

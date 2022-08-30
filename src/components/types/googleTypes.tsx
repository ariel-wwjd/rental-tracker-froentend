/* eslint-disable camelcase */

interface userGoogle {
  family_name: string;
  given_name: string;
  email: string;
  picture: string;
  sub: string;
}

interface userGoogleAdapted {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  googleAccountId: string;
}

export type {
  userGoogle,
  userGoogleAdapted,
};

export const AccessLevel = {
  USER: 1,
  ADMIN: 2,
};

export type AccessLevelType = typeof AccessLevel[keyof typeof AccessLevel];

export type UserType = {
  userUUID: string;

  userName: string;

  userEmailId: string;

  userPassword: string;

  accessLevel: AccessLevelType;
};

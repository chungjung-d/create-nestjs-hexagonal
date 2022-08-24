const accessLevelType = {
  USER: 1,
  ADMIN: 2,
};

export type accessLevelType =
  typeof accessLevelType[keyof typeof accessLevelType];

export type UserType = {
  userUUID: string;

  userName: string;

  userEmailId: string;

  userPassword: string;

  accessLevel: accessLevelType;
};

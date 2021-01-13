export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  TalkPlace: undefined;
  Contacts: undefined;
};

export type MParamList = {
  Camera: undefined;
  Talks: undefined;
  Status: undefined;
};

export type ContactsParamList = {
  ContactsScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imgUri: String;
  status: String;
}

export type Message = {
  id: String;
  content: String;
  ctime: String;
  user: User;
}

export type TalkPlace = {
  id: String;
  users: User[];
  lastMessage: Message;
}
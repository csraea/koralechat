export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MParamList = {
  Camera: undefined;
  Talks: undefined;
  Status: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imgUri: String;
}

export type Message = {
  id: String;
  content: String;
  ctime: String;
}

export type TalkPlace = {
  id: String;
  users: [User];
  lastMessage: Message;
}
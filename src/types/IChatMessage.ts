export interface IChatMessage {
  time?: Date;
  message?: string;
  userAvatar?: string;
  username?: string;
  isOwner?: boolean;
}
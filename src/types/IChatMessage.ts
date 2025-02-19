export interface IChatMessage {
  id: string;
  time: number;
  message: string;
  userAvatar?: string;
  username?: string;
  isOwner?: boolean;
}
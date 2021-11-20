import type { ComponentType } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface JitsiMeetUserInfo {
  displayName?: string;
  email?: string;
  avatar?: string;
}

export interface JitsiMeetConferenceOptions {
  room: string;
  serverUrl?: string;
  userInfo?: JitsiMeetUserInfo;
  token?: string;
  screenSharingEnabled?: boolean;
  conferenceTimerEnabled?: boolean;
  closeCaptionsEnabled?: boolean;
  addPeopleEnabled?: boolean;
  calendarEnabled?: boolean;
  inviteEnabled?: boolean;
  meetingPasswordEnabled?: boolean;
  recordingEnabled?: boolean;
  liveStreamingEnabled?: boolean;
  raiseHandEnabled?: boolean;
  serverUrlChangeEnabled?: boolean;
  videoShareEnabled?: boolean;
  securityOptionsEnabled?: boolean;
  chatEnabled?: boolean;
  lobbyModeEnabled?: boolean;
  pipEnabled?: boolean;
}

export interface ConferenceJoinedEvent {
  url: string;
}

export interface ConferenceTerminatedEvent extends ConferenceJoinedEvent {
  error?: string;
}

export interface JitsiMeetViewProps {
  options: JitsiMeetConferenceOptions;
  style?: StyleProp<ViewStyle>;
  onConferenceTerminated?: (e: ConferenceTerminatedEvent) => void;
  onConferenceJoined?: (e: ConferenceJoinedEvent) => void;
  onConferenceWillJoin?: (e: ConferenceJoinedEvent) => void;
}

export interface JitsiMeetType {
  launch: (options: JitsiMeetConferenceOptions) => void;
}

export type JitsiMeetViewType = ComponentType<JitsiMeetViewProps>;

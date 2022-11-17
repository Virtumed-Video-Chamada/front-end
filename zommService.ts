// import { Zoom } from '@awesome-cordova-plugins/zoom';

// let zoomService = Zoom;

// // Initialize Zoom SDK, need to be called when app fired up.
// zoomService.initialize(API_KEY, API_SECRET)
//   .then((success: any) => console.log(success))
//   .catch((error: any) => console.log(error));

// // Log user in with Zoom username and password.
// zoomService.login(userName, password)
//   .then((success: any) => console.log(success))
//   .catch((error: any) => console.log(error));

// // Log user out.
// zoomService.logout()
//   .then((success: boolean) => console.log(success))
//   .catch((error: any) => console.log(error));

// // Check whether user is logged in.
// zoomService.isLoggedIn()
//   .then((success: boolean) => console.log(success))
//   .catch((error: any) => console.log(error));

// // meeting options (Only available for Android)
// let options = {
// "no_driving_mode":true,
// "no_invite":true,
// "no_meeting_end_message":true,
// "no_titlebar":false,
// "no_bottom_toolbar":false,
// "no_dial_in_via_phone":true,
// "no_dial_out_to_phone":true,
// "no_disconnect_audio":true,
// "no_share":true,
// "no_audio":true,
// "no_video":true,
// "no_meeting_error_message":true
// };

// // Join meeting.
// zoomService.joinMeeting(meetingNumber, meetingPassword, displayName, options)
//   .then((success: any) => console.log(success))
//   .catch((error: any) => console.log(error));

// // Start an existing meeting for non-login user.
// zoomService.startMeetingWithZAK(meetingNumber, displayName, zoomToken, zoomAccessToken, userId, options)
//   .then((success: any) => console.log(success))
//   .catch((error: any) => console.log(error));

// // Start an existing meeting for logged in user.
// zoomService.startMeeting(meetingNumber, vanityId, options)
//   .then((success: any) => console.log(success))
//   .catch((error: any) => console.log(error));

// // Start an instant meeting for logged in user.
// zoomService.startInstantMeeting()
//   .then((success: any) => console.log(success))
//   .catch((error: any) => console.log(error));

// // Set language.
// zoomService.setLanguage("pt-BR")
//   .then((success: any) => console.log(success))
//   .catch((error: any) => console.log(error));
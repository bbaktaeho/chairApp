import PushNotification from "react-native-push-notification";

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
    // notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
  senderID: "YOUR GCM (OR FCM) SENDER ID",

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   */
  requestPermissions: true,
});

export default () => {
  PushNotification.localNotification({
    // /* Android Only Properties */
    // id: '0', // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
    // ticker: "My Notification Ticker", // (optional)
    // autoCancel: true, // (optional) default: true
    // largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
    // smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
    // bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
    // subText: "This is a subText", // (optional) default: none
    // color: "red", // (optional) default: system default
    // vibrate: true, // (optional) default: true
    // vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
    // tag: 'some_tag', // (optional) add tag to message
    // group: "group", // (optional) add group to message
    // ongoing: false, // (optional) set whether this is an "ongoing" notification
    // priority: "high", // (optional) set notification priority, default: high
    // visibility: "private", // (optional) set notification visibility, default: private
    // importance: "high", // (optional) set notification importance, default: high

    // /* iOS only properties */
    // alertAction: // (optional) default: view
    // category: // (optional) default: null
    // userInfo: // (optional) default: null (object containing additional notification data)

    title: "바른자세로 앉아 주세요", // (optional)
    message: "바른자세로 앉아 주세요", // (required)
  });
};

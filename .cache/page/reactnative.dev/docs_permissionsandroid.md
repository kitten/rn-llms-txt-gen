# PermissionsAndroid

### Project with Native Code Required

The following section only applies to projects with native code exposed. If you are using the managed Expo workflow, see the guide on Permissions in the Expo documentation for the appropriate alternative.

`PermissionsAndroid` provides access to Android M's new permissions model. The so-called "normal" permissions are granted by default when the application is installed as long as they appear in `AndroidManifest.xml`. However, "dangerous" permissions require a dialog prompt. You should use this module for those permissions.

On devices before SDK version 23, the permissions are automatically granted if they appear in the manifest, so `check` should always result to `true` and `request` should always resolve to `PermissionsAndroid.RESULTS.GRANTED`.

If a user has previously turned off a permission that you prompt for, the OS will advise your app to show a rationale for needing the permission. The optional `rationale` argument will show a dialog prompt only if necessary - otherwise the normal permission prompt will appear.

### Example

### Permissions that require prompting the user

Available as constants under `PermissionsAndroid.PERMISSIONS`:

* `READ_CALENDAR`: 'android.permission.READ\_CALENDAR'
* `WRITE_CALENDAR`: 'android.permission.WRITE\_CALENDAR'
* `CAMERA`: 'android.permission.CAMERA'
* `READ_CONTACTS`: 'android.permission.READ\_CONTACTS'
* `WRITE_CONTACTS`: 'android.permission.WRITE\_CONTACTS'
* `GET_ACCOUNTS`: 'android.permission.GET\_ACCOUNTS'
* `ACCESS_FINE_LOCATION`: 'android.permission.ACCESS\_FINE\_LOCATION'
* `ACCESS_COARSE_LOCATION`: 'android.permission.ACCESS\_COARSE\_LOCATION'
* `ACCESS_BACKGROUND_LOCATION`: 'android.permission.ACCESS\_BACKGROUND\_LOCATION'
* `RECORD_AUDIO`: 'android.permission.RECORD\_AUDIO'
* `READ_PHONE_STATE`: 'android.permission.READ\_PHONE\_STATE'
* `CALL_PHONE`: 'android.permission.CALL\_PHONE'
* `READ_CALL_LOG`: 'android.permission.READ\_CALL\_LOG'
* `WRITE_CALL_LOG`: 'android.permission.WRITE\_CALL\_LOG'
* `ADD_VOICEMAIL`: 'com.android.voicemail.permission.ADD\_VOICEMAIL'
* `USE_SIP`: 'android.permission.USE\_SIP'
* `PROCESS_OUTGOING_CALLS`: 'android.permission.PROCESS\_OUTGOING\_CALLS'
* `BODY_SENSORS`: 'android.permission.BODY\_SENSORS'
* `SEND_SMS`: 'android.permission.SEND\_SMS'
* `RECEIVE_SMS`: 'android.permission.RECEIVE\_SMS'
* `READ_SMS`: 'android.permission.READ\_SMS'
* `RECEIVE_WAP_PUSH`: 'android.permission.RECEIVE\_WAP\_PUSH'
* `RECEIVE_MMS`: 'android.permission.RECEIVE\_MMS'
* `READ_EXTERNAL_STORAGE`: 'android.permission.READ\_EXTERNAL\_STORAGE'
* `WRITE_EXTERNAL_STORAGE`: 'android.permission.WRITE\_EXTERNAL\_STORAGE'
* `BLUETOOTH_CONNECT`: 'android.permission.BLUETOOTH\_CONNECT'
* `BLUETOOTH_SCAN`: 'android.permission.BLUETOOTH\_SCAN'
* `BLUETOOTH_ADVERTISE`: 'android.permission.BLUETOOTH\_ADVERTISE'
* `ACCESS_MEDIA_LOCATION`: 'android.permission.ACCESS\_MEDIA\_LOCATION'
* `ACCEPT_HANDOVER`: 'android.permission.ACCEPT\_HANDOVER'
* `ACTIVITY_RECOGNITION`: 'android.permission.ACTIVITY\_RECOGNITION'
* `ANSWER_PHONE_CALLS`: 'android.permission.ANSWER\_PHONE\_CALLS'
* `READ_PHONE_NUMBERS`: 'android.permission.READ\_PHONE\_NUMBERS'
* `UWB_RANGING`: 'android.permission.UWB\_RANGING'
* `BODY_SENSORS_BACKGROUND`: 'android.permission.BODY\_SENSORS\_BACKGROUND'
* `READ_MEDIA_IMAGES`: 'android.permission.READ\_MEDIA\_IMAGES'
* `READ_MEDIA_VIDEO`: 'android.permission.READ\_MEDIA\_VIDEO'
* `READ_MEDIA_AUDIO`: 'android.permission.READ\_MEDIA\_AUDIO'
* `POST_NOTIFICATIONS`: 'android.permission.POST\_NOTIFICATIONS'
* `NEARBY_WIFI_DEVICES`: 'android.permission.NEARBY\_WIFI\_DEVICES'
* `READ_VOICEMAIL`: 'com.android.voicemail.permission.READ\_VOICEMAIL',
* `WRITE_VOICEMAIL`: 'com.android.voicemail.permission.WRITE\_VOICEMAIL',

### Result strings for requesting permissions

Available as constants under `PermissionsAndroid.RESULTS`:

* `GRANTED`: 'granted'
* `DENIED`: 'denied'
* `NEVER_ASK_AGAIN`: 'never\_ask\_again'

## Reference

## Methods

### `check()`

```
static check(permission: Permission): Promise<boolean>;
```

Returns a promise resolving to a boolean value as to whether the specified permissions has been granted.

**Parameters:**

* Name
  permission
* Type
  string
* Required
  Yes
* Description
  The permission to check for.

### `request()`

```
static request(
  permission: Permission,
  rationale?: Rationale,
): Promise<PermissionStatus>;
```

Prompts the user to enable a permission and returns a promise resolving to a string value (see result strings above) indicating whether the user allowed or denied the request or does not want to be asked again.

If `rationale` is provided, this function checks with the OS whether it is necessary to show a dialog explaining why the permission is needed (https\://developer.android.com/training/permissions/requesting.html#explain) and then shows the system permission dialog.

**Parameters:**

|Name|Type|Required|Description|
|-|-|-|-|
|permission|string|Yes|The permission to request.|
|rationale|object|No|See `rationale` below.|

**Rationale:**

|Name|Type|Required|Description|
|-|-|-|-|
|title|string|Yes|The title of the dialog.|
|message|string|Yes|The message of the dialog.|
|buttonPositive|string|Yes|The text of the positive button.|
|buttonNegative|string|No|The text of the negative button.|
|buttonNeutral|string|No|The text of the neutral button.|

### `requestMultiple()`

```
static requestMultiple(
  permissions: Permission[],
): Promise<{[key in Permission]: PermissionStatus}>;
```

Prompts the user to enable multiple permissions in the same dialog and returns an object with the permissions as keys and strings as values (see result strings above) indicating whether the user allowed or denied the request or does not want to be asked again.

**Parameters:**

* Name
  permissions
* Type
  array
* Required
  Yes
* Description
  Array of permissions to request.

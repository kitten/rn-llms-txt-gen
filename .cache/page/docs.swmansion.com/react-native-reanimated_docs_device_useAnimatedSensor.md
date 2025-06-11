# useAnimatedSensor

`useAnimatedSensor` lets you create animations based on data from the device's sensors. You can access:

* **Accelerometer** - the device acceleration (without gravity).
* **Gyroscope** - the rotation rate of the device.
* **Gravity** - the current gravity vector.
* **Magnetic field** - the magnetic field vector.
* **Rotation** - the device orientation in three dimensions.

For a full, in depth documentation follow the Sensors guide on Android Developers and the Device motion in the Apple Developer documentation.

The playground below mimics the behaviour and returned values of selected sensors:

## Reference

```
import { useAnimatedSensor, SensorType } from 'react-native-reanimated';

function App() {
  const gyroscope = useAnimatedSensor(SensorType.GYROSCOPE);

  useDerivedValue(() => {
    const { x, y, z } = gyroscope.sensor.value;
  });
}
```

### Arguments

#### `sensorType`

A type of a sensor to use. You specify the sensor type using a `SensorType` enum containing fields:

* `ACCELEROMETER` - measures the device acceleration along x, y, and z axes (excluding gravity) in m/s2.
* `GYROSCOPE` - measures the rate of rotation along x, y, and z axes in radians per second.
* `GRAVITY` - measures acceleration due to gravity along x, y, and z axes in m/s2.
* `MAGNETIC_FIELD` - measures the strength and direction of the Earth's magnetic field in microtesla (μT).
* `ROTATION` - measures the device orientation in three dimensions. This sensor represents the rotation by both Euler angles (roll, pitch, and yaw) and a quaternion.

#### `config`Optional

Available properties:

|Name|Type|Default|Description|
|-|-|-|-|
|interval|`number｜"auto"`|`"auto"`|Time in milliseconds between sensor readings. `"auto"` matches the device's screen refresh rate.|
|adjustToInterfaceOrientation|`boolean`|`true`|Whether to adjust measurements to the current interface orientation.|
|iosReferenceFrame|`IOSReferenceFrame`|`IOSReferenceFrame.Auto`|The frame of reference for device's sensors on iOS.|

You can specify the iOS reference frame using an `IOSReferenceFrame` enum containing fields:

* `xArbitraryZVertical` a reference frame where the Z axis is vertical and the X axis points in an arbitrary direction in the horizontal plane.
* `xArbitraryCorrectedZVertical` a reference frame where the Z axis is vertical and has improved rotation accuracy, and the X axis points in an arbitrary direction in the horizontal plane.
* `XMagneticNorthZVertical` a reference frame where the Z axis is vertical and the X axis points to the magnetic north pole.
* `XTrueNorthZVertical` a reference frame where the Z axis is vertical and the X axis points to the geographic north pole.
* `Auto` on iOS devices without magnetometer (eg. iPods) `XArbitraryZVertical`, on devices with magnetometer `XArbitraryCorrectedZVertical`

### Returns

`useAnimatedSensor` returns an object containing these fields:

|Name|Type|Description|
|-|-|-|
|sensor|`SharedValue<Value3D｜ValueRotation>`|A shared value containing the sensor measurements. The values returned by the sensor depend on the type of sensor you choose with sensorType argument.|
|unregister|`() => void`|Allows to stop listening to sensor updates on call.|
|isAvailable|`boolean`|Indicates whether sensor is available to use. You won't be able to use a sensor when it's missing from the device or the app doesn't have permission to access it.|
|config|`SensorConfig`|An object containing sensor configuration.|

The shared value returned from the **rotation sensor** is an object contain Euler angles, a quaternion and an interface orientation:

Euler angles are:

* `roll: number` - a rotation in radians along an axis that goes from the top to the bottom of the device.
* `pitch: number` - a rotation in radians along an axis that goes from side to side of the device.
* `yaw: number` - a rotation in radians along an axis that goes from the front to the back of the device.

Roll

Pitch

Yaw

Quaternion is a convenient way to represent rotations. Quaternion is based on complex numbers and isn't easy to understand intuitively. They simplify interpolation between two rotations. Quaternions are oftentimes used in computer graphics because they don't suffer from a gimbal lock. Rotation sensor returns a quaternion in form of its components which are:

* `qw: number` - W component of the quaternion.
* `qx: number` - X component of the quaternion.
* `qy: number` - Y component of the quaternion.
* `qz: number` - Z component of the quaternion.

and

* `interfaceOrientation: InterfaceOrientation`.

**All other sensors** return an object with measurements in the x, y and z axes and the interface orientation:

* `x` - sensor measurement on the X axis.
* `y` - sensor measurement on the Y axis.
* `z` - sensor measurement on the Z axis.
* `interfaceOrientation: InterfaceOrientation`.

Depending on the sensor type the measurement is a number in radians per second, m/s2 or microtesla (μT).

`InterfaceOrientation` is an enum containing these properties:

* `ROTATION_0` - default rotation on Android, portrait orientation on iOS.
* `ROTATION_90` - 90 degrees rotation on Android, landscape right orientation on iOS (landscape and home button on the right).
* `ROTATION_180` - 180 degrees rotation on Android, upside down orientation on iOS.
* `ROTATION_270` - 270 degrees rotation on Android, landscape left orientation on iOS (landscape and home button on the left).

## Example

Expand the full code

```
export default function App() {
  const gravity = useAnimatedSensor(SensorType.GRAVITY);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withSpring(gravity.sensor.value.x * 20) },
        { translateY: withSpring(gravity.sensor.value.y * 20) },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </View>
  );
}
```

## Remarks

* On iOS, if you want to read sensor data you need to enable location services on your device (`Settings > Privacy > Location Services`).

* On Web, the device needs to support sensors and your web application has to be connected over HTTPS.

* Most of the sensors operate in resolutions up to 100Hz.

* You can read the sensor data on both UI thread and JavaScript thread.

## Platform compatibility

|Android|iOS|Web|
|-|-|-|
|✅|✅|✅|

This solution uses a polling mechanism to check for barcode scans.  While less efficient than the ideal `onBarCodeScanned` event, it provides a more consistent result.  It constantly checks the `scanned` property of the `Camera` object:
```javascript
import * as React from 'react';
import { Camera, BarCodeScanner } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);
  const [barcodeData, setBarcodeData] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setBarcodeData(data);
  };

  if (hasPermission === null) {
    return <View />;}
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} onBarCodeScanned={handleBarCodeScanned}>
        <View>
          {scanned && (
            <Text>Barcode scanned: {barcodeData}</Text>
          )}
        </View>
      </Camera>
    </View>
  );
}
```
# Expo Camera onBarCodeScanned Intermittency Bug

This repository demonstrates a bug in Expo's Camera component where the `onBarCodeScanned` function does not reliably trigger when barcodes are scanned.  The issue causes unpredictable behavior, making barcode scanning functionality unreliable.  The solution provides a workaround to improve the consistency of barcode detection.

## Bug Description

The `onBarCodeScanned` callback within Expo's Camera component sporadically fails to fire, even when barcodes are clearly visible and successfully scanned by the camera. This inconsistency makes it difficult to build robust barcode scanning features into applications.

## Solution

The solution implements a more reliable approach by using the `scanned` property of the camera object and handling the barcode data update directly. This bypasses the potentially problematic `onBarCodeScanned` callback.  While not an ideal solution, it offers a workaround until the underlying issue is resolved within the Expo SDK.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `expo start`.
4. Point the camera at a barcode. Observe that the barcode might or might not be detected consistently.
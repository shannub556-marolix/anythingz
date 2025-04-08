import React, { useEffect } from 'react';
import Fingerprint2 from 'fingerprintjs2';

export default function FingerprintCapture () {
    let fingerp=0;
  useEffect(() => {
    // Function to capture fingerprint
    const captureFingerprint = async () => {
      const fingerprint = await new Promise((resolve) => {
        Fingerprint2.get((components) => {
          const values = components.map((component) => component.value);
          const fingerprint = Fingerprint2.x64hash128(values.join(''), 31);
          resolve(fingerprint);
        });
      });

      // You can now use the fingerprint for further processing or send it to a server for verification.
      console.log('Captured Fingerprint:', fingerprint);
      fingerp=fingerprint;
    };

    captureFingerprint();
  }, []);

  return <div>Capturing Fingerprint...{fingerp}</div>;
};


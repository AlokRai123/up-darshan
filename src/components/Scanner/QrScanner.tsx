'use client';

import { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import Link from 'next/link';

const QrScanner = () => {
  const scannerRef = useRef<HTMLDivElement>(null);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const qrCodeScannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    const scannerId = 'qr-reader';
    if (!scannerRef.current) return;

    const qrScanner = new Html5Qrcode(scannerId);
    qrCodeScannerRef.current = qrScanner;

    qrScanner
      .start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: 250,
        },
        (decodedText) => {
          setResult(decodedText);
          qrScanner.stop().then(() => {
            console.log('Scanner stopped after success');
          });
        },
        (err) => {
          console.warn('Scan error:', err);
        }
      )
      .catch((err) => {
        console.error('Unable to start scanning:', err);
        setError('Camera access issue or no device found');
      });

    return () => {
      qrScanner.stop().catch(() => null);
    };
  }, []);

  return (
    <div className='max-w-md mx-auto bg-white min-h-screen relative pb-10'>
      <div className="p-4">
      <h2 className="text-xl font-bold mb-4">QR Code Scanner</h2>
      <div id="qr-reader" ref={scannerRef} style={{ width: '300px' }}></div>
      {result && <p className="mt-4 text-green-600">Scanned: <Link href={result}>{result}</Link></p>}
      {error && <p className="mt-4 text-red-600">Error: {error}</p>}
    </div>
    </div>
  );
};

export default QrScanner;

import QrScanner from '@/components/Scanner/QrScanner';

export default function qrScanner() {
  return (
    
    <div className="max-w-md mx-auto bg-white min-h-screen relative pb-24 rounded-2xl border-4 border-gray-400 shadow-lg">
       <main className="flex min-h-screen items-center justify-center">
      <QrScanner/>
     </main>
    </div>
    
  );
}

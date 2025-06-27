'use client'
import { Home, Map, ScanQrCode, Settings, ThumbsUp } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation';

function Navigation() {
    const router = useRouter();
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm z-10">
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 mx-4 mb-4 rounded-full px-4 py-3 shadow-2xl shadow-orange-500/30">
          <div className="flex items-center justify-around">
            <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 hover:scale-110 active:scale-95 transition-all duration-200 backdrop-blur-sm">
              <Home className="w-5 h-5 text-white" onClick={() => router.push('/')} />
            </button>
            <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 hover:scale-110 active:scale-95 transition-all duration-200 backdrop-blur-sm">
              <Map className="w-5 h-5 text-white" />
            </button>
            <button className="p-4 bg-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 ring-2 ring-white/20">
              <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                <ScanQrCode onClick={() => router.push('/pageScanner')} className="w-4 h-4 text-white" />
              </div>
            </button>
            <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 hover:scale-110 active:scale-95 transition-all duration-200 backdrop-blur-sm">
              <Settings className="w-5 h-5 text-white" />
            </button>
            <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 hover:scale-110 active:scale-95 transition-all duration-200 backdrop-blur-sm">
              <ThumbsUp className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        <div className="h-1 bg-gray-800 mx-auto w-32 rounded-full mb-2"></div>
      </div>
  )
}

export default Navigation
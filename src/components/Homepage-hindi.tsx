'use client';
import { useEffect, useState } from 'react';
import { Search,} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import slides from '../app/assets';
import LanguageSelector from './LanguageSelector';
import Navigation from './Navigation';


export default function Homehindi() {
  const [activeDestination, setActiveDestination] = useState('Delhi');
  // const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
   const router = useRouter();

  
  // const slides = [
  //   {
  //     id :1,
  //     title: 'Taj Mahal',
  //     subtitle: 'Monument of Love',
  //     state : 'Delhi',
  //     // image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  //      image : 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqqFFGzkaLi2ik_OYfnWB4SOB4QdAT2WuKb7yYpkkgdY_FsCZeXRotHmAMTDtN68KcmUql3y8PLBumCRIsgiWYXUh8rQur6J6yDK_CnEZZ0EXYRUJXxZEnHm4cIitxaKy50F-Y=s1360-w1360-h1020-rw'
      
  //   },
  //   {
  //     id :2,
  //     title: 'Red Fort',
  //     subtitle: 'Mughal Architecture',
  //     state : 'Varanasi',
  //     // image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  //     image : 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nplMw7ljX4QguPQRseGArdmxnBXghFgCX4a6Nsz84oqFaBvCcqBhkhani0uLA48Nf90TvIv7lS5-Ai5DmsbdN3oNxo7qXCaNSZvE8jMxTmeaQWb-0hpxJk5nqgCrnEMM3t8weN6XQ=s1360-w1360-h1020-rw'
  //   },
  //   {
  //     id :3,
  //     title: 'Qutub Minar',
  //     subtitle: 'Historic Tower',
  //     state : 'Delhi',
  //     // image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  //     image : 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npDqF8DHAO0gMdq9J4sCpoA1JErFnqXt9oDBhTswf0HoDFC_t-FxtBkYuPxTEGSWxqfqui8PtFtmwyV8Li2s9hPAxrU1TTy9kAz1oQjK_N3r0UyENjCCFPW1Xl3CPgbA4uE4RYS8w=s1360-w1360-h1020-rw'
  //   }
  // ];

  // const togglePlayback = () => {
  //   setIsPlaying(!isPlaying);
  // };

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };
   useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen relative pb-10">
      {/* Header */}
      <div className="flex items-center justify-between p-5 bg-gradient-to-r ">
        <div className="flex items-center space-x-2">
            <Image 
            src="/image/logo.png" 
            alt="logo." 
            width={50} 
            height={50}  
            />
        </div>
        <div className="flex space-x-4">
          <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
            A+
          </div>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
            O
          </div>
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
            <LanguageSelector/>
          </div>
          


        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search destinations..."
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-full text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-200"
          />
        </div>
      </div>

      {/* Title Section */}
      <div className="px-4 mb-4">
        <h1 className="text-xl font-bold text-gray-800 mb-1 leading-tight">
          Tap to Explore – Scan, Listen, Travel!
        </h1>
        <p className="text-gray-600 text-sm">Plan Your Journey with Audio Guides</p>
      </div>

      {/* Destination Tags */}
      <div className="flex space-x-3 px-4 mb-6 overflow-auto overflow-y-hidden">
        {slides.map((slider, index) => (
          <button
            key={index}
            onClick={() => setActiveDestination(slider.name)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 transform hover:scale-105 active:scale-95 ${
              activeDestination === slider.name 
                ? `${slider.color} text-white shadow-lg shadow-black/20` 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
            }`}
          >
            {/* <span className="text-lg">{dest.image}</span> */}
            <span className="text-sm font-medium">{slider.name}</span> 
          </button>
        ))}
      </div>

      {/* Main Image Carousel */}
      <div className="px-4 mb-6">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-sky-400 via-blue-300 to-emerald-200 h-96">
          {/* Taj Mahal Representation */}
          <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
            {/* Main Monument */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 mb-4 w-full max-w-xs transform hover:scale-105 transition-transform duration-300">
              
              {/* Main Structure */}
              <div className="text-center">
                <div className="w-full h-32 bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg mb-4 flex items-center justify-center shadow-inner border border-gray-200">
                  <div className="text-6xl drop-shadow-lg flex items-center justify-center">
                    <Image
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].subtitle}
                      width={300}
                      height={200}
                      className="object-cover rounded-lg"
                    />
      
                  </div>
                </div>

                 
              </div>
              
            </div>

            
            {/* Water Reflection */}
            <div className="w-full h-20 bg-gradient-to-b from-blue-200/60 via-blue-300/40 to-transparent rounded-lg backdrop-blur-sm hover:bg-blue-600/20 hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <button onClick={() => router.push(slides[currentSlide].btn)}>Description</button> 
                
              </div>
            </div>
          </div>
 

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 hover:scale-125 ${
                  index === currentSlide ? 'bg-white shadow-lg' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      {/* <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm z-10">
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
      </div> */}

      <Navigation/>
    </div>
  );
}
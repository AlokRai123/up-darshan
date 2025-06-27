'use client'
import React, { useState } from 'react'

export default function TajMahal() {
     const [isPlaying, setIsPlaying] = useState(false);

      const togglePlayback = () => {
     setIsPlaying(!isPlaying);
      }

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative pb-24 rounded-2xl border-4 border-gray-400">

        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-bold mb-4 pt-6 font-serif">Taj Mahal</h1>
            <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqqFFGzkaLi2ik_OYfnWB4SOB4QdAT2WuKb7yYpkkgdY_FsCZeXRotHmAMTDtN68KcmUql3y8PLBumCRIsgiWYXUh8rQur6J6yDK_CnEZZ0EXYRUJXxZEnHm4cIitxaKy50F-Y=s1360-w1360-h1020-rw"
            alt="Taj Mahal"
            className="w-full h-auto rounded-lg shadow-lg mb-4 p-3 rounded-2xl shadow-md object-cover"
            />
             {/* Play Button Overlay */}
          {/* <button 
            onClick={togglePlayback}
            className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 active:scale-95"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-gray-700" />
            ) : (
              <Play className="w-5 h-5 text-gray-700 ml-0.5" />
            )}
          </button> */}
           <div className='w-full px-4 pt-10 bg-gray-200 rounded-lg shadow-md'>
             <p className="text-gray-700 text-center">
            The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra.
            It was commissioned in 1632 by Mughal emperor Shah Jahan (reigned from 1628 to 1658) in memory of his favorite wife, Mumtaz Mahal; it is the tomb of Mumtaz Mahal and Shah Jahan.
            The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.
            The Taj Mahal complex is believed to have been completed in 1643, but work continued on other phases of the project for another 10 years.
            
            </p>
           </div>
        </div>
    </div>
  )
}


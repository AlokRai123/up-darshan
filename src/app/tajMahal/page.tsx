import Navigation from '@/components/Navigation'
import React from 'react'

function Page() {
    

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative pb-24 rounded-2xl border-4 border-gray-400 shadow-lg">

        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-bold mb-4 pt-6 font-serif">Taj Mahal</h1>
            <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqqFFGzkaLi2ik_OYfnWB4SOB4QdAT2WuKb7yYpkkgdY_FsCZeXRotHmAMTDtN68KcmUql3y8PLBumCRIsgiWYXUh8rQur6J6yDK_CnEZZ0EXYRUJXxZEnHm4cIitxaKy50F-Y=s1360-w1360-h1020-rw"
            alt="Taj Mahal"
            className="w-full h-auto rounded-7xl shadow-lg mb-4 p-3 object-cover"
            />
           <div className='w-full px-4 pt-1 bg-gray-200 rounded-lg shadow-md'>
             <p className="text-gray-700 text-center">
            The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra.
            It was commissioned in 1632 by Mughal emperor Shah Jahan (reigned from 1628 to 1658) in memory of his favorite wife, Mumtaz Mahal; it is the tomb of Mumtaz Mahal and Shah Jahan.
            The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.
            </p>
           </div>

           
        </div>

        <Navigation/>
    </div>
  )
}

export default Page
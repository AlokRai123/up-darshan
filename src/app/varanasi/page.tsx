import React from 'react'
import slides from '../assets'
import Navigation from '@/components/Navigation'

function Page() {
    

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative pb-24 rounded-2xl border-4 border-gray-400 shadow-lg">

        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-bold mb-4 pt-6 font-serif">Taj Mahal</h1>
            <img
            src="/image/dashashwamedh-ghat-varanasi.jpeg"
            alt="Taj Mahal"
            className="w-full h-auto rounded-7xl shadow-lg mb-4 p-3 object-cover"
            />
           <div className='w-full px-4 pt-1 bg-gray-200 rounded-lg shadow-md'>
             <p className="text-gray-700 text-center">
           Varanasi, an ancient city in Uttar Pradesh, is known for its ghats and spirituality. It is 322 km from Lucknow.
            The city is famous for its silk works, embroideries, handicrafts, and sarees. 
            The cascading waters of River Ganga allure pilgrims to come and bathe in the holy river for spiritual awakening. 
            The ghats in Varanasi are a popular spot for performing funeral rites and festivals.
             The city hosts a myriad of phenomenal, vibrant festivals and celebrates them with great gusto. Some of the most popular festivals
              include Holi, Deepawali, Ganga Mahotsav, Makar Sankranti, Maha Shivratri, Chhath Puja, Hanuman Jayanti, and Buddha Mahotsav.
            </p>
           </div>

           
        </div>

        <Navigation/>
    </div>
  )
}

export default Page
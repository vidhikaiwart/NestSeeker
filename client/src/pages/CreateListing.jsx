import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7' > Add Your Stay</h1>
    <form action="" className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-4 flex-1'>
            <input type="text " placeholder='Name' 
            className='border p-3 rounded-lg ' id='Name' maxLength='62' 
            minLength='10' required />

             <textarea type="text " placeholder='Description'
              className='border p-3 rounded-lg ' id='Description' required />

               <input type="text " placeholder='Address'
                className='border p-3 rounded-lg ' id='Address' required />
       
       {/* Type  */}
            <div className='flex gap-6 flex-wrap'>
                <div className='flex  gap-2'>
                    <input type="checkbox" id = 'PG & Hostel' className='w-5' />
                    <span>PG & Hostel</span>
                </div>
                <div className='flex  gap-2'>
                    <input type="checkbox" id = 'Room Rent' className='w-5' />
                    <span>Room Rent</span>
                </div>
                <div className='flex  gap-2'>
                    <input type="checkbox" id = ' Hotel' className='w-5' />
                    <span>Hotel</span>
                </div>
                <div className='flex  gap-2'>
                    <input type="checkbox" id = 'Apartment' className='w-5' />
                    <span>Apartment</span>
                </div>
            </div>
              {/* need  */}
                <div className='flex gap-6 flex-wrap'>
                    <div className='flex items-center ap-2'>
                        <input type="numder" id ='Room'  min ='1' max='10' required
                        className='p-3 border-gray-300 rounded-lg' />
                        <p>Room</p>
                    </div>
                    <div className='flex items-center ap-2'>
                        <input type="numder" id ='Bedroom'  min ='1' max='10' required
                        className='p-3 border-gray-300 rounded-lg' />
                        <p>Bedroom</p>
                    </div>
                    <div className='flex items-center ap-2'>
                        <input type="numder" id ='Bathroom'  min ='1' max='10' required
                        className='p-3 border-gray-300 rounded-lg' />
                        <p>Bathroom</p>
                    </div>
                    <div className='flex items-center ap-2'>
                        <input type="numder" id ='kitchen'  min ='1' max='10' required
                        className='p-3 border-gray-300 rounded-lg' />
                        <p>Kitchen</p>
                    </div>
                </div>
                 {/* Amenities */}
            <div className='flex gap-6 flex-wrap'>
                <h1>Amenities</h1>
                <div className='flex  gap-2'>
                    <input type="checkbox" id = 'PG & Hostel' className='w-5' />
                    <span>Wi-Fi</span>
                </div>
                <div className='flex  gap-2'>
                    <input type="checkbox" id = 'Room Rent' className='w-5' />
                    <span>Food Included</span>
                </div>
                <div className='flex  gap-2'>
                    <input type="checkbox" id = ' Hotel' className='w-5' />
                    <span>AC</span>
                </div>
                <div className='flex  gap-2'>
                    <input type="checkbox" id = 'Apartment' className='w-5' />
                    <span>Parking</span>
                </div>
            </div>
       
        {/* need  */}
                <div className='flex gap-6 flex-wrap'>
                    <div className='flex items-center gap-2 '>
                        <input type="numder" id ='Regularprice'  min ='1' max='10' required
                        className='p-3 border-gray-300 rounded-lg' />
                        <p>Regular Price</p>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <input type="numder" id ='Discount Price'  min ='1' max='10' required
                        className='p-3 border-gray-300 rounded-lg' />
                        <p>Discount Price</p>
                    </div>
       
                    </div>
       
       
       
       
        </div>

        <div className ='flex flex-col flex-1 gap-4'>
            <p className='font-semibold'> Images:
                <span className='font-normal text-gray-600 ml-2'> 
                    The first image will be the cover (max 10) </span>
            </p>

            <div className='flex gap-4'>
                <input type="file" className='p-3 border-gray-300 rounded
                 w-fill ' id='images ' accept ='image/*' multiple />

                 <button className='p-3 text-green-700 border border-green-700
                 rounded uppercase hover:shadow-lg disabled:opacity-80'> Upload</button>
            </div>
              <button className=' p-3 bg-slate-700 text-white 
              rounded-lg uppercase hover:opcity-95 disabled:opacity-80'>
               Add Your Stay</button>
        </div>

      
    </form>
    
    
    
    </main>
  )
}

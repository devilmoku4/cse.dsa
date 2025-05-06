import logo from './assets/logo192.png'
import qrcode from './assets/qrcode.svg'
function App() {

  return (
    <div className="w-full h-full mainDiv flex items-center justify-center flex-col flex-wrap overflow-auto">

      <div className="flex items-center justify-center flex-wrap">
        <img src={logo} alt="College Logo" className="w-15 mr-5" />
        <div className="">
          <h1 className='text-2xl text-amber-50 font-extrabold'>Sri Dharmasthala Manjunatheshwara</h1>
          <h1 className='text-amber-50'>Institute of Technology, Ujire</h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-10 flex-wrap">
        <h2 className="text-3xl font-semibold mt-2 text-amber-50">Department Of</h2>
        <h2 className="text-5xl font-extrabold italic text-amber-50 text-center">
          <u>COMPUTER SCIENCE AND ENGINEERING</u>
        </h2>
      </div>

      <div className="flex p-15 justify-center gap-25 flex-wrap">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-7xl font-extrabold mt-8 text-white font-serif text-center">
            &lt; DSA CODING &gt;
          </h3>
          <h4 className="text-4xl mt-2 text-white font-bold">COMPETITION</h4>
        </div>
        <div className="text-center text-black bg-gradient-to-l from-gray-600 to-white px-7 pb-2 rounded-2xl">
          <h1 className='font-extrabold text-9xl'>10</h1>
          <h1 className='font-bold text-5xl'>MAY</h1>
        </div>
      </div>

      <div className="flex text-white justify-center gap-x-50 mb-10 flex-wrap gap-y-3">
        <div className="bg-gradient-to-r from-gray-400 to-gray-950 w-100 rounded-2xl px-10 py-5">
          <h1 className="text-3xl font-bold text-center">Round - 1</h1>
          <h1 className="mt-2 text-2xl text-center">Multiple Choice Questions</h1>
          <h1 className="text-xl mt-1">Registered students can participate</h1>
          <h1 className="text-xl mt-2">Questions: 30</h1>
          <h1 className='text-xl'>Duration: 45min</h1>
        </div>
        <div className="bg-gradient-to-r from-gray-400 w-100 to-gray-950 px-10 py-5 rounded-2xl">
          <h1 className="text-3xl font-bold text-center">Round - 2</h1>
          <h1 className="mt-2 text-2xl text-center">Coding Round</h1>
          <h1 className="text-xl mt-1">Top scorers in Round-1</h1>
          <h1 className="text-xl mt-2">Problems: 5</h1>
          <h1 className='text-xl'>Duration: 90min</h1>
        </div>
      </div>

      <div className="bg-gradient-to-r text-white bg-gray-800 px-20 py-5 rounded-2xl w-fit flex flex-col justify-center items-center gap-y-2 flex-wrap">
        <h1 className="mt-2 text-2xl text-center">Staff Coordinator</h1>
        <h1 className="text-3xl font-extrabold mt-1 text-center">Mr. Pradeep G S</h1>
        <h1 className="text-xl mt-2 text-center">Assistant Professor</h1>
        <h1 className='text-2xl font-bold text-center'>Dept of CSE</h1>
      </div>

      <div className="flex gap-x-50 mt-5 flex-wrap justify-center">
        <div className="mt-6 text-white text-left">
          <h1 className="font-extrabold text-3xl">Student Coordinators</h1>
          <h1 className='text-2xl font-bold'>Mr. Mohan</h1>
          <h1 className='text-2xl font-bold'>Ms. Pragathi</h1>
          <h1 className='text-2xl font-bold'>Mr. Vishal</h1>
        </div>
        <div className="mt-6 text-white text-center">
          <h4 className="text-6xl font-extrabold">VENUE : CCP LAB M-007</h4>
          <p className="italic mt-1 text-4xl font-bold">START AT 2:00 PM</p>
        </div>
      </div>


      <div className="text-white flex gap-x-80 mt-20 items-center justify-center gap-y-10 flex-wrap">
        <div className="text-center">
          <img src={qrcode} alt="qr code" className="w-50 mb-2" />
          <h1 className='text-xl font-bold'>Scan and Register</h1>
        </div>
        <h1 className='text-6xl font-extrabold'>OR</h1>
        <a href="https://forms.gle/HjhvBLg3YLJn1HJa8" className='bg-blue-300 py-5 px-10 rounded-2xl'>
          <button className='text-2xl text-black font-bold cursor-pointer underline'>Registration Link</button>
        </a>
      </div>


      <h1 className="mt-6 text-xl mb-2 font-bold text-gray-100">
        For Queries Contact <a href="tel://+919663821018">+91 9663821018</a> 
      </h1>

    </div>
  )
}

export default App

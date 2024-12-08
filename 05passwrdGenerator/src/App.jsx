import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  //useState Hook
  const [password, setPass] = useState("")
  const [length, setLen] = useState(8)
  const [numberAllowed, setNA] = useState(false)
  const [charAllowed, setCA] = useState(false)

  //useRef Hook
  const passRef = useRef(null)

  // useCallback just optimise the function
  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]_~"

    for (let i = 1; i <= length; i++) {
      let num = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(num)

    }

    setPass(pass);
  }, [length, numberAllowed, charAllowed, setPass])

  //without useCallback also works
  //using useRef to highlight reference

  function copyPassToClipboard() {

    passRef.current?.select()

    // passRef.current?.setSelectionRange(0,13)
    // this just highlights

    window.navigator.clipboard.writeText(password)
    //this actually copies to clipboard
  }

  // useEffect
  useEffect(() => {
    passGenerator()
  }, [length, numberAllowed, charAllowed])

  return (
    <>
      <div className='w-full border-blue-300 my-10 mx-auto max-w-md bg-gray-300 rounded-lg py-3 px-4 shadow-md'>

        <div className='flex shadow rounded-lg overflow-hidden mb-4' >
          <input type="text"
            value={password}
            className='ouline-none w-full py-1 my-2 ml-2 px-3 rounded-l-md'
            placeholder='password'
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyPassToClipboard}
            className='outline-none py-0.5 px-3 shrink-0 hover:bg-blue-500 bg-blue-700 text-white' >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLen(e.target.value) }
              } />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => { setNA((prev) => !prev); }} />
            <label htmlFor="">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => { setCA((prev) => !prev); }} />
            <label htmlFor="">Special Char</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

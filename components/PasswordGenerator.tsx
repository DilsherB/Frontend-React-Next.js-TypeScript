"use client";

import { useCallback, useEffect, useState } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [chars, setChars] = useState(false);
  const [numbers, setNumbers] = useState(false);

  const PassGen = useCallback(() => {
    let str: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (chars) str += "!@#$%&*-_~`";
    if (numbers) str += "0123456789";
    let pass: string = "";
    for (let i = 1; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
  }, [length, chars, numbers, setPassword]);

  useEffect(() => {
    PassGen();
  }, [length, chars, numbers, PassGen]);

  return (
    <div className="w-1/2 justify-self-center bg-slate-400 rounded-2xl m-2 py-2">
      <h1 className="text-center text-2xl">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden m-4">
        <input
          type="text"
          className="px-3 py-1 outline-none w-full bg-white text-black"
          value={password}
          onChange={PassGen}
          readOnly
          placeholder="Password"
        />
        <button className="bg-blue-500 px-2 cursor-pointer hover:bg-blue-800">
          Copy
        </button>
      </div>
      <div className="flex overflow-hidden px-4 justify-between align-text-top">
        <div className="gap-1">
          <input
            type="range"
            className="cursor-pointer"
            min={0}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(Number(e.target.value));
            }}
          />
          Length({length})
        </div>
        <p>
          <input
            type="checkbox"
            id="numbers"
            defaultChecked={numbers}
            onChange={() => {
              setNumbers((pre) => !pre);
            }}
          />
          Numbers
        </p>
        <p>
          <input
            type="checkbox"
            id="charactors"
            defaultChecked={chars}
            onChange={() => {
              setChars((pre) => !pre);
            }}
          />
          Charactors
        </p>
      </div>
    </div>
  );
}

export default PasswordGenerator;

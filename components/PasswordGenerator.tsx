"use client";

import { useCallback, useEffect, useState, useRef } from "react";

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
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, chars, numbers]);

  useEffect(() => {
    PassGen();
  }, [PassGen]);

  const passwordRef = useRef<HTMLInputElement>(null);
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(passwordRef.current?.value ?? "");
  }, []);

  return (
    <div className="w-1/2 justify-self-center bg-slate-400 rounded-2xl m-2 py-2">
      <h1 className="text-center text-2xl">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden m-4">
        <input
          type="text"
          className="px-3 py-1 outline-none w-full bg-white text-black"
          value={password}
          ref={passwordRef}
          onChange={PassGen}
          readOnly
          placeholder="Password"
        />
        <button
          onClick={copyPassword}
          className="bg-blue-500 px-2 cursor-pointer hover:bg-blue-800"
        >
          Copy
        </button>
      </div>
      <div className="flex overflow-hidden px-4 justify-between align-text-top">
        <div className="gap-1">
          <input
            type="range"
            className="cursor-pointer"
            min={1}
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
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
          />
          Numbers
        </p>
        <p>
          <input
            type="checkbox"
            id="charactors"
            checked={chars}
            onChange={(e) => setChars(e.target.checked)}
          />
          Charactors
        </p>
      </div>
    </div>
  );
}

export default PasswordGenerator;

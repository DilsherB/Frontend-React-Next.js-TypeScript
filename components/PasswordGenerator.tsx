"use client";

import { useRef, useState } from "react";

const createPassword = (len: number, isNumber: boolean, isChar: boolean) => {
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (isNumber) str += "0123456789";
  if (isChar) str += "~!@#$%&*";
  let pass = "";
  const randomValues = new Uint32Array(len);
  crypto.getRandomValues(randomValues);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  pass = letters.charAt(randomValues[0] % letters.length).toUpperCase();
  for (let i = 1; i < len; i++) {
    pass += str.charAt(randomValues[i] % str.length);
  }
  return pass;
};

export default function PasswordGenerator() {
  const [password, setPassword] = useState(() =>
    createPassword(8, false, false),
  );
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [chars, setChars] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const generateNewPass = ({
    len = length,
    theNumber = number,
    theChars = chars,
  } = {}) => {
    setPassword(createPassword(len, theNumber, theChars));
  };

  return (
    <section className="bg-slate-700 my-6 w-3/4 justify-self-center rounded-xl p-4">
      <div className="flex rounded-lg overflow-hidden justify-self-center">
        <input
          type="text"
          value={password}
          ref={passwordRef}
          readOnly
          className="bg-white text-black px-1"
        />
        <button
          onClick={() => {
            passwordRef.current?.select();
            navigator.clipboard.writeText(password);
          }}
          className="bg-blue-600 hover:bg-blue-800 px-2 cursor-pointer"
        >
          Copy
        </button>
      </div>
      <div className="flex justify-self-center gap-6 mt-4 w-full">
        <div className="mt-6 flex place-self-center">
          <input
            type="range"
            min={1}
            max={25}
            value={length}
            onChange={(e) => {
              const newLength = Number(e.target.value);
              setLength(newLength);
              generateNewPass({ len: newLength });
            }}
          />
          <span>Length({length})</span>
        </div>
        <div className="flex-col border border-slate-500 rounded-lg p-1 w-full">
          <div className="justify-self-center">Include</div>
          <div className="flex justify-between px-4">
            <div>
              <input
                type="checkbox"
                checked={number}
                onChange={(e) => {
                  const incNumber = e.target.checked;
                  setNumber(incNumber);
                  generateNewPass({ theNumber: incNumber });
                }}
              />
              <span>Numbers</span>
            </div>
            <div>
              <input
                type="checkbox"
                checked={chars}
                onChange={(e) => {
                  const incChars = e.target.checked;
                  setChars(incChars);
                  generateNewPass({ theChars: incChars });
                }}
              />
              <span>Charactors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
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
*/

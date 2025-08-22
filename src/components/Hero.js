import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [greeting, setGreeting] = useState("Hello");

  const greetings = [
    "Hello",      // English
    "Halo",       // Indonesian
    "مرحباً",      // Arabic
    "Hola",       // Spanish
    "Bonjour",    // French
    "Olá",        // Portuguese
    "Konnichiwa", // Japanese
    "Nǐ hǎo",     // Chinese
    "Hallo",      // German
    "안녕하세요",     // Korean
    "Namaste",    // Hindi
    "Привет",     // Russian
  ];

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setGreeting(greetings[index]);
      index = (index + 1) % greetings.length;
    }, 2000); // Change greeting every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <section 
      className="h-screen flex flex-col justify-center items-center text-white text-center"
      style={{ backgroundImage: `url('https://gifdb.com/images/high/technology-circuit-board-ht35fdefmne6n1dv.gif')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-black bg-opacity-50 px-8 py-6 rounded-lg">
        <h1 className="text-5xl font-bold mb-2">
          {greeting}
        </h1>
        <h2 className="text-4xl font-bold mb-4">
          I'm Walid Fernando Sastriana
        </h2>
        <p className="text-lg">
          UI/UX Designer | Web Development | Data Analyst
        </p>
      </div>
    </section>
  );
}

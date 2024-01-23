"use client";
import React from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs htmlFor Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTOtZRcHKBr2pk0UvZEu_6E9V1x6a9GrQ",
  authDomain: "tradegpt-contact-form.firebaseapp.com",
  databaseURL: "https://tradegpt-contact-form-default-rtdb.firebaseio.com",
  projectId: "tradegpt-contact-form",
  storageBucket: "tradegpt-contact-form.appspot.com",
  messagingSenderId: "1041527752536",
  appId: "1:1041527752536:web:7f81e00a2a9bbb8361472d",
  measurementId: "G-E878JM2SVM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const ContactFormComplete = () => {
  function writeUserData(
    name: string | undefined,
    email: string | undefined,
    message: string | undefined
  ) {
    const db = getDatabase(app);
    const d = new Date();
    const time = d.getTime();
    set(ref(db, "contactform/" + time), {
      name: name,
      email: email,
      message: message,
    });
  }

  function submitForm(e: any) {
    e.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement | null)
      ?.value;
    const email = (document.getElementById("email") as HTMLInputElement | null)
      ?.value;
    const message = (
      document.getElementById("message") as HTMLInputElement | null
    )?.value;
    writeUserData(name, email, message);
    // Clear form
    // document.getElementById("contactForm").reset();
  }
  return (
    <>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-4xl lg:text-5xl font-medium font-TradegptSerif mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed font-TradegptSans">
              Get in touch with TradeGPT
            </p>
          </div>
          <form id="contactForm" onSubmit={submitForm}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto font-TradegptSans">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-blue-950 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500 rounded text-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactFormComplete;

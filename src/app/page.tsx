import React from 'react'

const page = () => {
  return (
    <div> <figure className="md:flex bg-yellow-50 rounded-xl p-20 md:p-40 dark :bg-black-800">
    <img className="w-200 h-200 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/Ayesha.jpeg" alt="" width="384" height="512"></img>
    <div className ="pt-10 md:p-2 text-center md:text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “I am Ayesha, a dedicated student currently continuing my bachelor’s degree in cybersecurity. I am also striving to develop my expertise in artificial intelligence. My goal is to become an expert at the intersection of AI and cybersecurity"
      </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-blue-500 dark:text-blue-500">
          Ayesha Saleem
        </div>
        <div className="text-black-50 dark:text-slate-100">
          Cyber Security Eng
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page
import React from 'react'
import image from '../assets/footer/image.png';
import img02 from '../assets/footer/img02.png';
import img01 from '../assets/footer/img01.png';


const Footer = () => {
  return (
    <footer className="tw-bg-gray-100 dark:tw-bg-black">
      <div className="tw-flex tw-justify-center">
        <div className="tw-mx-10 tw-mt-16 tw-grid-flow-row">
          <img src={img02} alt="img" height={400} width={200} />
        </div>
        <div>
          <div className="tw-mx-12 tw-max-w-5xl tw-px-16 tw-py-8 sm:tw-px-6 lg:tw-px-8">
            <div className="tw-flex tw-justify-center tw-text-teal-600 dark:tw-text-teal-300">
              <img src={image} alt="image" height={100} width={250} />
            </div>

            <ul className="tw-text-white tw-mt-8 tw-flex tw-flex-wrap tw-justify-center tw-gap-3 md:tw-gap-3 lg:tw-gap-3">
              <li className="tw-flex tw-gap-2">
                <a
                  className="tw-text-gray-700 tw-transition hover:tw-text-gray-700/75 dark:tw-text-white dark:hover:tw-text-white/75"
                  href="#"
                >
                  Home
                </a>
                <li> | </li>
              </li>
              <li>
                <a
                  className="tw-text-gray-700 tw-transition hover:tw-text-gray-700/75 dark:tw-text-white dark:hover:tw-text-white/75"
                  href="#"
                >
                  Community
                </a>
              </li>
              <li> | </li>
              <li>
                <a
                  className="tw-text-gray-700 tw-transition hover:tw-text-gray-700/75 dark:tw-text-white dark:hover:tw-text-white/75"
                  href="#"
                >
                  Gallery
                </a>
              </li>
              <li> | </li>
              <li>
                <a
                  className="tw-text-gray-700 tw-transition hover:tw-text-gray-700/75 dark:tw-text-white dark:hover:tw-text-white/75"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>|</li>
              <li>
                <a
                  className="tw-text-gray-700 tw-transition hover:tw-text-gray-700/75 dark:tw-text-white dark:hover:tw-text-white/75"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>

            <ul className="tw-text-white tw-mt-8 tw-flex tw-justify-center tw-gap-2 md:tw-gap-2">
              <li>
                <a
                  href="https://www.facebook.com/tesoc.iiitbh/"
                  rel="noreferrer"
                  target="_blank"
                  className="tw-text-gray-700 tw-transition hover:tw-text-gray-700/75 dark:tw-text-white dark:hover:tw-text-white/75"
                >
                  {/* <span className="sr-only">Facebook</span> */}

                  <svg className="tw-size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>Facebook</li>
              <li></li>
              <li>|</li>


              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="tw-text-gray-700 tw-transition hover:tw-text-gray-700/75 dark:tw-text-white dark:hover:tw-text-white/75"
                >
                  <span className="tw-sr-only">Instagram</span>
                  <svg className="tw-size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>Instagram</li>
              <li></li>
              <li>|</li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="tw-text-gray-700 tw-transition hover:tw-text-gray-700/75 dark:tw-text-white dark:hover:tw-text-white/75"
                >
                  <span className="tw-sr-only">X</span>
                  <svg className="tw-size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
              </li>
              <li>X</li>
              <li></li>
              <li>|</li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="tw-text-gray-700 tw-transition hover:tw-text-gray-700/75 dark:tw-text-white dark:hover:tw-text-white/75"
                >
                  <span className="tw-[&>svg]:h-5 tw-[&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 496 512"
                    >
                      <path
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              <li>Github</li>
              <li></li>
            </ul>
          </div>
          <div className="tw-bg-black tw-text-white tw-p-6 tw-rounded-lg tw-shadow-lg tw-max-w-md tw-mx-auto sm:tw-max-w-lg md:tw-max-w-xl lg:tw-max-w-2xl">
            <div className="tw-text-center tw-mb-4">
              IIIT Bhubaneswar, Gothapatna, Bhubaneswar, Odisha, 751003
            </div>
            <div className="tw-text-center">
              Email: <a href="mailto:techsociety@iiitbh.ac.in" className="tw-text-blue-400 hover:tw-underline">techsociety@iiitbh.ac.in</a>
              <br />
              Phone: +91-1234567890
            </div>
          </div>

          <div className="tw-mx-auto tw-mt-8 tw-mb-0 tw-max-w-md tw-text-center tw-leading-relaxed tw-text-gray-500 dark:tw-text-gray-400 tw-pb-6">
            © 2024 IIIT Bhubaneswar Tech Society. All Rights Reserved.
          </div>
          <div className="tw-mx-10 tw-pl-14 tw-mt-16 tw-grid-flow-row">
            <img src={img01} alt="img" height={600} width={300} />
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer;


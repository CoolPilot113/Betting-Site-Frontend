import { Fragment, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import {
  closeRegisterModal,
  openLoginModal,
} from '../redux/auth/authModalSlice';
import { Dialog, Transition } from '@headlessui/react';
import ReCAPTCHA from 'react-google-recaptcha';
import { setAuthToken, setAuthUser } from '../redux/auth/authDataSlice';
import { toast } from 'react-toastify';
const MyIcon = () => {
  return (
    <span className="w-4 h-4 rounded-full flex items-center justify-center bg-red-500 text-white font-bold self-start shrink-0 justify-self-start">
      &times;
    </span>
  );
};

export default function RegisterModal() {
  const dispatch = useDispatch();
  const cancelButtonRef = useRef(null);

  const isRegisterModalOpen = useSelector(
    (state) => state.authModal.isRegisterModalOpen
  );
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const register = async () => {
    setIsLoading(true);
    console.log(`${process.env.REACT_APP_SERVER_URL}/api/user/register`);
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/api/user/register`,
        {
          username: userName,
          password: password,
          email: email,
        }
      );
      console.log(res);
      //   if (res.data.success) {
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', res.data.username);
        localStorage.setItem('isLogin', 2);

        toast('You successfully register!', {
          position: 'bottom-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          progressStyle: {
            backgroundColor: '#087a04',
          },
          closeButton: MyIcon,
        });

        axios.defaults.headers.common['x-auth-token'] = res.data.token;
        dispatch(setAuthToken(res.data.token));
        dispatch(setAuthUser(res.data.username));

        dispatch(closeRegisterModal());
      } else {
        toast('register failed!', {
          position: 'bottom-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          progressStyle: {
            backgroundColor: '#f44336',
          },
          closeButton: MyIcon,
        });
        localStorage.setItem('username', 'undefined');
        localStorage.setItem('isLogin', 1);
        dispatch(closeRegisterModal());
        setIsLoading(false);
      }
    } catch (err) {
      if (err.response !== undefined && err.response !== null) {
        // dispatch('notificationShow', err.response.data.error);
        toast('register failed!', {
          position: 'bottom-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          progressStyle: {
            backgroundColor: '#f44336',
          },
          closeButton: MyIcon,
        });
        console.log(err);
      }
    }
    setIsLoading(false);
  };

  const handleRecaptchaVerify = async () => {
    console.log('verified');
    setIsCaptchaVerified(true);
  };

  const handleRecaptchaExpire = async () => {
    console.log('failed');
    setIsCaptchaVerified(false);
  };

  return (
    <Transition.Root appear show={isRegisterModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => dispatch(closeRegisterModal())}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.75)] bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="p-6 relative transform overflow-hidden border border-[#9E9E9E] rounded-lg bg-[#191919] text-white shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
                <Dialog.Title>
                  <div className="flex justify-between">
                    <div className="text-left text-[17px]">Register</div>
                    <img
                      className="w-4 h-4 cursor-pointer hover:opacity-75"
                      src="/close.png"
                      onClick={() => dispatch(closeRegisterModal())}
                    />
                  </div>
                </Dialog.Title>
                <Dialog.Description>
                  <div className="text-left text-[17px]">
                    <div className="mt-3">
                      <label htmlFor="userName" className="block mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        id="userName"
                        className="bg-[#242424] border border-[#9E9E9E] text-white rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
                        value={userName}
                        name="userName"
                        onChange={(e) => setUserName(e.target.value.trim())}
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="email" className="block mb-2">
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        className="bg-[#242424] border border-[#9E9E9E] text-white rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value.trim())}
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="password" className="block mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="bg-[#242424] border border-[#9E9E9E] text-white rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
                        value={password}
                        name="password"
                        onChange={(e) => setPassword(e.target.value.trim())}
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="password" className="block mb-2">
                        Affiliate Code (Optional)
                      </label>
                      <input
                        type="text"
                        id="password"
                        className="bg-[#242424] border border-[#9E9E9E] text-white rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
                        // value={password}
                        name="password"
                        onChange={(e) => console.log(e.target.value.trim())}
                      />
                    </div>
                    <div className="mt-5">
                      {/* <ReCAPTCHA
                        theme="dark"
                        sitekey="6LfdwjMpAAAAAOhJJzrlE9B-7V4gO5iqweJV_CVa"
                        onChange={handleRecaptchaVerify}
                        onExpired={handleRecaptchaExpire}
                      /> */}
                    </div>
                  </div>
                  <div className="text-center text-[17px]">
                    <div className="mt-5">
                      <button
                        type="submit"
                        className={`w-3/4 py-2 rounded-[5px] bg-[#F44336] w-full cursor-pointer`}
                        onClick={register}
                        // disabled={!isCaptchaVerified ? true : false}
                      >
                        Register
                      </button>
                    </div>
                    {/* <div className="mt-3">
                                <button
                                    className="w-3/4 py-2 rounded-[5px] bg-[#242424] border border-[#9E9E9E] "
                                    onClick={() => {dispatch(closeRegisterModal())}}
                                >
                                    Cancel
                                </button>
                            </div> */}
                    <div
                      className="mt-3 text-sm cursor-pointer"
                      onClick={() => {
                        dispatch(closeRegisterModal());
                        dispatch(openLoginModal());
                      }}
                    >
                      Have an account? Click here to Sign In instead
                    </div>
                  </div>
                </Dialog.Description>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

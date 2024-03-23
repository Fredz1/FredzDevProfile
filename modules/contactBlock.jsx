import { useState, useRef } from "react";
/* import sendEmail from "@/lib/sendEmail"; */
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import logo from '../assets/dot-icon.png'
import SideMenu from "./SideMenu";

import '../app/style/contactBlock.css'

const ContactBlock = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [mailSendingStatus, SetMailSendingStatus] = useState(0);
  const [responseMessage, setResponseMessage] = useState({
          type: null,
          message: "",
        });
  const { reset, register, handleSubmit } = useForm();
      const [formVal, SetFormVal] = useState({
        name: "",
        email: "",
        company: undefined,
        message: "",
    });

    const [recaptchaToken, setRecaptchaToken] = useState("");
    const recaptchaRef = useRef();

    const submitHandler = async (e) => {

        const recaptchaValue = recaptchaRef.current?.getValue();
        setRecaptchaToken(recaptchaValue || "");

        const data = e;
        const completeFormData = {
            ...data,
            recaptchaToken: recaptchaValue,
        };

        SetMailSendingStatus(1);
        try {
            const req = await sendEmail(completeFormData);
            if (req.status === 250) {
                SetMailSendingStatus(2);
                setResponseMessage({
                    type: "SUCCESS",
                    message:
                        "I am happy to receive marketing information from NorthWall Capital",
                });
            }
        } catch (e) {
            SetMailSendingStatus(2);
            setResponseMessage({
                type: "ERROR",
                message:
                    "There has been an error, please try again in a minute or contact us at info@northwallcap.com.",
            });
        }
    };

    const inputStyle = `w-full border-b md:placeholder:text-xl bg-transparent p-1 `
  
  return (
    <section>
      <div>
        <div className="logoText">
          <motion.div
            initial={{ x: -750 }}
            animate={{ x: 0, rotate: 1080 }}
            transition={{ 
              duration: 5 ,
              repeat: 0,
            }}
          >
            <Image className="logo" src={logo} alt="site logo" width={150} priority />
          </motion.div>
          <motion.h1
            initial={{ y: -150, rotate: -90 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{
                duration: 2,
                type: "spring",
            }}
            style={{transformOrigin: "left"}}
          >
            FredMadeThis.
          </motion.h1>
        </div>
        <div className="contactArea">
          <div className="contactLinks">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path fill="#232B38" d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
              </svg>
              <p>
                Facebook
              </p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                <path fill="#232B38" d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
              <p>
                GitHub
              </p>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
              <path fill="#232B38" d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M7.738,17L7.738,17 c-0.697,0-1.262-0.565-1.262-1.262v-4.477C6.477,10.565,7.042,10,7.738,10h0C8.435,10,9,10.565,9,11.262v4.477 C9,16.435,8.435,17,7.738,17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2 S8.551,8.717,7.694,8.717z M16.779,17L16.779,17c-0.674,0-1.221-0.547-1.221-1.221v-2.605c0-1.058-0.651-1.174-0.895-1.174 s-1.058,0.035-1.058,1.174v2.605c0,0.674-0.547,1.221-1.221,1.221h-0.081c-0.674,0-1.221-0.547-1.221-1.221v-4.517 c0-0.697,0.565-1.262,1.262-1.262h0c0.697,0,1.262,0.565,1.262,1.262c0,0,0.282-1.262,2.198-1.262C17.023,10,18,10.977,18,13.174 v2.605C18,16.453,17.453,17,16.779,17z"></path>
            </svg>
              <p>
                LinkedIn
              </p>
            </div>
            <div>
              <p>
                <Link href="mailto:fredwil25@gmail.com">
                  Mail
                </Link>
              </p>
              <p>
                Email
              </p>
            </div>
            <div>
              <p>
                whatsappIcon
              </p>
              <p>
                Whatsapp
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit(submitHandler)} className="inputForm">
            <div>
              {responseMessage.type && (
                <p
                  className={`border text-sm ${
                    responseMessage.type === "SUCCESS"
                      ? "border-green-300 text-green-100"
                      : "border-red-300 text-red-100"
                  } p-2`}
                >
                  {responseMessage.message}
                </p>
              )}
            </div>
              <div>
                <label>
                  <input
                      type="text"
                      required
                      className={inputStyle}
                      placeholder={"Full Name"}
                      {...register("name")}
                  />
                </label>
              </div>
              <div>
                  <label>
                      <input
                          type="email"
                          required
                          className={inputStyle}
                          placeholder={"Email Address"}
                          {...register("email")}
                      />
                  </label>
              </div>
              <div>
                  <label>
                      <input
                          type="text"
                          required
                          className={inputStyle}
                          placeholder={"Message"}
                          {...register("message")}
                      />
                  </label>
              </div>
              <div>
                  <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                      className="my-4"
                      onChange={(value) => setRecaptchaToken(value || "")}
                  />

                  <motion.button
                      type="submit"
                      className={`mt-2 self-start text-lg uppercase `}
                      initial={{ y: 300, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                  >
                      {mailSendingStatus === 1 ? "Sending" : "Submit"}
                  </motion.button>
              </div>
          </form>
        </div>
      </div>
        <SideMenu />
    </section>
  );
}

export default ContactBlock;

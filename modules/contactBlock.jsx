import { useState, useRef } from "react";
import sendEmail from "../util/sendEmail";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import logo from '../assets/dot-icon.png'
import SideMenu from "./SideMenu";
import SocialMedia from "./SocialMedia";

import style from '../app/style/contactBlock.module.css'

const ContactBlock = () => {

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [mailSendingStatus, SetMailSendingStatus] = useState(0);

  const [responseMessage, setResponseMessage] = useState({
          type: null,
          message: "",
        });

  const { reset, register, handleSubmit } = useForm();

  const [formVal, SetFormVal] = useState({
    name: "",
    message: "",
    email: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef();

  const submitHandler = async (e) => {
      const recaptchaValue = recaptchaRef.current?.getValue();

      setRecaptchaToken(recaptchaValue || "");

      const completeFormData = {
          ...e,
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
                      "I am excited to hear from you, I will get back to you as soon as possible.",
              });
          }
      } catch (e) {
          SetMailSendingStatus(2);
          setResponseMessage({
              type: "ERROR",
              message:
                  "There is an error sending your message, please try again later.",
          });
      }
  };

  return (
    <section className={style.section}>
      <div >
        <div className={style.logoText}>
          <motion.div
            initial={{ x: -750 }}
            animate={{ x: 0, rotate: 1080 }}
            transition={{ 
              duration: 5 ,
              repeat: 0,
            }}
          >
            <Image className={style.logo} src={logo} alt="site logo" width={150} priority />
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
        <div className={style.contactArea}>
          <SocialMedia direction="column" />
          <form onSubmit={handleSubmit(submitHandler)} className={style.form}>
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
                      className={style.input}
                      required
                      placeholder={"Full Name"}
                      {...register("name")}
                  />
                </label>
              </div>
              <div>
                  <label>
                      <input
                          type="email"
                          className={style.input}
                          required
                          placeholder={"Email Address"}
                          {...register("email")}
                          onChange={(e) => {validateEmail(e.target.value)}}
                      />
                  </label>
              </div>
              <div>
                  <label>
                      <input
                          type="text"
                          className={style.input}
                          required
                          placeholder={"Message"}
                          {...register("message")}
                      />
                  </label>
              </div>
              <div>
                  {/* <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                      className="my-4"
                      onChange={(value) => setRecaptchaToken(value || "")}
                  /> */}

                  <motion.button
                      type="submit"
                      className={style.submitButton}
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

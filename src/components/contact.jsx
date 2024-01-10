import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./earth";
import { slideIn } from "../utils/motion";
import { StarWrapper } from '../hoc/sectionwrapper';

const Contact = () => {
  const formRef = useRef();
  const [nameErr, setNameErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [msgErr, setMsgErr] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === "") {
      setNameErr(true)
      return
    } else {
      setNameErr(false)
    }
    if (form.email === "") {
      setEmailErr(true)
      return
    } else {
      setEmailErr(false)
    }
    if (form.message === "") {
      setMsgErr(true)
      return
    } else {
      setMsgErr(false)
    }
    setLoading(true);
    emailjs
      .send(
        'service_amw24i8',
        'template_0m8p5ub',
        {
          from_name: form.name,
          to_name: "Maninder Pahal",
          from_email: form.email,
          to_email: "mpahal123@gmail.com",
          message: form.message,
        },
        '8Eq5ODEHhkKJ-YrOQ'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 pt-5 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h2 className='text-white mt-22 font-black md:text-[40px] sm:text-[50px] sx:text-[50px] text-[60px]'>Get in touch</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-5'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-sky-800 py-4 px-6 placeholder:text-cyan-300 text-white rounded-lg outline-none border-none font-medium'
            />
            { nameErr && <p className="failure">Must enter name</p>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-sky-800 py-4 px-6 placeholder:text-cyan-300 text-white rounded-lg outline-none border-none font-medium'
            />
            { emailErr && <p className="failure">Must enter email</p>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={3}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-sky-800 py-4 px-6 placeholder:text-cyan-300 text-white rounded-lg outline-none border-none font-medium'
            />
            { msgErr && <p className="failure">Must enter message</p>}
          </label>

          <button
            type='submit'
            className='bg-sky-800 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-sky-800'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};
export default StarWrapper(Contact, 'contact');
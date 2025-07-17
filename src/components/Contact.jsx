import { useState } from "react";
import Input from "./Input";

const generateMailLink = (
  { name, email, subject, message },
  useGmail = false
) => {
  const formattedBody = `Hi,\n\n${message}\n\nBest regards,\n${name}\n(${email})`;

  if (useGmail) {
    return `https://mail.google.com/mail/?view=cm&to=uthmanoyewole95@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(formattedBody)}`;
  }

  return `mailto:uthmanoyewole95@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(formattedBody)}`;
};

export default function Contact() {
  const [body, setBody] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBody((prevBody) => ({
      ...prevBody,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log("Form submitted with data:", body);
    e.preventDefault();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      alert("Please fill all fields.");
      return;
    }

    window.open(generateMailLink(body, true), "_blank");
    setBody({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="block pt-[100px] h-auto pb-12 max-md:pt-[50px]">
      <h1 className="text-white font-medium font-[Roboto Serif] mb-[100px] max-md:mb-[40px] mx-auto text-center text-3xl">
        Contact
      </h1>
      <div className="grid mx-auto w-[90vw] grid-cols-2 max-md:flex max-md:flex-col max-md:space-y-5">
        <div className="flex flex-col text-white text-left space-y-2 px-[10%] py-5 max-md:py-0 max-md:text-center">
          <h3 className="font-semibold font-[Roboto Serif] text-3xl max-md:text-xl">
            Got a project in mind?
          </h3>
          <h1 className="font-semibold font-[Roboto Serif] text-5xl/[60px] max-md:text-2xl">
            Let's talk
          </h1>
          <span className="block bg-white w-1/5 h-[1px] mb-5 max-md:w-full max-md:mt-3"></span>
          <p className="font-normal text-lg pb-2 font-[Roboto] opacity-55 max-md:opacity-80 max-md:text-base">
            I am always interested to discuss new opportunities and interesting projects. Whether you're a startup, an established company, or a fellow developer, I'd love to hear from you
          </p>
          <a
            href="/"
            className="contact-link font-normal max-md:mx-auto max-md:text-sm flex space-x-2 font-[Roboto] text-base mb-4 hover:text-blue-400 hover:underline"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 14 14"
              fill="#21EAE0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2.62512V11.3751C14 11.8717 13.6216 12.2501 13.125 12.2501H12.25V4.30906L7 8.08031L1.75 4.30906V12.2501H0.875C0.378438 12.2501 0 11.8717 0 11.3751V2.62512C0 2.37662 0.093625 2.15787 0.250688 2.00299C0.332443 1.92109 0.429856 1.85649 0.537117 1.81304C0.644378 1.7696 0.75929 1.7482 0.875 1.75012H1.16681L7 5.97943L12.8332 1.75012H13.125C13.3735 1.75012 13.5922 1.84374 13.7493 2.00299C13.9064 2.15787 14 2.37662 14 2.62512Z"
              />
            </svg>
            <span> uthmanoyewole95@gmail.com</span>
          </a>
          <a
            href="/"
            className="contact-link font-normal max-md:mx-auto max-md:text-sm flex space-x-2 font-[Roboto] text-base hover:text-blue-400 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#21EAE0"
              class="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>{" "}
            <span>+234 812 176 2229</span>
          </a>
        </div>
        <form
          action=""
          className="flex flex-col space-y-5 border border-l-white/40 px-[10%] pb-3 max-md:mt-8 max-md:border-0 max-md:space-y-3"
        >
          <Input
            type={"name"}
            placeholder={"Name"}
            name={"name"}
            value={body.name}
            onChange={handleChange}
          />
          <Input
            type={"email"}
            placeholder={"Email"}
            name={"email"}
            value={body.email}
            onChange={handleChange}
          />
          <Input
            type={"subject"}
            placeholder={"Subject"}
            name={"subject"}
            value={body.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            value={body.message}
            className="w-full h-[140px] max-md:h-[120px] max-md:rounded-[12px] px-5 py-3 bg-transparent border-1 rounded-[20px] border-white/40 text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 placeholder:text-white/35"
            required
          ></textarea>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full h-[70px] max-md:h-[60px] max-md:rounded-[12px] px-5 py-3 bg-blue-400 rounded-[20px] hover:bg-[#3DBEFF] transition-colors duration-500 text-white font-[Roboto]"
          >
            Submit now
          </button>
        </form>
      </div>
    </main>
  );
}

import SocialLink from "./SocialLink";

export default function Footer() {
  return (
    <footer className="flex justify-between px-[7%] border-t-1 border-white/80 py-8 font-[Roboto] max-md:flex-col max-md:justify-center">
      <p className="font-normal text-white text-sm max-md:mx-auto">
        &copy; {new Date().getFullYear()}, Ikeoluwa Oyewole. All rights
        reserved.
      </p>
      <div className="flex items-center max-md:mx-auto max-md:mt-5 max-md:space-x-4">
        <SocialLink
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="#fff"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          }
          link={"https://github.com/KT-SIMI"}
        />
        <SocialLink
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              className="bi bi-twitter-x"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          }
          link={"https://x.com/kt_simi?t=b6NXjTc5z2WAx1nrGcMOEA&s=09"}
        />
        <SocialLink
          svg={
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 2.62512V11.3751C14 11.8717 13.6216 12.2501 13.125 12.2501H12.25V4.30906L7 8.08031L1.75 4.30906V12.2501H0.875C0.378438 12.2501 0 11.8717 0 11.3751V2.62512C0 2.37662 0.093625 2.15787 0.250688 2.00299C0.332443 1.92109 0.429856 1.85649 0.537117 1.81304C0.644378 1.7696 0.75929 1.7482 0.875 1.75012H1.16681L7 5.97943L12.8332 1.75012H13.125C13.3735 1.75012 13.5922 1.84374 13.7493 2.00299C13.9064 2.15787 14 2.37662 14 2.62512Z" />
            </svg>
          }
          link={"mailto:uthmanoyewole95@gmail.com"}
        />
      </div>
    </footer>
  );
}

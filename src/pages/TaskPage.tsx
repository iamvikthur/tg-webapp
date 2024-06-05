import React from "react";
import CoinsDisplay from "../components/CoinsDisplay";
import { FaSquareXTwitter } from "react-icons/fa6";

const TaskPage = () => {
  return (
    <>
      <CoinsDisplay page="task" />
      <div className="mt-10 px-4">
        <hr />
        <div className="text-2xl font-bold text-gray-300 mt-8">Tasks</div>
        <div className="flex gap-5 flex-row bg-cyan-900 p-3 bg-opacity-20 rounded-lg mt-4">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              style={{
                backgroundColor: "white",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
              }}
            >
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
          </div>
          <div className="flex-1">
            <h4>Twitter</h4>
            <span className="text-gray-500 text-xs">Follow me on twitter</span>
          </div>
          <div className="block">
            <a
              href="https://x.com/daemon_coder"
              target="blank"
              className="text-xs bg-black p-2 rounded-xl"
            >
              Follow
            </a>
          </div>
        </div>
        <div className="flex gap-5 flex-row bg-cyan-900 p-3 bg-opacity-20 rounded-lg mt-4">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
              style={{
                backgroundColor: "white",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
              }}
            >
              <path
                fill="#29b6f6"
                d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
              ></path>
              <path
                fill="#fff"
                d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
              ></path>
              <path
                fill="#b0bec5"
                d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
              ></path>
              <path
                fill="#cfd8dc"
                d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
              ></path>
            </svg>
          </div>
          <div className="flex-1">
            <h4>Telegram</h4>
            <a
              href="https://t.me/daemon_coder"
              target="blank"
              className="text-gray-500 text-xs"
            >
              Contact me on telegram
            </a>
          </div>
          <div className="block">
            <span className="text-xs bg-black p-2 rounded-xl">contact</span>
          </div>
        </div>
        <div className="flex gap-5 flex-row bg-cyan-900 p-3 bg-opacity-20 rounded-lg mt-4">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
              style={{
                backgroundColor: "white",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
              }}
            >
              <path
                fill="#0078d4"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
              ></path>
              <path
                d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                opacity=".05"
              ></path>
              <path
                d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                opacity=".07"
              ></path>
              <path
                fill="#fff"
                d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
              ></path>
            </svg>
          </div>
          <div className="flex-1">
            <h4>LinkedIn</h4>
            <span className="text-gray-500 text-xs">
              Connect with me on linkedin
            </span>
          </div>
          <div className="block">
            <a
              href="https://www.linkedin.com/in/shigaba-victor-shigaba-530306185/"
              target="blank"
              className="text-xs bg-black p-2 rounded-xl"
            >
              connect
            </a>
          </div>
        </div>
        <div className="flex gap-5 flex-row bg-cyan-900 p-3 bg-opacity-20 rounded-lg mt-4">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 72 72"
              style={{
                backgroundColor: "white",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
              }}
            >
              <path d="M45.049,14C57.06,14,58,14.94,58,26.951v18.098C58,57.06,57.06,58,45.049,58H26.951C14.94,58,14,57.06,14,45.049V26.951	C14,14.94,14.94,14,26.951,14H45.049z M29.713,44.151c4.502,0,8.151-3.649,8.151-8.151c0-4.502-3.649-8.151-8.151-8.151	c-4.502,0-8.151,3.649-8.151,8.151C21.562,40.502,25.212,44.151,29.713,44.151z M42.713,43.757c2.228,0,4.034-3.473,4.034-7.757	c0-4.284-1.806-7.757-4.034-7.757c-2.228,0-4.034,3.473-4.034,7.757C38.679,40.284,40.485,43.757,42.713,43.757z M48.98,42.928	c0.775,0,1.403-3.102,1.403-6.928s-0.628-6.928-1.403-6.928c-0.775,0-1.403,3.102-1.403,6.928S48.205,42.928,48.98,42.928z"></path>
            </svg>
          </div>
          <div className="flex-1">
            <h4>Medium</h4>
            <span className="text-gray-500 text-xs">Follow me on medium</span>
          </div>
          <div className="block">
            <a
              href="https://medium.com/@iamvikthur"
              target="blank"
              className="text-xs bg-black p-2 rounded-xl"
            >
              Follow
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskPage;

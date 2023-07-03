import axios from "axios";

export default function login() {
  axios
    .post("cryptoPricesUrl")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className="w-1/4 h-auto bg-white bg-opacity-5 rounded-3xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex-col items-center justify-center p-5">
        <h1 className=" text-2xl font-bold mt-5 mb-3">JOIN LOBBY</h1>
        <h2>Name</h2>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />

        <h2 className="mt-3">Wallet</h2>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Wallet (Optional)"
        />
        <div className="w-full flex justify-end">
          <button
            className="mt-3 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}

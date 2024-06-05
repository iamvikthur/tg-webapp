const RefPage = () => {
  return (
    <>
      <div className="px-6 py-6">
        <div className="text-center text-3xl font-bold mt-4">
          10 Referrals
          <div className="text-green-400 text-xs mt-2">+100 000</div>
        </div>
        <div className="mt-6 bg-cyan-900 bg-opacity-20 p-4 rounded-lg">
          <div className="text-md">My invite link:</div>
          <div className="mt-2 text-xs flex justify-between items-center">
            <span>Lorem ipsum dolor sit amet</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-xl">My Referrals:</div>
          <div className="bg-cyan-900 p-4 bg-opacity-20 rounded-lg mt-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-bold">John Doe</div>
                <div className="text-sm text-gray-400">Unknown</div>
              </div>
              <div className="text-yellow-500">+0</div>
            </div>
            <div className="mt-2 text-xl font-bold text-yellow-500">0</div>
            <div className="bg-purple-500 h-2 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefPage;

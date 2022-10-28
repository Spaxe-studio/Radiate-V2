/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { useState, useEffect, useReducer, useRef } from "react";
import { useNotification } from "web3uikit";
import { useMoralis, useWeb3Contract } from "react-moralis";
const { ethers } = require("ethers");
const { StakingInfo, TokenInfo } = require("../../constants/deploy");

export default function Example() {
  // form DATA
  const [stakeAmount, setStakeAmount] = useState(0);
  const [poolType, setPoolType] = useState("Electromagnetic");
  const [actionType, setActionType] = useState("Stake");
  const [poolId, setPoolId] = useState(0);
  const [range, setRange] = useState(0);
  const [RADBalance, setRADBalance] = useState("0");
  const [earned, setEarned] = useState(0);
  const [apy, setAPY] = useState(50);
  const [lockTime, setLockTime] = useState("0 days");
  const [totalStaked, setTotalStaked] = useState(0);
  const [staked, setStaked] = useState("0");
  const [approved, setApproved] = useState("false");

  const dispatch = useNotification();
  const { isWeb3Enabled, account, isWeb3EnableLoading } = useMoralis();

  const { runContractFunction: updateTotalStaked } = useWeb3Contract({
    abi: StakingInfo.abi,
    contractAddress: StakingInfo.address,
    functionName: "totalStaked",
    params: {},
  });

  const { runContractFunction: getAvailableRadiate } = useWeb3Contract({
    abi: TokenInfo.abi,
    contractAddress: TokenInfo.address,
    functionName: "balanceOf",
    params: { account: account },
  });

  const { runContractFunction: getTotalStakedInPool } = useWeb3Contract({
    abi: StakingInfo.abi,
    contractAddress: StakingInfo.address,
    functionName: "getStakedInPool",
    params: { account, poolId },
  });

  const { runContractFunction: getRewards } = useWeb3Contract({
    abi: StakingInfo.abi,
    contractAddress: StakingInfo.address,
    functionName: "getRewards",
    params: { _staker: account, poolId },
  });

  const { runContractFunction: stake } = useWeb3Contract({
    abi: StakingInfo.abi,
    contractAddress: StakingInfo.address,
    functionName: "stake",
    params: { _stakeNumber: stakeAmount, poolId },
  });

  const { runContractFunction: unstake } = useWeb3Contract({
    abi: StakingInfo.abi,
    contractAddress: StakingInfo.address,
    functionName: "unstake",
    params: { _unstakeNumber: stakeAmount, poolId },
  });

  const { runContractFunction: approve } = useWeb3Contract({
    abi: TokenInfo.abi,
    contractAddress: TokenInfo.address,
    functionName: "approve",
    params: {
      spender: StakingInfo.address,
      amount: ethers.constants.MaxUint256,
    },
  });

  const updateUI = () => {
    console.log(account);
    getAvailableRadiate().then((r) => {
      setRADBalance(r);
      console.log("available balance : " + ethers.utils.formatEther(r));
    });
    updateTotalStaked().then((r) => {
      setTotalStaked(r);
      console.log("Total Radiate Staked : " + ethers.utils.formatEther(r));
    });
    getTotalStakedInPool().then((r) => {
      setStaked(r);
      console.log(
        "Total Radiate Staked For Account : " + ethers.utils.formatEther(r)
      );
    });
    getRewards().then((r) => {
      setEarned(r);
      console.log(
        "Total Radiate Rewards For Pool : " +
          poolId +
          " " +
          ethers.utils.formatEther(r)
      );
    });
    setApproved(localStorage.getItem("approved" + account));
  };

  const rangeChanged = (e) => {
    setRange(e.target.value);
    if (actionType == "Stake") {
      if (RADBalance != "0") {
        setStakeAmount(RADBalance.mul(parseInt(e.target.value)).div(100));
      }
    } else {
      if (staked != "0") {
        setStakeAmount(staked.mul(parseInt(e.target.value)).div(100));
      }
    }
  };

  const poolChanged = (e) => {
    const option = e.target.options[e.target.selectedIndex].value;
    let percents = {
      Electromagnetic: 50,
      Neutron: 75,
      Beta: 100,
      Alpha: 160,
    };
    let Ids = {
      Electromagnetic: 0,
      Neutron: 1,
      Beta: 2,
      Alpha: 3,
    };
    let LockTimes = {
      Electromagnetic: "0",
      Neutron: "7 days",
      Beta: "14 days",
      Alpha: "30 days",
    };
    setPoolId(Ids[option]);
    setAPY(percents[option]);
    setLockTime(LockTimes[option]);
    setPoolType(option);
  };

  const action_submited = (e) => {
    e.preventDefault();
    if (actionType == "Stake") {
      console.log(
        `Trying to stake ${ethers.utils.formatEther(
          stakeAmount
        )} for ${account} in PoolId ${poolId}`
      );
      stake({
        onError: (error) => console.log(error),
        onSuccess: handleStakeSuccess,
      });
      updateUI();
    } else {
      console.log(
        `Trying to unstake ${ethers.utils.formatEther(
          stakeAmount
        )} for ${account} from PoolId ${poolId}`
      );
      if (ethers.utils.formatEther(staked).toString() == "0.0") {
        return dispatch({
          type: "error",
          message: "You did not stake any amount!",
          title: "Unstaking",
          position: "topR",
        });
      }
      unstake({
        onError: (error) => console.log(error),
        onSuccess: handleUnstakeSuccess,
      });
      updateUI();
    }
  };

  const actionTypeChanged = (e) => {
    setStakeAmount("0");
    setActionType(e.target.value);
  };

  const approveStaking = (e) => {
    e.preventDefault();
    approve({
      onError: (error) => console.log(error),
      onSuccess: handleApproveSuccess,
    });
  };

  const handleApproveSuccess = async (tx) => {
    await tx.wait(1);
    dispatch({
      type: "success",
      message: "Approved Staking Contract!",
      title: "Approval",
      position: "topR",
    });
    localStorage.setItem("approved" + account, "true");
    setApproved(true);
  };

  const handleStakeSuccess = async (tx) => {
    await tx.wait(1);
    dispatch({
      type: "success",
      message: "Successfuly Staked!",
      title: "Staking",
      position: "topR",
    });
    updateUI();
  };

  const handleUnstakeSuccess = async (tx) => {
    await tx.wait(1);
    dispatch({
      type: "success",
      message: "Successfuly Unstaked!",
      title: "Unstaking",
      position: "topR",
    });
    updateUI();
  };
  /**
   * Update UI:
   * - Total Staked => stakingContarct.totalStaked() +
   * - Available => token.balanceOf(address) +
   * - Total Earned => stakingcontract.getReward(address, poolId)
   * - My Stakings
   * - Percent => change based on aviablale and set in input
   */
  useEffect(() => {
    if (isWeb3Enabled) {
      setApproved(localStorage.getItem("approved" + account));
      updateUI();
    }
  }, [isWeb3Enabled, account, poolId]);

  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
            <div className="px-4 pt-10 md:pt-24 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div>
                <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  {ethers.utils.formatEther(totalStaked)} RAD
                </h1>
                <p className="mt-3 text-5xl text-gray-300 sm:mt-5  lg:text-4xl xl:text-4xl">
                  Total Staked
                </p>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0 p-4 rounded-lg shadow-lg">
              <div className="bg-[#141414] sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden rounded-lg">
                <div className="px-4 py-8 sm:px-10">
                  <div className="mt-6">
                    <form
                      method="POST"
                      onSubmit={(e) => handleSubmit(e)}
                      className="space-y-6"
                    >
                      <div>
                        <label htmlFor="amount" className="sr-only">
                          {actionType == "Stake"
                            ? "Stake Amount"
                            : "Unstake Amount"}
                        </label>
                        <span className="flex mb-4 justify-between text-white">
                          <h4>
                            {actionType == "Stake"
                              ? "Stake Amount"
                              : "Unstake Amount"}
                          </h4>
                          <p className="text-gray-400">
                            Available: {ethers.utils.formatEther(RADBalance)}{" "}
                            RAD
                          </p>
                        </span>
                        <input
                          type="number"
                          name="stake-amount"
                          id="stake-amount"
                          autoComplete="amount"
                          placeholder="STAKE AMOUNT [RAD]"
                          required
                          className="appearance-none block w-full p-4 bg-transparent text-white rounded-md border  sm:text-xl"
                          value={ethers.utils.formatEther(stakeAmount)}
                          onChange={(e) =>
                            setStakeAmount(
                              ethers.utils.parseEther(e.target.value)
                            )
                          }
                        />
                      </div>

                      <div>
                        <label htmlFor="mobile-or-email" className="sr-only">
                          Pool Type
                        </label>
                        <span className="flex mb-4 justify-between text-white">
                          <h4>Pool Type</h4>
                        </span>
                        <select
                          id="pool-type"
                          name="pool-type"
                          className="block w-full p-4 bg-transparent text-white rounded-md border  ring-slate-500  sm:text-xl"
                          value={poolType}
                          onChange={poolChanged}
                        >
                          <option className=" text-black text-xl p-4">
                            Bronze
                          </option>
                          <option className=" text-black text-xl p-4">
                            Gold
                          </option>
                          <option className=" text-black text-xl p-4">
                            Platinum
                          </option>
                          <option className=" text-black text-xl p-4">
                            Diamond
                          </option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="mobile-or-email" className="sr-only">
                          Action
                        </label>
                        <span className="flex mb-4 justify-between text-white">
                          <h4>Action</h4>
                        </span>
                        <select
                          id="action-type"
                          name="action-type"
                          className="block w-full p-4 bg-transparent text-white rounded-md border sm:text-xl"
                          value={actionType}
                          onChange={actionTypeChanged}
                        >
                          <option className=" text-black text-xl p-4">
                            Stake
                          </option>
                          <option className=" text-black text-xl p-4">
                            Unstake
                          </option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="range" className="sr-only">
                          {actionType == "Stake" ? "To Stake" : "To Unstake"}
                        </label>
                        <span className="flex mb-4 justify-between items-center text-white">
                          <h4>
                            {actionType == "Stake" ? "To Stake" : "To Unstake"}
                          </h4>
                          <span className="px-6 py-2 w-26 justify-self-end text-center bg-black  font-bold rounded-full text-white">
                            {ethers.utils.formatEther(stakeAmount)}
                          </span>
                        </span>
                        <input
                          type="range"
                          name="range"
                          id="range"
                          min="0"
                          max="100"
                          required
                          className="block w-full rounded-lg cursor-pointer h-2 shadow-sm sm:text-xl"
                          value={range}
                          onChange={rangeChanged}
                        />
                        <span className="flex mt-4 justify-between text-white">
                          <h4>0%</h4>
                          <h4>100%</h4>
                        </span>
                      </div>

                      <div className="border-t border-gray-900 py-6">
                        <span className="flex mb-4 justify-between text-white">
                          <h4>APY:</h4>
                          <p className="text-gray-400">{apy}%</p>
                        </span>
                        <span className="flex mb-4 justify-between text-white">
                          <h4>Lock Time:</h4>
                          <p className="text-gray-400">{lockTime}</p>
                        </span>
                        <span className="flex mb-4 justify-between text-white">
                          <h4>Your Staked:</h4>
                          <p className="text-gray-400">
                            {ethers.utils.formatEther(staked)} RAD
                          </p>
                        </span>
                        <span className="flex mb-4 justify-between text-white">
                          <h4>Total Earned</h4>
                          <p className="text-gray-400">
                            {ethers.utils.formatEther(earned)} RAD
                          </p>
                        </span>
                      </div>

                      <div>
                        <button
                          onClick={action_submited}
                          disabled={
                            !(isWeb3Enabled && account && !isWeb3EnableLoading)
                          }
                          className=" bg-[#DD2424] flex w-full justify-center rounded-md border border-transparent py-4 px-4 text-xl font-medium text-white shadow-sm focus:outline-none"
                        >
                          Submit
                        </button>
                        {!approved && (
                          <button
                            disabled={
                              !(
                                isWeb3Enabled &&
                                account &&
                                !isWeb3EnableLoading
                              )
                            }
                            onClick={approveStaking}
                            className="mt-2 flex w-full justify-center rounded-md border border-[#DD2424] py-4 px-4 text-xl font-medium text-white shadow-sm focus:outline-none"
                          >
                            Approve
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

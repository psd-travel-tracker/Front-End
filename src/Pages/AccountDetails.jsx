import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/account.css";
import NavMenu from "../Components/NavMenu";

export default function AccountPage() {
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState({
        name: "Eva Jeliazkova",
        email: "eva.jeliazkova@mail.com",
    });

    return (
        <>
            <div className="ProfileContainer">
                <div className="ProfileWrapper">
                    <div className="ProfileHeader">
                        <div className="UserDetailsWrapper">
                            <svg
                                fill="#000000"
                                width="36px"
                                height="36px"
                                viewBox="0 0 1920 1920"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M970.11 1129.48c195.05.903 388.857 30.494 575.888 87.98 88.658 27.22 148.178 107.069 148.178 198.777v155.068c-133.27 94.984-388.969 235.709-734.117 235.709-152.923 0-448.377-31.06-734.118-235.709v-155.068c0-91.708 59.746-171.67 148.744-198.89 193.58-59.406 393.826-87.19 595.426-87.867Zm-2.145-1016.584c184.32 0 341.308 129.882 378.691 307.313-31.962 18.522-65.054 31.51-122.315 31.51-73.637 0-107.068-21.12-149.534-47.774-48.339-30.494-103.002-65.167-208.49-65.167-106.277 0-161.28 34.786-209.844 65.393-28.348 17.845-52.744 33.205-87.868 41.45C595.372 257.8 757.216 112.896 952.153 112.896h15.812Zm611.124 996.593c-106.277-32.64-214.814-56.019-324.48-71.605 128.866-90.579 213.685-239.774 213.685-408.847h-112.941c0 213.685-173.817 387.388-387.388 387.388h-15.812c-213.572 0-387.388-173.703-387.388-387.388v-67.99c70.136-9.713 113.167-36.82 152.019-61.44 42.465-26.767 76.009-47.887 149.534-47.887 72.734 0 106.051 21.007 148.178 47.66 48.565 30.608 103.568 65.28 209.845 65.28 106.278 0 161.506-35.011 214.363-68.555l29.929-18.974-4.066-35.35C1434.864 189.92 1221.292-.045 967.965-.045h-15.812c-275.915 0-500.33 224.527-500.33 508.235v120.847c0 169.412 85.045 318.72 214.137 409.299-109.553 15.247-218.09 38.4-324.48 71.04C204.821 1151.277 113 1274.722 113 1416.237v211.99l22.588 16.942c318.833 239.096 653.365 274.786 824.47 274.786 398.457 0 687.587-172.235 824.471-274.786l22.589-16.941v-211.99c0-141.63-91.709-264.848-228.029-306.75Z"
                                        fillRule="evenodd"
                                    ></path>{" "}
                                </g>
                            </svg>
                            <div className="UserDetails">
                                <h1>{userProfile.name}</h1>
                                <p>{userProfile.email}</p>
                            </div>
                        </div>
                        <button
                            className="SignOutButton"
                            onClick={() => {
                                localStorage.removeItem("userId");
                                navigate("/");
                            }}
                        >
                            Sign Out
                        </button>
                    </div>

                    <div>
                        <div className="SettingsWrapper">
                            <h2>Account Settings</h2>
                            <div className="SettingsSection">
                                <h3>Notification Preferences</h3>
                                <div className="NotificationToggle">
                                    <label className="ToggleLabel">
                                        <input type="checkbox" defaultChecked />
                                        <span className="ToggleSwitch"></span>
                                        Email notifications for trip reminders
                                    </label>
                                </div>
                                <div className="NotificationToggle">
                                    <label className="ToggleLabel">
                                        <input type="checkbox" defaultChecked />
                                        <span className="ToggleSwitch"></span>
                                        Budget alerts when nearing limit
                                    </label>
                                </div>
                            </div>

                            <div className="SettingsSection">
                                <h3>Currency</h3>
                                <select
                                    className="CurrencyDropdown"
                                    defaultValue="USD"
                                >
                                    <option value="USD">USD ($)</option>
                                    <option value="EUR">EUR (€)</option>
                                    <option value="GBP">GBP (£)</option>
                                    <option value="JPY">JPY (¥)</option>
                                </select>
                            </div>

                            <div className="SettingsSection">
                                <h3>Security</h3>
                                <button className="SettingsButton">
                                    Change Password
                                </button>
                                <button className="SettingsButton">
                                    Two-Factor Authentication
                                </button>
                            </div>

                            <div className="SettingsSection">
                                <h3>Account Management</h3>
                                <button className="SettingsButton SettingsDeleteButton">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <NavMenu />
        </>
    );
}

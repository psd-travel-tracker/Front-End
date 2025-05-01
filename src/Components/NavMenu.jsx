import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/common.css';
import '../Style/nav.css';

export default function NavMenu() {
    const navigate = useNavigate();

    return(
            <div className="NavWrapper">
                <button onClick={() => navigate('/view-trips')} className="button NavButton">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z" stroke="#1C274C" strokeWidth="1.5"/>
                        <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </button>

                <button onClick={() => navigate('/create-new-trip')} className="button NavButton">
                    <svg width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path><path fill="#000000" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"></path><path fill="#000000" d="M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"></path></g></svg>
                </button>

                <button onClick={() => navigate('/create-expense')} className="button NavButton">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 7.5V16.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M22 6V2H18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M17 7L22 2" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </button>
                
                <button onClick={() => navigate('/account-details')} className="button NavButton">
                    <svg fill="#000000" width="24px" height="24px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M970.11 1129.48c195.05.903 388.857 30.494 575.888 87.98 88.658 27.22 148.178 107.069 148.178 198.777v155.068c-133.27 94.984-388.969 235.709-734.117 235.709-152.923 0-448.377-31.06-734.118-235.709v-155.068c0-91.708 59.746-171.67 148.744-198.89 193.58-59.406 393.826-87.19 595.426-87.867Zm-2.145-1016.584c184.32 0 341.308 129.882 378.691 307.313-31.962 18.522-65.054 31.51-122.315 31.51-73.637 0-107.068-21.12-149.534-47.774-48.339-30.494-103.002-65.167-208.49-65.167-106.277 0-161.28 34.786-209.844 65.393-28.348 17.845-52.744 33.205-87.868 41.45C595.372 257.8 757.216 112.896 952.153 112.896h15.812Zm611.124 996.593c-106.277-32.64-214.814-56.019-324.48-71.605 128.866-90.579 213.685-239.774 213.685-408.847h-112.941c0 213.685-173.817 387.388-387.388 387.388h-15.812c-213.572 0-387.388-173.703-387.388-387.388v-67.99c70.136-9.713 113.167-36.82 152.019-61.44 42.465-26.767 76.009-47.887 149.534-47.887 72.734 0 106.051 21.007 148.178 47.66 48.565 30.608 103.568 65.28 209.845 65.28 106.278 0 161.506-35.011 214.363-68.555l29.929-18.974-4.066-35.35C1434.864 189.92 1221.292-.045 967.965-.045h-15.812c-275.915 0-500.33 224.527-500.33 508.235v120.847c0 169.412 85.045 318.72 214.137 409.299-109.553 15.247-218.09 38.4-324.48 71.04C204.821 1151.277 113 1274.722 113 1416.237v211.99l22.588 16.942c318.833 239.096 653.365 274.786 824.47 274.786 398.457 0 687.587-172.235 824.471-274.786l22.589-16.941v-211.99c0-141.63-91.709-264.848-228.029-306.75Z" fillRule="evenodd"></path> </g></svg>
                </button>
            </div>
    );
}


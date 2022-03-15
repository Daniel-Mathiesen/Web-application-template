import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGears, faAngleRight, faPalette, faBell, faCookie, faUserShield, faUserSecret, faBan} from "@fortawesome/free-solid-svg-icons";
// import SettingsData from "../json/settings.json";


// For future maps
{/* {SettingsData.settings.map((setting) => (
  <div key={setting.id}>
            <div className="setting__container bg-white border-[1px] p-2 pl-4 flex items-center justify-between mb-2">
              <div className="settings_tab__container flex items-center">
                <span className="pr-6 text-[1.8rem] settings__icon">
                  <FontAwesomeIcon icon={faBell} />
                </span>
                <h1 className="text-2xl">{setting.settingName}</h1>
              </div>
              <span className="text-[1.3rem] pr-6 settings__icon">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
          </div>
  ))} */}
const SettingsPage = () => {

  return (
    <div className="settings__Wrapper flex w-full h-full justify-center">
      <div className="Main__Background w-full h-full absolute top-10">
        <h1 className="text-[2.2rem] font-semibold text-center">Settings</h1>
        <hr className="hr__look mt-6 mb-14 mr-8 ml-8"></hr>
           
            <div className="setting__container bg-white border-[1px] p-2 pl-4 flex items-center justify-between ">
              <div className="settings_tab__container flex items-center">
                <span className="pr-6 text-[1.8rem] settings__icon">
                  <FontAwesomeIcon icon={faGears} />
                </span>
                <h1 className="text-2xl">General</h1>
              </div>
              <span className="text-[1.3rem] pr-6 settings__icon">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
            
            <div className="setting__container bg-white border-[1px] p-2 pl-4 flex items-center justify-between ">
              <div className="settings_tab__container flex items-center">
                <span className="pr-6 text-[1.8rem] settings__icon">
                  <FontAwesomeIcon icon={faPalette} />
                </span>
                <h1 className="text-2xl">Apperance</h1>
              </div>
              <span className="text-[1.3rem] pr-6 settings__icon">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>

            <hr className="settings__Spacer mt-6 mb-6 mr-8 ml-8 border-0"></hr>
            
            <div className="setting__container bg-white border-[1px] p-2 pl-4 flex items-center justify-between ">
              <div className="settings_tab__container flex items-center">
                <span className="pr-6 text-[1.8rem] settings__icon">
                  <FontAwesomeIcon icon={faUserShield} />
                </span>
                <h1 className="text-2xl">Security and login</h1>
              </div>
              <span className="text-[1.3rem] pr-6 settings__icon">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
           
            <div className="setting__container bg-white border-[1px] p-2 pl-4 flex items-center justify-between ">
              <div className="settings_tab__container flex items-center">
                <span className="pr-6 text-[1.8rem] settings__icon">
                  <FontAwesomeIcon icon={faUserSecret} />
                </span>
                <h1 className="text-2xl">Privacy</h1>
              </div>
              <span className="text-[1.3rem] pr-6 settings__icon">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>

            <div className="setting__container bg-white border-[1px] p-2 pl-4 flex items-center justify-between ">
              <div className="settings_tab__container flex items-center">
                <span className="pr-6 text-[1.8rem] settings__icon">
                  <FontAwesomeIcon icon={faBan} />
                </span>
                <h1 className="text-2xl">Blocking</h1>
              </div>
              <span className="text-[1.3rem] pr-6 settings__icon">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
            
            <hr className="settings__Spacer mt-6 mb-6 mr-8 ml-8 border-0"></hr>

            <div className="setting__container bg-white border-[1px] p-2 pl-4 flex items-center justify-between ">
              <div className="settings_tab__container flex items-center">
                <span className="pr-6 text-[1.8rem] settings__icon">
                  <FontAwesomeIcon icon={faBell} />
                </span>
                <h1 className="text-2xl">Notifications</h1>
              </div>
              <span className="text-[1.3rem] pr-6 settings__icon">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
            
            <hr className="settings__Spacer mt-6 mb-6 mr-8 ml-8 border-0"></hr>

            <div className="setting__container bg-white border-[1px] p-2 pl-4 flex items-center justify-between ">
              <div className="settings_tab__container flex items-center">
                <span className="pr-6 text-[1.8rem] settings__icon">
                  <FontAwesomeIcon icon={faCookie} />
                </span>
                <h1 className="text-2xl">Cookies</h1>
              </div>
              <span className="text-[1.3rem] pr-6 settings__icon">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
      </div>
    </div>
  );
};

export default SettingsPage;
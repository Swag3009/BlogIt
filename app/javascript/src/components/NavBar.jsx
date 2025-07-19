import React, { useState } from "react";

import { Alert, Avatar } from "@bigbinary/neetoui";
import { resetAuthTokens } from "apis/axios";
import classnames from "classnames";
import { useSignOutUser } from "hooks/reactQuery/useAuthApi";
import { useTranslation } from "react-i18next";
import { NavLink, useHistory } from "react-router-dom";
import useAuthStore from "store/useAuthStore";

import routes from "../route";

const NavBar = ({ onToggleSidebar, isFocused }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const { mutate: signout } = useSignOutUser();
  const { clearAuthData } = useAuthStore.getState();
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);

  const handleSignOut = () => {
    signout(undefined, {
      onSuccess: () => {
        clearAuthData();
        resetAuthTokens();
        history.replace(routes.signin);
      },
    });
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-10 flex h-screen w-16 flex-col items-center justify-between border-r bg-white shadow-sm">
        <div className="mt-4 flex flex-col items-center space-y-4">
          <NavLink
            exact
            activeClassName="bg-blue-100 rounded-md p-1"
            to={routes.blogs}
          >
            <i className="ri-book-line text-2xl" />
          </NavLink>
          {/*<NavLink exact activeClassName="bg-blue-100 rounded-md p-1" to="/">
        <i className="ri-layout-row-line text-2xl" />
      </NavLink>*/}
          <NavLink
            exact
            activeClassName="bg-blue-100 rounded-md p-1"
            to={routes.createBlog}
          >
            <i className={classnames("ri-edit-line text-2xl")} />
          </NavLink>
          <i
            className={classnames("ri-menu-fold-line cursor-pointer text-2xl", {
              "rounded-md bg-blue-100 p-1": isFocused,
            })}
            onClick={onToggleSidebar}
          />
          <i
            className="ri-logout-box-line text-2xl"
            onClick={() => setShowLogoutAlert(true)}
          />
        </div>
        <div className="mb-4">
          <Avatar
            user={{
              name: "Dummy",
            }}
          />
        </div>
      </div>
      <Alert
        isOpen={showLogoutAlert}
        message={t("message.signOut")}
        submitButtonLabel={t("buttons.signOut")}
        title={t("title.alertToSignOut")}
        onClose={() => setShowLogoutAlert(false)}
        onSubmit={handleSignOut}
      />
    </>
  );
};

export default NavBar;

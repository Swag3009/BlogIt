import React, { useState } from "react";

import { Avatar, Alert } from "@bigbinary/neetoui";
import { Popover } from "antd";
import { resetAuthTokens } from "apis/axios";
import { useSignOutUser } from "hooks/reactQuery/useAuthApi";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import useAuthStore from "store/useAuthStore";

import ProfileContent from "./Content";

import routes from "../../route";

const Profile = () => {
  const history = useHistory();
  const {
    authEmail: email,
    userName: name,
    clearAuthData,
  } = useAuthStore.getState();
  const { mutate: signout } = useSignOutUser();
  const [showSignoutAlert, setShowSignoutAlert] = useState(false);
  const { t } = useTranslation();

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
    <Popover
      getPopupContainer={() => document.body}
      overlayStyle={{ zIndex: 1050 }}
      placement="topRight"
      trigger="hover"
      content={
        <ProfileContent
          email={email}
          name={name}
          t={t}
          onSignOut={() => setShowSignoutAlert(true)}
        />
      }
    >
      <Avatar className="mb-4 cursor-pointer" size="large" user={{ name }} />
      <Alert
        isOpen={showSignoutAlert}
        message={t("message.signOut")}
        submitButtonLabel={t("buttons.signOut")}
        title={t("title.alertToSignOut")}
        onClose={() => setShowSignoutAlert(false)}
        onSubmit={handleSignOut}
      />
    </Popover>
  );
};

export default Profile;

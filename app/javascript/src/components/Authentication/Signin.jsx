import React from "react";

import { Button, Typography } from "@bigbinary/neetoui";
import { Form, Input } from "@bigbinary/neetoui/formik";
import Logger from "js-logger";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { SIGN_IN_INITIAL_VALUES, SIGN_IN_VALIDATION_SCHEMA } from "./constants";

import routes from "../../route";

const Signin = () => {
  const { t } = useTranslation();
  const handleSubmit = ({ email, password }) => {
    const payload = { email, password };
    Logger.info(payload);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md space-y-6 p-8">
        <div className="text-center">
          <Typography style="h1">{t("title.signIn")}</Typography>
          <Link to={routes.signup}>
            <Typography
              className="cursor-pointer text-blue-700"
              style="body2"
              weight="semibold"
            >
              {t("title.orRegisterNow")}
            </Typography>
          </Link>
        </div>
        <Form
          className="space-y-6"
          formikProps={{
            initialValues: SIGN_IN_INITIAL_VALUES,
            validationSchema: SIGN_IN_VALIDATION_SCHEMA,
            onSubmit: handleSubmit,
          }}
        >
          <Input
            required
            label={t("labels.email")}
            name="email"
            placeholder={t("placeHolder.enterEmail")}
            type="email"
          />
          <Input
            required
            label={t("labels.password")}
            name="password"
            placeholder={t("placeHolder.enterPassword")}
            type="password"
          />
          <Button
            className="flex w-full justify-center rounded-md bg-blue-700 py-3 text-white hover:bg-blue-600"
            style="primary"
            type="submit"
          >
            {t ? t("buttons.loading") : t("buttons.register")}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signin;

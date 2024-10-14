"use client";
import { FC, useCallback, useState } from "react";
import Form, { Field, useForm } from "rc-field-form";
import { useTranslations } from "next-intl";
import { FieldData } from "rc-field-form/es/interface";
import FieldWrap from "../FieldWrap";
import classNames from "classnames";

import styles from "./ContactForm.module.css";

type FormValues = {
  email: string;
  message: string;
};

function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: any[]) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

const Input = ({ value = "", ...props }) => {
  return <input className={styles.input} value={value} {...props} />;
};
const TextArea = ({ value = "", ...props }) => {
  return (
    <textarea
      className={classNames(styles.input, styles.textarea)}
      value={value}
      {...props}
    />
  );
};

const ContactForm: FC = () => {
  const t = useTranslations("contacts");
  const [form] = useForm<FormValues>();
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { resetFields } = form;
  const changeFields = useCallback(
    (changedFields: FieldData<FormValues>[]) => {
      changedFields.forEach((field) => {
        if (field.name[0] === "email") {
          setEmailError(field?.errors?.[0] || "");
        }
        if (field.name[0] === "message") {
          setMessageError(field?.errors?.[0] || "");
        }
      });
    },
    [setEmailError]
  );
  const handleFieldsChange = useCallback(debounce(changeFields, 300), [
    changeFields,
  ]);

  const handleFinish = useCallback(
    async (values: FormValues) => {
      try {
        setLoading(true);
        console.log(values);
        resetFields();
      } finally {
        setLoading(false);
      }
    },
    [setLoading, resetFields]
  );

  return (
    <Form
      onFinish={handleFinish}
      form={form}
      className={styles.form}
      onFieldsChange={handleFieldsChange}
    >
      <h3 className={styles.title}>{t("form.title")}</h3>
      <p className={styles.text}>{t("form.description")}</p>
      <FieldWrap errorMessage={emailError}>
        <Field
          name="email"
          rules={[
            {
              required: true,
              message: t("form.email_required"),
            },
            {
              type: "email",
              message: t("form.email_invalid"),
            },
          ]}
        >
          <Input name="email" disabled={loading} placeholder="E-mail:" />
        </Field>
      </FieldWrap>
      <FieldWrap errorMessage={messageError}>
        <Field
          name="message"
          rules={[
            {
              required: true,
              message: t("form.message_required"),
            },
          ]}
        >
          <TextArea
            name="massage"
            placeholder={t("form.message_placeholder")}
          />
        </Field>
      </FieldWrap>
      <div className={styles.info}>
        <div className={styles.info_icon}>!</div>
        <div>{t("form.info")}</div>
      </div>
      <button className={styles.btn} type="submit">
        {t("form.send")}
      </button>
    </Form>
  );
};

export default ContactForm;

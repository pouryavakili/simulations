"use client";
// componetn
import BaseButton from "@/components/common/BaseButton";
import Icon from "@/components/common/Icon";

//hooks
import { useApolloStore } from "@/store/Apollo/useApolloStore";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

//mui
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  styled,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

//import
import * as Yup from "yup";
import { validation } from "@/utils/validation";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: theme.spacing(2.5),
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(4, 6, 6, 6),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(3, 6, 6, 6),
  },
  "& .MuiDialogTitle-root": {
    padding: theme.spacing(4, 6),
    fontSize: theme.spacing(4),
  },
}));

const ApolloDialog = ({ open, handleClose }) => {
  // state
  const [changeState, setChangeState] = useState(false);

  // hooks
  const theme = useTheme();
  const {validationApolloDialog} = validation()
  const { valueDialog  , apolloListItemsAdd  , apolloListItems } = useApolloStore();

  // formik
  const formik = useFormik({
    initialValues: {
      title: "",
      number_customer: 1,
      email_body: "",
    },
    validationSchema: validationApolloDialog,

    onSubmit: (values) => {
      apolloListItemsAdd(values)
    formik.setValues({
      title: "",
      number_customer: 1,
      email_body: "",
    });
    handleClose()
    },
    enableReinitialize: true,
  });

  // useEffect
  useEffect(() => {
    formik.setValues(valueDialog);
    if (valueDialog && typeof valueDialog === "object" && changeState) {
      // Ensure formValues is properly shaped before setting values
      setChangeState(true);
      // Mark fields as touched based on formValues
      const touchedFields = Object.keys(formik.initialValues).reduce(
        (acc, field) => {
          if (valueDialog.hasOwnProperty(field)) {
            acc[field] = true; // Mark only fields that exist in formValues
          }
          return acc;
        },
        {}
      );

      formik.setTouched(touchedFields);
    }
  }, [valueDialog]);
  return (
    <BootstrapDialog
  aria-labelledby="customized-dialog-title"
  open={open}
  onClose={handleClose}
>
  <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
    New Sequence
  </DialogTitle>
  <IconButton
    aria-label="close"
    onClick={handleClose}
    sx={(theme) => ({
      position: "absolute",
      right: 8,
      top: 8,
      color: theme.palette.grey[500],
    })}
  >
    <Icon isCustomVariant name={"material-symbols-light:close"} />
  </IconButton>
  <DialogContent>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(); // Use formik's handleSubmit directly
      }}
    >
      {/* Title Field */}
      <TextField
        sx={{ width: "100%", mb: theme.spacing(3) }}
        id="title-field"
        label="Title"
        variant="outlined"
        name="title"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />

      {/* Number of Customers Field */}
      <TextField
        sx={{ width: "100%", mb: theme.spacing(3) }}
        type="number"
        id="number-customer-field"
        label="Number of Customers"
        variant="outlined"
        name="number_customer"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.number_customer}
        error={
          formik.touched.number_customer &&
          Boolean(formik.errors.number_customer)
        }
        helperText={
          formik.touched.number_customer && formik.errors.number_customer
        }
      />

      {/* Email Body Field */}
      <TextField
        sx={{ width: "100%", mb: theme.spacing(3) }}
        id="email-body-field"
        label="Email Body"
        multiline
        maxRows={4}
        minRows={4}
        variant="outlined"
        name="email_body"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email_body}
        error={formik.touched.email_body && Boolean(formik.errors.email_body)}
        helperText={formik.touched.email_body && formik.errors.email_body}
      />

      {/* Submit Button */}
      <BaseButton
        type="submit"
        sx={{ marginLeft: "auto", display: "block", fontWeight: "400" }}
      >
        Create
      </BaseButton>
    </form>
  </DialogContent>
</BootstrapDialog>

  );
};
export default ApolloDialog;

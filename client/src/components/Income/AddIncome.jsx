import React from "react";
import "../../App.css";
import "../../index.css";
import { ACCOUNTS } from "../../Constants.js";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  FormHelperText,
  InputAdornment,
} from "@material-ui/core/";
import httpClient from "../../services/httpClient";

export default function AddIncome() {
  const style = makeStyles({
    form: {
      display: "flex",
      flexDirection: "column",
    },
    textField: {
      marginBottom: "32px",
      width: "100%",
    },
    formControl: {
      marginBottom: "32px",
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
    },
    icon: {
      width: "32px",
      marginRight: "8px",
    },
    radio: {
      display: "flex",
      alignItems: "center",
    },
    radioGroup: {
      display: "flex",
      alignItems: "center",
    },
    label: {
      fontSize: "12px",
    },
    buttonSubmit: {
      width: "100%",
    },
  })();

  const schema = yup.object().shape({
    amount: yup.string().required("Required field"),
    name: yup
      .string()
      .max(26, "Name should be 26 characters or less")
      .required("Required field"),
  });

  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const [accountTypeName, setAccountTypeName] = React.useState("Card");

  const handleChange = (event) => {
    setAccountTypeName(event.target.value);
  };

  function onSubmit(data) {
    var newIncome = {
      name: data.name,
      date: new Date().toISOString().split("T")[0],
      value: data.amount,
      accountId: ACCOUNTS.find((x) => x.name === accountTypeName).value,
    };

    httpClient.AddIncome(newIncome);
    window.location.reload();
  }

  return (
    <div className="widget">
      <h2>Add income</h2>

      {/* Add spending form*/}
      <div className={style.form}>
        <form className={style.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          {/* Name Input */}
          <TextField
            className={style.textField}
            inputRef={register}
            required
            name="name"
            label="Name"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            error={!!errors.name}
            helperText={errors?.name?.message}
          />

          {/* Amount Input */}
          <TextField
            className={style.textField}
            inputRef={register}
            required
            name="amount"
            label="Amount"
            InputLabelProps={{
              shrink: true,
            }}
            type="number"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            error={!!errors.amount}
            helperText={errors?.amount?.message}
          />

          {/* Type of account - Input */}
          <FormControl component="fieldset" className={style.formControl} required>
            <FormLabel component="legend" className={style.label}>
              Account
            </FormLabel>
            <RadioGroup
              name="accountType"
              value={accountTypeName}
              onChange={handleChange}
            >
              {ACCOUNTS.map((account) => (
                <FormControlLabel
                  value={account.name}
                  key={account.name}
                  control={<Radio color="primary" />}
                  label={
                    <div className={style.radio}>
                      <img className={style.icon} src={account.icon} alt="" />
                      <p>{account.name}</p>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
            <FormHelperText error className={style.formHelperTextCheckbox}>
              {errors.accountType ? errors.accountType.message : " "}
            </FormHelperText>
          </FormControl>

          {/* Button Submit */}
          <Button
            className={style.buttonSubmit}
            color="primary"
            type="submit"
            variant="contained"
          >
            Add
          </Button>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import "../../App.css";
import "../../index.css";
import { ACCOUNTS, CATEGORIES } from "../../Constants.js";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@material-ui/core/";

export default function AddSpending() {
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

  const [values, setValues] = React.useState({
    category: "",
  });

  const [category, setCategory] = React.useState("Select");
  const schema = yup.object().shape({
    value: yup.string().required("Required field"),
    name: yup
      .string()
      .max(26, "Name should be 26 characters or less")
      .required("Required field"),
  });

  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleChangeSelect = (event) => {
    setCategory(event.target.value);
  };
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="widget">
      <h2>Add spending</h2>

      {/* Add spending form*/}
      <div className={style.form}>
        <form className={style.form} noValidate>
          {/* Value Input */}
          <TextField
            className={style.textField}
            inputRef={register}
            required
            name="value"
            label="Value"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            error={!!errors.value}
            helperText={errors?.value?.message}
          />

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

          {/* Type of account - Input */}

          <FormControl component="fieldset" className={style.formControl} required>
            <FormLabel component="legend" className={style.label}>
              Account
            </FormLabel>
            <RadioGroup name="account-type" value={value} onChange={handleChange}>
              {ACCOUNTS.map((account) => (
                <FormControlLabel
                  value={account.value}
                  key={account.value}
                  control={<Radio />}
                  label={
                    <div className={style.radio}>
                      <img className={style.icon} src={account.icon} alt="" />
                      <p>{account.value}</p>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>

          {/* Category Input - Select */}
          <TextField
            select
            className={style.textField}
            inputRef={register}
            required
            name="category"
            label="Category"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Select"
            variant="outlined"
            onChange={handleChangeSelect}
            // error={!!errors.category}
            // helperText={errors?.category?.message}
            value={category}
          >
            {CATEGORIES.map((category) => (
              <MenuItem
                className={style.MenuItem}
                value={category.value}
                key={category.value}
              >
                <div className={style.menuItem}>
                  <img className={style.icon} src={category.icon} alt="" />
                  <p>{category.value}</p>
                </div>
              </MenuItem>
            ))}
          </TextField>

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

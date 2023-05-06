import { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

document.body.style.backgroundColor = "#636465";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profesion, setProfesion] = useState("");
  const [gender, setGender] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", name);
    console.log("Password:", password);
    console.log("profesion:", profesion);
    console.log("genero:", gender);
    console.log("condiciones:", agree);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        sx={{
          display: "flex",
          margin: "auto",
          width: "500px",
          height: "600px",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          mt: "5%",
          backgroundColor: "white",
        }}
      >
        <TextField
          sx={{ width: "400px" }}
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          sx={{
            width: "400px",
          }}
          label="Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <FormControl
          sx={{
            width: "400px",
          }}
        >
          <InputLabel>Seleccionar:</InputLabel>
          <Select
            value={profesion}
            onChange={(e) => setProfesion(e.target.value)}
            required
          >
            <MenuItem value="Diseñador UX/UI">Diseñador UX/UI</MenuItem>
            <MenuItem value="QA">QA</MenuItem>
            <MenuItem value="otro">Otro</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Genero</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              color="primary"
            />
          }
          label="Acepto los términos y condiciones"
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </FormControl>
    </form>
  );
};

export default Form;

import React, { useState } from "react";
// Material
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
// axios
import axios from "axios";

const Lab5 = () => {
  const [username, setUsername] = useState("dihocbai@gmail.com");
  const [password, setPassword] = useState("123123");
  const [data, setData] = useState(undefined);

  const Login = async (user) => {
    const loginData = await axios.post("http://localhost:3000/signin", user);

    setData(loginData.data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {!data ? (
        <div>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Tên đăng nhập"
              name="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                Login({ email: username, password });
              }}
            >
              Đăng nhập
            </Button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Họ và tên: {data.name}</h2>
          <h2>Điểm tổng: {data.score}</h2>
        </div>
      )}
      <Box mt={8}></Box>
    </Container>
  );
};

export default Lab5;

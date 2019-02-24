import * as React from "react";
import { Component } from "react";
import "./style.css";
import { Link } from "@reach/router";
import Button from "@material-ui/core/Button";

type Props = {
  path: string;
  signUp: (event: React.FormEvent) => void;
  email: string;
  password: string;
  username: string;
  changeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeUsername: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
class SignUp extends Component<Props> {
  public render() {
    return (
      <div className="signupcontainer">
        <div className="title">Sign up</div>
        <Link to="/sign-in">have an account ?</Link>
        <form onSubmit={this.props.signUp}>
          <input
            type="text"
            className="input"
            placeholder="user name"
            value={this.props.username}
            onChange={this.props.changeUsername}
          />
          <input
            type="email"
            className="input"
            placeholder="email"
            value={this.props.email}
            onChange={this.props.changeEmail}
          />
          <input
            type="password"
            className="input"
            placeholder="password"
            value={this.props.password}
            onChange={this.props.changePassword}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
          >
            sign UP
          </Button>
        </form>
      </div>
    );
  }
}

export default SignUp;

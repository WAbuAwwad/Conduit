import * as React from "react";
import { Component } from "react";
import "./style.css";
import { Link } from "@reach/router";
import Button from "@material-ui/core/Button";

type Props = {
  path: string;
  signIn: (event: React.FormEvent) => void;
  email: string;
  password: string;
  changeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
class SignIn extends Component<Props> {
  public render() {
    return (
      <div className="signcontainer">
        <div className="title">Sign in</div>
        <Link to="/sign-up">need an account ?</Link>
        <form onSubmit={this.props.signIn}>
          <input
            type="email"
            className="input"
            placeholder="email"
            value={this.props.email}
            onChange={this.props.changeEmail}
            title="Please enter a number less than 10000."
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
            sign in
          </Button>
        </form>
      </div>
    );
  }
}

export default SignIn;

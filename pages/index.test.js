import {
  render,
  screen
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Index from "./index";
import {
  checkLogin
} from './function'

const setup = () => {
  render( < Index / > );
};

describe("Testing Page Index", () => {

  // หน้านี้จะแสดงอะไรบ้าง?
  it("should render `Title Input(Username Password) and Button`", () => {
    setup();
    screen.getByText(/Testing Account Sign In/i);
    screen.getByLabelText(/Username/i);
    screen.getByLabelText(/Password/i);
    screen.getByRole("button", {
      name: /Sign In/i
    });
  });

  it("should call checkLogin when click submit", () => {
    setup();
    // username
    const username = screen.getByLabelText(/Username/i);
    userEvent.type(username, "admin");
    //password
    const password = screen.getByLabelText(/Password/i);
    userEvent.type(password, "123456");
  });

  it("should return true when username:admin password:123456", async () => {
    expect(checkLogin("admin", "123456")).toMatchObject({
      messages: 'success',
      token: "token_123456"
    });
  });
});
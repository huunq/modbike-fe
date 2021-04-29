import { apiCheckAuth } from "../api/login";
import { navigate } from "@reach/router";
import Cookie from "js-cookie";

export default async function CheckAuth() {
  try {
    await apiCheckAuth();
  } catch (error) {
    if (error.response.status === 401) {
      //   Cookie.remove("job-board-token");
      //   Cookie.remove("user_id");
      //   Cookie.remove("role_id");
      //   Cookie.remove("name");
      //   Cookie.remove("company_id");
      navigate("/");
    }
  }
}

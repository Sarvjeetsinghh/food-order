import { createContext } from "react";

const UserContext = createContext({
	user: { name: "sarvjeet singh", email: "sarvjeet.osc@example.com" },
});
export default UserContext;
UserContext.displayName = "UserContext";
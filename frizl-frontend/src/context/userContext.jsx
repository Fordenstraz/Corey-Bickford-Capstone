// Import
import React, { createContext, useState, useContext } from "react";

// Create context for user data:
const UserContext = createContext();

// Create a provider Component
export const UserProvider = ({ children }) => {
	// Set user state to null initially:
	const [user, setUser] = useState(null);

	// Function to update user data:
	const updateUser = userData => {
		setUser(userData);
	};

	return (
		<UserContext.Provider value={{ user, updateUser }}>
			{children}
		</UserContext.Provider>
	);
};

// Hook to use the User Context:
export const useUser = () => {
	return useContext(UserContext);
};

// AddUserModal.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuthContext from "../../hooks/useAuthContext";
import ErroAlert from "../../components/ErroAlert";


const AddUserModal = ({ onClose, onUserAdded }) => {
  const { registerUser, errorMsg } = useAuthContext();
  const [successMsg, setSuccessMsg] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const styles = {
    modalContent: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "0.5rem",
      width: "90%",
      maxWidth: "500px",
      maxHeight: "90vh",
      overflowY: "auto",
      position: "relative",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    closeButton: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      backgroundColor: "transparent",
      border: "none",
      fontSize: "1.5rem",
      cursor: "pointer",
      color: "#4b5563",
    },
    formControl: {
      marginBottom: "1rem",
    },
    label: {
      display: "block",
      marginBottom: "0.5rem",
      fontSize: "0.875rem",
      fontWeight: "500",
      color: "#374151",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      border: "1px solid #d1d5db",
      borderRadius: "0.375rem",
      fontSize: "1rem",
    },
    inputError: {
      borderColor: "#ef4444",
    },
    errorMessage: {
      color: "#ef4444",
      fontSize: "0.75rem",
      marginTop: "0.25rem",
    },
    submitButton: {
      width: "100%",
      padding: "0.75rem",
      backgroundColor: "#29a3e3",
      color: "white",
      borderRadius: "0.375rem",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "500",
      transition: "background-color 0.2s",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "0.5rem",
    },
    submitButtonDisabled: {
      backgroundColor: "#93c5fd",
      cursor: "not-allowed",
    },
    successAlert: {
      backgroundColor: "#d1fae5",
      color: "#065f46",
      padding: "0.75rem 1rem",
      borderRadius: "0.375rem",
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    spinner: { // Spinner style for the button
      width: "1rem",
      height: "1rem",
      border: "2px solid rgba(255, 255, 255, 0.5)",
      borderLeftColor: "white",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    "@keyframes spin": { // Ensure keyframes are defined
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  };

  const onSubmit = async (data) => {
    delete data.confirm_password;
    setFormLoading(true);
    try {
      const response = await registerUser(data);
      if (response.success) {
        setSuccessMsg(response.message);
        // setRegisteredEmail(data.email); // This state isn't used, can be removed
        reset(); // Clear the form
        onUserAdded(); // Trigger re-fetch of users in parent
      }
    } catch (error) {
      console.log("Registration failed", error);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div style={styles.modalContent}>
      <button style={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      {errorMsg && <ErroAlert error={errorMsg} />}

      {successMsg && (
        <div style={styles.successAlert}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            style={{ height: "1.5rem", width: "1.5rem" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{successMsg}</span>
        </div>
      )}

      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Add New User</h2>
      <p style={{ color: "#6b7280", marginBottom: "1rem" }}>Create a new user account</p>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {[
          {
            id: "first_name",
            label: "First Name",
            placeholder: "John",
            type: "text",
            validation: { required: "First Name is required" },
          },
          {
            id: "last_name",
            label: "Last Name",
            placeholder: "Doe",
            type: "text",
            validation: { required: "Last Name is required" },
          },
          {
            id: "email",
            label: "Email",
            placeholder: "name@example.com",
            type: "email",
            validation: { required: "Email is required" },
          },
          {
            id: "address",
            label: "Address",
            placeholder: "7/A Dhanmondi, Dhaka",
            type: "text",
          },
          {
            id: "phone_number",
            label: "Phone Number",
            placeholder: "0123456789",
            type: "text",
          },
          {
            id: "password",
            label: "Password",
            placeholder: "••••••••",
            type: "password",
            validation: {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            },
          },
          {
            id: "confirm_password",
            label: "Confirm Password",
            placeholder: "••••••••",
            type: "password",
            validation: {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            },
          },
        ].map(({ id, label, placeholder, type, validation }) => (
          <div style={styles.formControl} key={id}>
            <label style={styles.label} htmlFor={id}>
              {label}
            </label>
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              style={{ ...styles.input, ...(errors[id] ? styles.inputError : {}) }}
              disabled={formLoading}
              {...register(id, validation)}
            />
            {errors[id] && (
              <span style={styles.errorMessage}>
                {errors[id].message}
              </span>
            )}
          </div>
        ))}

        <div style={styles.formControl}>
          <label style={styles.label} htmlFor="role">
            Role
          </label>
          <select
            id="role"
            style={{ ...styles.input, ...(errors.role ? styles.inputError : {}) }}
            disabled={formLoading}
            {...register("role", { required: "Role is required" })}
          >
            <option value="">Select Role</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
            <option value="publisher">Publisher</option>
            <option value="reviewer">Reviewer</option>
            <option value="moderator">Moderator</option>
          </select>
          {errors.role && (
            <span style={styles.errorMessage}>
              {errors.role.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          style={{ ...styles.submitButton, ...(formLoading ? styles.submitButtonDisabled : {}) }}
          disabled={formLoading}
        >
          {formLoading && <span style={styles.spinner} />}
          {formLoading ? "Adding User..." : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default AddUserModal;
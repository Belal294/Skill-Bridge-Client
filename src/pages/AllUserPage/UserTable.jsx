// UserTable.jsx
import React from "react";

const UserTable = ({ users, deletingUserId, deletedUserId, onDelete }) => {
  // Styles specific to the table go here
  const styles = {
    tableContainer: {
        // No overflowX: "auto" here as it's now handled by the parent tableWrapper
        border: "1px solid #e5e7eb",
        borderRadius: "0.25rem",
        minWidth: "700px", // Optional: ensures table doesn't get too cramped on smaller screens
    },
    table: { width: "100%", borderCollapse: "collapse" },
    // Apply sticky styles to the table header row
    tableHeaderRow: {
        backgroundColor: "#f9fafb",
        borderBottom: "1px solid #e5e7eb",
        position: "sticky", // Make the entire header row sticky
        top: 0, // Stick to the top of its scrolling parent (.tableWrapper)
        zIndex: 1, // Ensure it's above table body content
    },
    tableHeaderCell: {
        padding: "0.75rem 1rem",
        textAlign: "left",
        fontWeight: "500",
        color: "#374151",
        // No position:sticky here, as we are making the whole row sticky
    },
    tableRow: { borderBottom: "1px solid #e5e7eb" },
    tableRowHover: { backgroundColor: "#f9fafb" },
    tableCell: { padding: "0.75rem 1rem" },
    userCell: { display: "flex", alignItems: "center", gap: "0.5rem" },
    avatar: { width: "2rem", height: "2rem", borderRadius: "9999px", overflow: "hidden" },
    userName: { color: "#2563eb", textDecoration: "none" },
    statusContainer: { display: "flex", alignItems: "center", gap: "0.25rem" },
    statusDot: { width: "0.5rem", height: "0.5rem", borderRadius: "9999px" },
    actionContainer: { display: "flex", gap: "0.5rem" },
    deleteButton: {
      color: "#ef4444",
      padding: "0.25rem",
      borderRadius: "0.25rem",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    deleteButtonHover: {
      backgroundColor: "#fee2e2",
    },
  };

  return (
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeaderRow}> {/* Apply sticky style here */}
            <th style={styles.tableHeaderCell}>ID</th>
            <th style={styles.tableHeaderCell}>Name</th>
            <th style={styles.tableHeaderCell}>Email</th>
            <th style={styles.tableHeaderCell}>Phone Number</th>
            <th style={styles.tableHeaderCell}>Address</th>
            <th style={styles.tableHeaderCell}>Role</th>
            <th style={styles.tableHeaderCell}>Status</th>
            <th style={styles.tableHeaderCell}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="8" style={{ ...styles.tableCell, textAlign: "center", padding: "1rem" }}>
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr
                key={user.id}
                style={styles.tableRow}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.tableRowHover.backgroundColor)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
              >
                <td style={styles.tableCell}>{user.id}</td>
                <td style={styles.tableCell}>
                  <div style={styles.userCell}>
                    <div style={styles.avatar}>
                      <img
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.first_name || "user"}`}
                        alt={user.first_name || "User"}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <span style={styles.userName}>
                      {user.first_name} {user.last_name}
                    </span>
                  </div>
                </td>
                <td style={styles.tableCell}>{user.email}</td>
                <td style={styles.tableCell}>{user.phone_number || "N/A"}</td>
                <td style={styles.tableCell}>{user.address || "N/A"}</td>
                <td style={styles.tableCell}>
                  <span style={user.roleStyle}>{user.role?.charAt(0).toUpperCase() + user.role?.slice(1)}</span>
                </td>
                <td style={styles.tableCell}>
                  <div style={styles.statusContainer}>
                    <div style={{ ...styles.statusDot, ...user.statusStyle }}></div>
                    <span>{user.status}</span>
                  </div>
                </td>
                <td style={styles.tableCell}>
                  <div style={styles.actionContainer}>
                    {deletingUserId === user.id ? (
                      <div style={{ color: "#ef4444", fontSize: "0.875rem" }}>Deleting...</div>
                    ) : deletedUserId === user.id ? (
                      <div style={{ color: "#ef4444", fontWeight: "600", fontSize: "0.875rem" }}>Deleted</div>
                    ) : (
                      <button
                        onClick={() => onDelete(user.id)}
                        style={styles.deleteButton}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.deleteButtonHover.backgroundColor)}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ height: "1.25rem", width: "1.25rem" }}
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
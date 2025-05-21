import React, { useEffect, useState } from "react";

import apiClient from "../../services/api-client";
import authApiClient from "../../services/auth-api-client";
import UserTable from "./UserTable";
import AddUserModal from "./AddUserModal";

const API_BASE_URL = apiClient

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [deletingUserId, setDeletingUserId] = useState(null);
  const [deletedUserId, setDeletedUserId] = useState(null);
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  const styles = {
    container: {
      width: "100%",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      height: "100vh", // Take full viewport height
      overflow: "hidden", // Prevent main page scroll
    },
    header: {
      backgroundColor: "#29a3e3",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1rem",
      position: "sticky", // Make header sticky
      top: 0, // Stick to the top
      zIndex: 100, // Ensure it's above other content
    },
    headerTitle: { color: "white", fontSize: "1.5rem", fontWeight: "500" },
    buttonContainer: { display: "flex", gap: "0.5rem" },
    button: {
      backgroundColor: "white",
      color: "#374151",
      padding: "0.5rem 0.75rem",
      borderRadius: "0.25rem",
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
      fontSize: "0.875rem",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      transition: "background-color 0.2s",
    },
    buttonHover: {
      backgroundColor: "#f3f4f6",
    },
    searchBar: {
      padding: "0.5rem 0.75rem",
      marginBottom: "1rem",
      border: "1px solid #e5e7eb",
      borderRadius: "0.25rem",
      width: "100%",
      maxWidth: "400px",
      fontSize: "0.875rem",
      position: "sticky", // Make search bar sticky
      top: "70px", // Adjust based on header height (approx. 1rem padding + 1.5rem font-size = 70px)
      zIndex: 90, // Ensure it's below the header but above the table content
      backgroundColor: "white", // To prevent content from showing through
    },
    tableWrapper: {
      flexGrow: 1, // Allow table wrapper to take available space
      overflowY: "auto", // Enable vertical scrolling for the table content
    },
    loadingSpinner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "160px",
    },
    spinner: {
      width: "40px",
      height: "40px",
      border: "4px solid rgba(0, 0, 0, 0.1)",
      borderLeftColor: "#29a3e3",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    paginationTextBold: { fontWeight: "600", color: "#1f2937" },
    userCountFooter: {
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "0.875rem",
      color: "#4b5563",
      position: "sticky", // Make user count sticky at the bottom
      bottom: 0,
      backgroundColor: "white", // To prevent content from showing through
      borderTop: "1px solid #e5e7eb", // Optional: Add a border for separation
      zIndex: 90,
    }
  };

  const fetchAllUsers = async () => {
    let allUsers = [];
    let nextPage = "/users/";

    try {
      while (nextPage) {
        const res = await authApiClient.get(nextPage);
        const data = res.data;
        allUsers = allUsers.concat(data.results || data);

        // Dynamically replace the base URL from the next link
        nextPage = data.next ? data.next.replace(API_BASE_URL, "") : null;
      }

      allUsers.sort((a, b) => a.id - b.id);

      const usersWithStyles = allUsers.map((user) => {
        let roleStyle;
        switch (user.role?.toLowerCase()) {
          case "admin":
            roleStyle = { color: "#374151", fontWeight: "500" };
            break;
          case "publisher":
            roleStyle = { color: "#ea580c", fontWeight: "500" };
            break;
          case "reviewer":
            roleStyle = { color: "#15803d", fontWeight: "500" };
            break;
          case "moderator":
            roleStyle = { color: "#7e22ce", fontWeight: "500" };
            break;
          default:
            roleStyle = {};
        }

        let statusText = "Inactive";
        let statusStyle = { backgroundColor: "#eab308" };

        if (user.is_active) {
          statusText = "Active";
          statusStyle = { backgroundColor: "#22c55e" };
        }

        return {
          ...user,
          roleStyle,
          status: statusText,
          statusStyle,
        };
      });

      setUsers(usersWithStyles);
      setFilteredUsers(usersWithStyles);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  // Search by email
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) =>
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery, users]);

  // Delete user
  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    setDeletingUserId(userId);
    setDeletedUserId(null);

    try {
      await authApiClient.delete(`/users/${userId}/`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      setFilteredUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId)); // Update filtered list too
      setDeletedUserId(userId);
    } catch (err) {
      console.error("Error deleting user:", err);
    } finally {
      setDeletingUserId(null);
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>User Management</h1>
        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => setShowAddUserModal(true)}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "white"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ height: "1rem", width: "1rem" }}
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Add New User
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by email..."
        style={styles.searchBar}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Table Wrapper with Scroll */}
      <div style={styles.tableWrapper}>
        {loading ? (
          <div style={styles.loadingSpinner}>
            <div style={styles.spinner}></div>
          </div>
        ) : (
          <UserTable
            users={filteredUsers}
            deletingUserId={deletingUserId}
            deletedUserId={deletedUserId}
            onDelete={handleDelete}
          />
        )}
      </div>

      {/* User Count */}
      <div style={styles.userCountFooter}>
        <div>
          Showing <span style={styles.paginationTextBold}>{filteredUsers.length}</span> users
        </div>
      </div>

      {/* Add New User Modal */}
      {showAddUserModal && (
        <div style={styles.modalOverlay}>
          <AddUserModal onClose={() => setShowAddUserModal(false)} onUserAdded={fetchAllUsers} />
        </div>
      )}
    </div>
  );
};

export default UserManagementPage;
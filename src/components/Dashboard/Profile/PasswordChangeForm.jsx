import { useState } from "react";

const PasswordChangeForm = ({ register, errors, watch, isEditing }) => {
  const [isPasswordSectionOpen, setIsPasswordSectionOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-4">
      <button
        type="button"
        className="btn btn-link p-0 justify-start text-primary font-semibold h-auto min-h-0"
        onClick={() => setIsPasswordSectionOpen((prev) => !prev)}
      >
        Change Password
      </button>

      {isPasswordSectionOpen && (
        <div className="mt-3 space-y-3 pl-2 border-l-2 border-base-300">
          {/* Current Password */}
          <div className="form-control">
            <label className="label" htmlFor="current_password">
              Current Password
            </label>
            <input
              id="current_password"
              type={showPassword ? "text" : "password"}
              className="input input-bordered bg-base-200 w-full pr-10"
              disabled={!isEditing}
              {...register("current_password", {
                required: isEditing ? "Current Password is Required" : false,
              })}
            />
            {errors.current_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.current_password.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="form-control">
            <label className="label" htmlFor="new_password">
              New Password
            </label>
            <input
              id="new_password"
              type={showPassword ? "text" : "password"}
              className="input input-bordered bg-base-200 w-full pr-10"
              disabled={!isEditing}
              {...register("new_password", {
                required: isEditing ? "New Password is Required" : false,
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors.new_password && (
              <p className="text-red-500 text-sm mt-1">{errors.new_password.message}</p>
            )}
          </div>

          {/* Confirm New Password */}
          <div className="form-control">
            <label className="label" htmlFor="confirm_new_password">
              Confirm New Password
            </label>
            <input
              id="confirm_new_password"
              type={showPassword ? "text" : "password"}
              className="input input-bordered bg-base-200 w-full pr-10"
              disabled={!isEditing}
              {...register("confirm_new_password", {
                validate: (value) =>
                  !isEditing ||
                  value === watch("new_password") ||
                  "Passwords do not match",
              })}
            />
            {errors.confirm_new_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirm_new_password.message}
              </p>
            )}
          </div>

          {/* Show Password Toggle */}
          {isEditing && (
            <div className="form-control">
              <label className="label cursor-pointer" htmlFor="show_password_toggle">
                <span className="label-text">Show Password</span>
                <input
                  id="show_password_toggle"
                  type="checkbox"
                  className="toggle"
                  checked={showPassword}
                  onChange={() => setShowPassword((prev) => !prev)}
                />
              </label>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PasswordChangeForm;

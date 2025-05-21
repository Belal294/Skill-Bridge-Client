const ProfileForm = ({ register, errors, isEditing }) => {
  return (
    <div className="space-y-4">
      <div className="form-control">
        <label className="label" htmlFor="first_name">First Name</label>
        <input
          id="first_name"
          type="text"
          className="input input-bordered bg-base-200 w-full"
          disabled={!isEditing}
          {...register("first_name", { required: "First name is required" })}
        />
        {errors.first_name && (
          <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>
        )}
      </div>

      <div className="form-control">
        <label className="label" htmlFor="last_name">Last Name</label>
        <input
          id="last_name"
          type="text"
          className="input input-bordered bg-base-200 w-full"
          disabled={!isEditing}
          {...register("last_name")}
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          className="input input-bordered bg-base-200 w-full"
          disabled
          {...register("email")}
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          className="input input-bordered bg-base-200 w-full"
          disabled={!isEditing}
          {...register("address")}
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="phone_number">Phone Number</label>
        <input
          id="phone_number"
          type="text"
          className="input input-bordered bg-base-200 w-full"
          disabled={!isEditing}
          {...register("phone_number")}
        />
      </div>
    </div>
  );
};

export default ProfileForm;

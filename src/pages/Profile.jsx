import { useForm } from "react-hook-form";
import ProfileForm from "../components/Dashboard/Profile/ProfileForm";
import { useEffect, useState } from "react";
import ProfileButtons from "../components/Dashboard/Profile/ProfileButtons";
import PasswordChangeForm from "../components/Dashboard/Profile/PasswordChangeForm";
import useAuthContext from "../hooks/useAuthContext";
import ErroAlert from "../components/ErroAlert";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, updateUserProfile, changePassword, errorMsg } = useAuthContext();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      address: "",
      phone_number: "",
      current_password: "",
      new_password: "",
    },
  });

  useEffect(() => {
    if (user) {
      // Set all user data to form fields
      Object.keys(user).forEach((key) => {
        if (user[key] !== undefined) {
          setValue(key, user[key]);
        }
      });
    }
  }, [user, setValue]);

  const onSubmit = async (data) => {
    try {
      // Prepare profile data payload
      const profilePayload = {
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        phone_number: data.phone_number,
      };

      // Update profile
      await updateUserProfile(profilePayload);

      // Change password if fields provided
      if (data.current_password && data.new_password) {
        await changePassword({
          current_password: data.current_password,
          new_password: data.new_password,
        });
      }

      setIsEditing(false); // Exit edit mode on success
    } catch (error) {
      console.error("Profile update error:", error);
    }
  };

  return (
    <div className="card w-full max-w-2xl mx-auto bg-base-100 shadow-xl">
      <div className="card-body">
        {errorMsg && <ErroAlert error={errorMsg} />}
        <h2 className="card-title text-2xl mb-4">Profile Information</h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <ProfileForm register={register} errors={errors} isEditing={isEditing} />

          <PasswordChangeForm
            errors={errors}
            register={register}
            isEditing={isEditing}
            watch={watch}
          />

          <ProfileButtons
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            isSubmitting={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;

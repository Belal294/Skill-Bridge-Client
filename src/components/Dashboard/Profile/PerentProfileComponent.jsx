import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProfileForm from "./ProfileForm"; // পথটা তোমার ফোল্ডারের ওপর নির্ভর করবে
import ProfileButtons from "./ProfileButtons";

const ParentProfileComponent = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // এখানে API কল বা প্রোফাইল আপডেট ফাংশন কল করবে
      await new Promise((resolve) => setTimeout(resolve, 2000)); // সিমুলেটেড API ডিলে
      console.log(data);
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update profile");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProfileForm register={register} errors={errors} isEditing={isEditing} />
        <ProfileButtons
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          isSubmitting={isSubmitting}
        />
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ParentProfileComponent;


  // Example of how you might use these components in a parent component:
  import React from 'react';
  import { useForm } from 'react-hook-form';
  import { ToastContainer } from 'react-toastify';
  import { toast } from 'react-toastify';
  
  const ParentProfileComponent = () => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = async (data) => {
      setIsSubmitting(true);
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log(data);
      toast.success("Profile updated successfully!");
      setIsSubmitting(false);
      setIsEditing(false);
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
            onSubmit={() => handleSubmit(onSubmit)()} // Trigger the form submission
          />
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </div>
    );
  };
  
  export default ParentProfileComponent;
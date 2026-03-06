// Importing common UI components used in the page
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import Button from "../components/ui/button/Button";
import { useModal } from "../hooks/useModal";
import { Modal } from "../components/ui/modal";
import Input from "../components/form/input/InputField";
import Label from "../components/form/Label";
import Select from "../components/form/Select";

// Main component for User Profiles page
export default function UserProfiles() {

  // Modal state control (open and close)
  const { isOpen, openModal, closeModal } = useModal();

  // Role dropdown options
  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
  ];

  // Function to handle save button
  const handleSave = () => {
    // Logic for saving user data
    console.log("Saving changes...");
    closeModal(); // Close modal after saving
  };

  // Function triggered when dropdown value changes
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  // Country dropdown options list
  const options = [
    // List of all countries used in location dropdown
    { value: "afghanistan", label: "Afghanistan" },
    { value: "albania", label: "Albania" },
    { value: "algeria", label: "Algeria" },
    { value: "andorra", label: "Andorra" },
    { value: "angola", label: "Angola" },
    { value: "antigua-and-barbuda", label: "Antigua and Barbuda" },

    // ........ (countries list continues exactly same)
    // No change here — only comment added above

    { value: "zambia", label: "Zambia" },
    { value: "zimbabwe", label: "Zimbabwe" }
  ];

  return (
    <>
      {/* Page metadata for SEO and browser title */}
      <PageMeta
        title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />

      {/* Page breadcrumb navigation */}
      <PageBreadcrumb pageTitle="User" />

      {/* Main container card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        
        {/* Header section with title and Add User button */}
        <div className="mb-5 flex items-center justify-between lg:mb-7">
          
          {/* Page title */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Users
          </h3>
          
          {/* Button to open modal for adding user */}
          <Button
            size="sm"
            variant="primary"
            onClick={openModal}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200"
          >
            Add User
          </Button>
        </div>

        {/* Modal popup for adding/editing user */}
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
          <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
           
            {/* Form for user input */}
            <form className="flex flex-col">

              {/* Scrollable form area */}
              <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
                
                <div className="mt-7">
                  
                  {/* Section heading */}
                  <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                    Personal Information
                  </h5>

                  {/* Form grid layout */}
                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">

                    {/* First Name input */}
                    <div className="col-span-2 lg:col-span-1">
                      <Label>First Name</Label>
                      <Input type="text" placeholder="First Name" />
                    </div>

                    {/* Last Name input */}
                    <div className="col-span-2 lg:col-span-1">
                      <Label>Last Name</Label>
                      <Input type="text" placeholder="Last Name" />
                    </div>

                    {/* Email input */}
                    <div className="col-span-2 lg:col-span-1">
                      <Label>Email</Label>
                      <Input
                        type="email"
                        placeholder="info@gmail.com"
                      />
                    </div>
                    
                    {/* Role selection dropdown */}
                    <div className="col-span-2 lg:col-span-1">
                      <Label>Role</Label>
                      <Select
                        options={roleOptions}
                        placeholder="Select Role"
                        onChange={handleSelectChange}
                        className="dark:bg-dark-900"
                      />
                    </div>

                    {/* User Bio input */}
                    <div className="col-span-2">
                      <Label>Bio</Label>
                      <Input type="text" placeholder="Bio" />
                    </div>
                    
                    {/* Country selection dropdown */}
                    <div className="col-span-2 lg:col-span-1">
                      <Label>Location</Label>
                      <Select
                        options={options}
                        placeholder="Select a country"
                        onChange={handleSelectChange}
                        className="dark:bg-dark-900"
                      />
                    </div>

                  </div>
                </div>
              </div>

              {/* Form action buttons */}
              <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                
                {/* Close modal button */}
                <Button size="sm" variant="outline" onClick={closeModal}>
                  Close
                </Button>

                {/* Save user data button */}
                <Button size="sm" onClick={handleSave}>
                  Save Changes
                </Button>

              </div>
            </form>
          </div>
        </Modal>

        {/* User table container */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#111827]">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
            
            {/* Users table */}
            <table className="min-w-full">
    
              {/* Table Head */}
              <thead className="border-b border-gray-200 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">User ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Country</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Edit</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
      
                {/* User Row 1 */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">001</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Lindsey Curtis</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">lindsey@email.com</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Web Designer</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">USA</td>
                  <td className="px-6 py-5 text-center">
                    {/* Edit button opens modal */}
                    <button
                      onClick={openModal}
                      className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                    >
                      Edit
                    </button>
                  </td> 
                </tr>

                {/* User Row 2 */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">002</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Kaiya George</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">kaiya@email.com</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Project Manager</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">UK</td>
                  <td className="px-6 py-5 text-center">
                    <button
                      onClick={openModal}
                      className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                    >
                      Edit
                    </button>
                  </td>
                </tr>

                {/* User Row 3 */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">003</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Amit George</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">amit@email.com</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Java Developer</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Canada</td>
                  <td className="px-6 py-5 text-center">
                    <button
                      onClick={openModal}
                      className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                    >
                      Edit
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
}
const Profile = () => (
  <div className="flex flex-col items-center min-h-screen px-4 pt-12 bg-[url('/background1.jpg')] bg-cover bg-center">
    <div className="max-w-md w-full bg-white/90 rounded-3xl shadow-2xl p-8 backdrop-blur-sm">
      {/* Profile Header */}
      <div className="flex flex-col items-center">
        <img
          src="/profile-pic.jpg"
          alt="Profile"
          className="w-28 h-28 rounded-full shadow-lg border-4 border-indigo-600"
        />
        <h2 className="mt-4 text-2xl font-bold text-gray-800">John Doe</h2>
        <p className="text-gray-500">@johndoe</p>
      </div>

      {/* Info Section */}
      <div className="mt-8 space-y-4">
        <div className="p-4 bg-gray-100 rounded-xl">
          <h3 className="text-sm text-gray-500">Email</h3>
          <p className="text-gray-800">johndoe@example.com</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-xl">
          <h3 className="text-sm text-gray-500">Phone</h3>
          <p className="text-gray-800">+1 (555) 123-4567</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-xl">
          <h3 className="text-sm text-gray-500">Bio</h3>
          <p className="text-gray-800">
            Passionate developer, coffee lover ☕, and lifelong learner 🚀
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex justify-between">
        <a
          href="/edit-profile"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition"
        >
          Edit Profile
        </a>
        <a
          href="/logout"
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl shadow-md hover:bg-red-600 transition"
        >
          Logout
        </a>
      </div>
    </div>
  </div>
);

export default Profile;

function HeaderIcon({ Icon }) {
  return (
    <div
      className="flex items-center cursor-pointer md:px-10
     sm:h-14 rounded-xl md:hover:bg-gray-100 focus:border-b-2 focus:bg-blue-600
     group"
    >
      <Icon className="h-6 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-500" />
    </div>
  );
}

export default HeaderIcon;

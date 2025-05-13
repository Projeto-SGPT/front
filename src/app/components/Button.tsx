type ButtonProps = {
  type?: "submit" | "button" | "reset";
  children: React.ReactNode;
};

export default function Button({ type = "button", children }: ButtonProps) {
  return (
    <button
      type={type}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
    >
      {children}
    </button>
  );
}
export default function ModalContainer({ children, className }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center p-4 z-50 ${className}`}
    >
      <div className="min-h-screen min-w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

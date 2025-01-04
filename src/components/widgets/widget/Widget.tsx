type WidgetProps = {
  children: React.ReactNode; // Cualquier contenido renderizable
  className?: string;       // Clase opcional para personalización
};

export const Widget: React.FC<WidgetProps> = ({ children, className }) => (
  <div className={`flex flex-col h-fit bg-white rounded ${className}`}>
    {children}
  </div>
);
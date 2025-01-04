type WidgetProps = {
  children: React.ReactNode; // Cualquier contenido renderizable
  className?: string;       // Clase opcional para personalización
};

export const WidgetContent: React.FC<WidgetProps> = ({ children, className }) => (
  <div className={`p-2 flex gap-2 flex-wrap ${className}`}>{children}</div>
);
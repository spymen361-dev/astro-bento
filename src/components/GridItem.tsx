interface GridItemProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const GridItem = ({ children, className = "", title }: GridItemProps) => (
  <div className={`bento-card overflow-hidden group ${className}`}>
    {title && (
      <div className="px-6 pt-6">
        <h3 className="font-semibold">{title}</h3>
      </div>
    )}
    {children}
  </div>
);

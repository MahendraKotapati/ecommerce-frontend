export const BigTitle = ({ children }: {children: any}) => (
    <h1 className="text-5xl font-bold text-gray-900">{children}</h1>
  );
  
  export const Title = ({ children, className = '' }: {children: any, className?: string}) => (
    <h2 className={`text-[24px] font-semibold ${className}`}>{children}</h2>
  );
  
  export const SecondaryText = ({ children, className = '' }: {children: any, className?: string}) => (
    <p className={`text-16 text-secondary ${className}`}>{children}</p>
  );
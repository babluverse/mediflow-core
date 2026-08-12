function Card({ children, className = '' }) {
  return (
    <div className={`bg-navy-light rounded-2xl p-5 shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export default Card;
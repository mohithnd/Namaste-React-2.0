const MenuShimmer = () => {
  return (
    <div className="restaurant-menu shimmer">
      <div className="restaurant-summary shimmer-animation">
        <div className="restaurant-img shimmer-animation"></div>
        <div className="restaurant-summary-details">
          <div className="shimmer-title shimmer-animation"></div>
          <div className="shimmer-cuisines shimmer-animation"></div>
          <div className="shimmer-details shimmer-animation"></div>
        </div>
      </div>
      <div className="restaurant-menu-content">
        <div className="menu-title shimmer-animation"></div>
        <div className="menu-items-list">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="menu-item shimmer-animation"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuShimmer;

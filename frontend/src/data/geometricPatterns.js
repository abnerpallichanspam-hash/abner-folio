// Geometric pattern generators for portfolio

export const geometricPatterns = {
  // Healthcare pattern - crosses/plus signs
  healthcare1: "data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b8936a' fill-opacity='0.4'%3E%3Cpath d='M0 0h20v20H0V0zm30 30h20v20H30V30z'/%3E%3Cpath d='M10 5h20v10H10V5zm10 25h10v20H20V30z'/%3E%3C/g%3E%3C/svg%3E",
  
  // Security pattern - diamonds/shields
  security1: "data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238b7355' fill-opacity='0.3'%3E%3Cpath d='M0 0h40L20 20 0 0zm40 40h40L60 60 40 40zM20 20h40L40 40 20 20z'/%3E%3C/g%3E%3C/svg%3E",
  
  // Aged care pattern - soft circles
  agedCare1: "data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b8936a' fill-opacity='0.2'%3E%3Ccircle cx='50' cy='50' r='30'/%3E%3Ccircle cx='0' cy='0' r='20'/%3E%3Ccircle cx='100' cy='100' r='20'/%3E%3C/g%3E%3C/svg%3E",
  
  // Stadium pattern - lines/grid
  stadium1: "data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23b8936a' stroke-width='2' fill='none' opacity='0.3'%3E%3Cline x1='0' y1='0' x2='100' y2='100'/%3E%3Cline x1='100' y1='0' x2='0' y2='100'/%3E%3Crect x='20' y='20' width='60' height='60'/%3E%3C/g%3E%3C/svg%3E",
  
  // Fire station pattern - triangles
  fireStation1: "data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238b7355' fill-opacity='0.35'%3E%3Cpath d='M0 0l40 40H0V0zm40 40l40 40H40V40z'/%3E%3Cpath d='M40 0l40 40V0H40zM0 40l40 40V40H0z'/%3E%3C/g%3E%3C/svg%3E",
  
  // Professional pattern - hexagons
  professional1: "data:image/svg+xml,%3Csvg width='100' height='87' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b8936a' fill-opacity='0.25'%3E%3Cpath d='M50 0l43.3 25v50L50 100 6.7 75V25L50 0z'/%3E%3C/g%3E%3C/svg%3E",
  
  // Technical pattern - squares grid
  technical1: "data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238b7355' fill-opacity='0.3'%3E%3Crect x='0' y='0' width='40' height='40'/%3E%3Crect x='60' y='60' width='40' height='40'/%3E%3Crect x='60' y='0' width='15' height='15'/%3E%3Crect x='0' y='60' width='15' height='15'/%3E%3C/g%3E%3C/svg%3E",
  
  // Modern pattern - waves
  modern1: "data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50Q25 25 50 50T100 50V100H0V50z' fill='%23b8936a' fill-opacity='0.2'/%3E%3Cpath d='M0 70Q25 60 50 70T100 70V100H0V70z' fill='%238b7355' fill-opacity='0.15'/%3E%3C/svg%3E",
  
  // Abstract pattern - overlapping shapes
  abstract1: "data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='25' fill='%23b8936a'/%3E%3Crect x='60' y='10' width='40' height='40' fill='%238b7355'/%3E%3Cpolygon points='20,80 40,100 0,100' fill='%23b8936a'/%3E%3C/g%3E%3C/svg%3E",
  
  // Minimalist pattern
  minimalist1: "data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b8936a' fill-opacity='0.25'%3E%3Crect x='0' y='0' width='30' height='30'/%3E%3Crect x='30' y='30' width='30' height='30'/%3E%3C/g%3E%3C/svg%3E"
};

// CSS gradient backgrounds as alternatives
export const gradientBackgrounds = {
  healthcare: 'linear-gradient(135deg, #fafafa 0%, #e8dcc8 100%)',
  security: 'linear-gradient(135deg, #f5f5f5 0%, #d4c4b0 100%)',
  agedCare: 'linear-gradient(135deg, #fafafa 0%, #f0e8db 100%)',
  stadium: 'linear-gradient(135deg, #e5e5e5 0%, #c4b5a0 100%)',
  professional: 'linear-gradient(135deg, #fafafa 0%, #ebe3d5 100%)',
  technical: 'linear-gradient(135deg, #f5f5f5 0%, #dcd0c0 100%)',
  modern: 'linear-gradient(135deg, #fafafa 0%, #e0d5c5 100%)'
};

// Generate a geometric background with pattern
export const createGeometricBg = (pattern, gradient) => ({
  background: gradient,
  backgroundImage: `url("${pattern}")`,
  backgroundSize: 'auto',
  backgroundRepeat: 'repeat'
});
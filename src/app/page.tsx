import CardNav from '../components/CardNav'
import { navItems, navConfig } from '../config/navConfig'

export default function Home() {
  return (
    <div className="background">
      <CardNav 
        logo="/advait-logo.png"
        logoAlt="ADVAIT Logo"
        items={navItems}
        baseColor={navConfig.baseColor}
        menuColor={navConfig.menuColor}
        buttonBgColor={navConfig.buttonBgColor}
        buttonTextColor={navConfig.buttonTextColor}
      />
        <div className="ADVAIT">
          <h1>ADVAIT</h1>
        </div>
      <div className="glow-gradient" />
  </div>
  );
}

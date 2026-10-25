import { NavLink, Outlet } from "react-router-dom";
import ArrowIcon from "../common/ArrowIcon";
import BrandMark from "../common/BrandMark";
import { demoRegistry } from "../../config/demoRegistry";

export default function StudioLayout() {
  return (
    <div className="studio-shell">
      <aside className="sidebar">
        <BrandMark />

        <div className="sidebar__section-label">WORKSPACE</div>
        <nav className="sidebar__nav" aria-label="Main navigation">
          <NavLink to="/" end className="sidebar__link">
            <span className="sidebar__nav-icon" aria-hidden="true">◫</span>
            <span>Demo library</span>
            <span className="sidebar__count">
              {demoRegistry.length.toString().padStart(2, "0")}
            </span>
          </NavLink>
          <NavLink to="/adding-a-demo" className="sidebar__link">
            <span className="sidebar__nav-icon sidebar__nav-icon--plus" aria-hidden="true">+</span>
            <span>Getting started</span>
            <ArrowIcon />
          </NavLink>
        </nav>

        <div className="sidebar__bottom">
          <div className="sidebar__tip">
            <span className="sidebar__tip-icon" aria-hidden="true">✳</span>
            <p>Every great experience starts with a first draft.</p>
          </div>
          <div className="sidebar__environment">
            <span className="status-dot" />
            Local demo environment
          </div>
        </div>
      </aside>

      <main className="studio-main">
        <header className="topbar">
          <div className="topbar__breadcrumb">
            <span>Workspace</span>
            <span aria-hidden="true">/</span>
            <span className="topbar__current">Demo studio</span>
          </div>
          <div className="topbar__right">
            <span className="topbar__private">
              <span aria-hidden="true">◉</span> Private workspace
            </span>
            <BrandMark compact />
          </div>
        </header>
        <Outlet />
        <footer className="studio-footer">
          <span>Thoughtfully made by NKSKILLEDGE</span>
          <span>Build something memorable <span aria-hidden="true">↗</span></span>
        </footer>
      </main>
    </div>
  );
}

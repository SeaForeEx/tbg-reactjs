/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link passHref href="/">
          <a className="navbar-brand" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
            HOME
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link passHref href="/game-class">
                <a className="nav-link">
                  Play Class-Based Game
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/game-function">
                <a className="nav-link">
                  Play Function Game
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/game-fancy">
                <a className="nav-link">
                  Play Fancy Game
                </a>
              </Link>
            </li>
            <button type="button" className="btn btn-danger" onClick={signOut}>
              Sign Out
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

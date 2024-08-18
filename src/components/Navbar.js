"use client";
import React from "react";
import Link from "next/link";
import {
  Typography,
  Dropdown,
  MenuButton,
  Menu,
  MenuItem,
  Skeleton,
} from "@mui/joy";
import { getUser } from "@/lib/authHandlers";
import jwt from "jsonwebtoken";

import { handleSignout } from "@/lib/authHandlers";
import { useState, useEffect } from "react";

//Icons
import { Person } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LinkIcon from "@mui/icons-material/Link";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export function Navbar() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setUser(getUser());
    setLoading(false);
  }, []);

  return (
    <nav
      className={`w-full h-[100px] sm:h-[8vh] flex items-center px-5 md:px-10 justify-between bg-white drop-shadow-lg`}
    >
      <Link
        name="nav-logo"
        className="font-semibold text-[.75em] md:text-[1.2em]"
        href="/"
      >
        <Typography>
          <i className="fa-solid fa-link"></i> URL Shortener
        </Typography>
      </Link>

      <div
        name="nav-right"
        className="flex items-center gap-4 md:gap-10 text-[.75em] md:text-[.8em]"
      >
        {!loading && (
          <>
            {user ? (
              <Dropdown>
                <MenuButton
                  variant="plain"
                  endDecorator={<ArrowDropDownIcon />}
                >
                  <Person color="grey" />
                </MenuButton>
                <Menu>
                  <MenuItem disabled={true}>
                    <Person />
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      window.location.assign("/dashboard");
                    }}
                  >
                    <DashboardIcon />
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      window.location.assign("/dashboard/links");
                    }}
                  >
                    <LinkIcon />
                    My Links
                  </MenuItem>

                  <MenuItem
                    disabled={true}
                    onClick={() => {
                      window.location.assign("/settings");
                    }}
                  >
                    <SettingsIcon />
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleSignout}>
                    <ExitToAppIcon />
                    Sign Out
                  </MenuItem>
                </Menu>
              </Dropdown>
            ) : (
              <>
                <Link
                  className="hover:text-gray-600 transition-all duration-200"
                  href="/register"
                >
                  <Typography fontWeight={500}>Register</Typography>
                </Link>
                <Link
                  className="hover:text-gray-600 transition-all duration-200"
                  href="/login"
                >
                  <Typography fontWeight={500}>Login</Typography>
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

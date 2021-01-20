import React, { useCallback, useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoSearchOutline } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import CheeseburgerMenu from "cheeseburger-menu";

// CSS
import "./styles.css";

// Assets
import { categories } from "../../assets/categories";

const NavBar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("Home");

  const history = useHistory();
  const title = useSelector((state) => state.navbar.title);

  useEffect(() => {
    const tempTitle = history.location.pathname === "/" ? "Home" : title;
    setPageTitle(tempTitle);
  }, [history.location.pathname, title]);

  const handleSearch = useCallback(() => {
    setIsSearching(!isSearching);
  }, [isSearching]);

  const handleOnTextChange = useCallback(
    (event) => {
      // eslint-disable-next-line no-console
      console.log(event?.target?.value);
      if (event?.target?.value && event?.target?.value !== "") {
        history.push(`/list/${event?.target?.value}/false`);
      } else {
        history.push(`/`);
      }
    },
    [history]
  );

  const handleOpenMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const handleNavigateTo = useCallback(
    (route) => {
      history.push(route);
      handleOpenMenu();
    },
    [handleOpenMenu, history]
  );

  return (
    <>
      <div className="navBarContent">
        {history.location.pathname.indexOf("/details/") !== 0 ? (
          <button onClick={handleOpenMenu}>
            <AiOutlineMenu size={24} />
          </button>
        ) : (
          <button onClick={() => history.goBack()}>
            <BsArrowLeft size={24} />
          </button>
        )}
        {isSearching && <input type="text" onChange={handleOnTextChange} />}
        {!isSearching && <p>{pageTitle}</p>}
        <button onClick={() => handleSearch()}>
          <IoSearchOutline size={24} />
        </button>
      </div>
      <CheeseburgerMenu isOpen={isMenuOpen} closeCallback={handleOpenMenu}>
        <div className="menu">
          <ul>
            <li>
              <button onClick={() => handleNavigateTo("/")}>Home</button>
            </li>
            {categories.map((cat) => (
              <li key={cat}>
                <button onClick={() => handleNavigateTo(`/list/${cat}/true`)}>
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </CheeseburgerMenu>
    </>
  );
};

export default withRouter(NavBar);

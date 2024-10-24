"use client";

import { SearchIcon } from "@/icons/SearchIcon";
import styles from "./Search.module.css";
import { useEffect, useRef, useState } from "react";
import { Button } from "../Button/Button";

export default function Search() {
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkFocus = () => {
      if (document.activeElement === inputRef.current) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    document.addEventListener("focusin", checkFocus);
    document.addEventListener("focusout", checkFocus);

    return () => {
      document.removeEventListener("focusin", checkFocus);
      document.removeEventListener("focusout", checkFocus);
    };
  }, []);

  return (
    <div className={`${styles.inputContainer} ${isActive && styles.active}`}>
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
      <form action="/" className={styles.form}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Digite o que você procura"
          action="/"
        />
        <Button>Buscar</Button>
      </form>
    </div>
  );
}

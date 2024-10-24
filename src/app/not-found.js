"use client";

import { useEffect } from "react";
import styles from "./error.module.css";
import { ArrowBack } from "@/icons/ArrowBack";

import Image from "next/image";
import Link from "next/link";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <Image
        src="/assets/404.png"
        alt="Logo da Code Connect"
        width={657}
        height={367}
      />

      <h2 className={styles.errorTitle}>OPS! Página não encontrada.</h2>
      <p className={styles.errorDescription}>
        Você pode voltar ao feed e continuar buscando projetos incríveis!
      </p>

      <Link href="/">
        Voltar ao feed <ArrowBack />
      </Link>
    </div>
  );
}

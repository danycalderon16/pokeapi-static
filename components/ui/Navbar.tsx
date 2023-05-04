import React from "react";
import Image from "next/image";
import { Spacer, Text, useTheme } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const handlerNav = () => {
    router.push("/");
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Icono de la app"
        width={70}
        height={70}
      />
      <Link
        href={"/"}
        passHref
        style={{ display: "flex", justifyContent: "start" }}
      >
        <Text color="white" h2>
          P
        </Text>
        <Text style={{ cursor: "pointer" }} color="white" h3>
          okémon
        </Text>
      </Link>
      <Spacer css={{ flex: 1 }} />
      <Link href={"/favorites"}>
        <Text color="white">Favoritos</Text>
      </Link>
    </div>
  );
};

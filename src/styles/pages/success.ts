import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "calc(100vh - 15rem)",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
    marginBottom: "4rem",
  },

  p: {
    fontSize: "$xs",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "5rem",
    color: "$green500",
    fontWeight: "bold",
    fontSize: "$lg",
    textDecoration: "none",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 130,
  height: 145,
  borderRadius: 8,
  padding: "0.25rem",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

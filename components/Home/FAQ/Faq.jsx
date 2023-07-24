"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box, Container } from "@mui/material";

const Faq = () => {
  const CustomExpandIcons = () => {
    return (
      <div>
        <div className="expandIcon">
          <AddIcon sx={{ color: "rgba(0, 0, 0, 0.3)" }} />
        </div>
        <div className="removeIcon">
          <RemoveIcon />
        </div>
      </div>
    );
  };

  const faqData = [
    {
      item: "Comment fonctionne le service de location de vidéoprojecteurs de CineStation ?",
      details:
        "Chez CineStation, nous proposons un service de location mensuelle de vidéoprojecteurs de haute qualité, avec des abonnements mensuels incluant les plateformes de streaming populaires.Vous pouvez vous abonner en ligne en quelques clics et notre équipe se chargera de vous livrer rapidement votre vidéoprojecteur.",
    },
    {
      item: "Qu'est-ce qui est inclus dans l'abonnement mensuel ?",
      details:
        "Chez CineStation, nous proposons un service de location mensuelle de vidéoprojecteurs de haute qualité, avec des abonnements mensuels incluant les plateformes de streaming populaires.Vous pouvez vous abonner en ligne en quelques clics et notre équipe se chargera de vous livrer rapidement votre vidéoprojecteur.",
    },
    {
      item: "Comment puis-je résilier mon abonnement ?",
      details:
        "Chez CineStation, nous proposons un service de location mensuelle de vidéoprojecteurs de haute qualité, avec des abonnements mensuels incluant les plateformes de streaming populaires.Vous pouvez vous abonner en ligne en quelques clics et notre équipe se chargera de vous livrer rapidement votre vidéoprojecteur.",
    },
    {
      item: "Que se passe-t-il si le vidéoprojecteur tombe en panne ?",
      details:
        "Chez CineStation, nous proposons un service de location mensuelle de vidéoprojecteurs de haute qualité, avec des abonnements mensuels incluant les plateformes de streaming populaires.Vous pouvez vous abonner en ligne en quelques clics et notre équipe se chargera de vous livrer rapidement votre vidéoprojecteur.",
    },
    {
      item: " Comment puis-je contacter le support clientèle de CineStation ?",
      details:
        "Chez CineStation, nous proposons un service de location mensuelle de vidéoprojecteurs de haute qualité, avec des abonnements mensuels incluant les plateformes de streaming populaires.Vous pouvez vous abonner en ligne en quelques clics et notre équipe se chargera de vous livrer rapidement votre vidéoprojecteur.",
    },
  ];

  return (
    <Container
      sx={{
        py: { sm: "90px", xs: "30px" },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: {
              xs: "25px",
              lg: "38px",
            },
            textAlign: "center",
            fontWeight: "700",
            mb: {
              xs: "10px",
              lg: "20px",
            },
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "16px",
              lg: "20px",
            },
            textAlign: "center",
          }}
        >
          PriorityShips Auto Transport{"'"}s company guide to quick, easy and
          safe auto shipping
        </Typography>
      </Box>

      <Box
        sx={{
          mt: "40px",
          marginBottom: {
            xs: "2rem",
            md: "4rem",
          },
        }}
      >
        <Box>
          {faqData.map((data, i) => (
            <Accordion
              key={i}
              sx={{
                boxShadow: "none",
                border: "none",
                // border: "1px solid #ddd",
                // borderRadius: "10px",
                my: "10px",
                "& .Mui-expanded": {
                  "& .expandIcon": {
                    display: "none",
                  },
                  "& .removeIcon": {
                    display: "block",
                    "& svg": {
                      color: "#000000",
                    },
                  },
                },
              }}
            >
              <AccordionSummary
                expandIcon={<CustomExpandIcons />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  "& .removeIcon": {
                    display: "none",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: "16px",
                      md: "20px",
                    },
                  }}
                >
                  {data.item}
                </Typography>
              </AccordionSummary>

              <AccordionDetails key={i}>
                <Typography
                  sx={{
                    color: "#767676",
                    fontWeight: "600",
                    fontSize: {
                      xs: "12px",
                      md: "16px",
                    },
                  }}
                >
                  {data.details}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Faq;

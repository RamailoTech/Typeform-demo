import React, { useContext, useEffect, useRef } from "react";
import { Grid, Box, Button } from "@mui/material";
import flower from "../assets/images/flower.jpg";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormContext from "../context/form/FormContext";
import { Link, useNavigate } from "react-router-dom";
import InputRenderer from "./InputRenderer";

export const Formpage = ({ question }) => {
  const {
    visiblePageNumber,

    pageLength,

    navigateNext,
  } = useContext(FormContext);
  const inputref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputref.current) {
      inputref.current.focus();
    }
  }, [inputref, question]);
  useEffect(() => {
    const handlelistner = (event) => {
      if (event.key === "Enter") {
        if (pageLength === visiblePageNumber) {
          return navigate("/typeform/result");
        }
        navigateNext();
      }
    };
    document.addEventListener("keydown", handlelistner);
    return () => {
      document.removeEventListener("keydown", handlelistner);
    };
  }, [navigateNext, navigate, pageLength, visiblePageNumber]);

  const RenderForm = (question) => {
    return (
      <>
        <div className="transition-ease-in-out">
          <Grid container spacing={0}>
            <Grid item xs={6} className="wrapper-grid1">
              <Box className="box-grid">
                <p className="grid-question">
                  <span className="question-number">{visiblePageNumber}</span>
                  <ArrowForwardIcon
                    color="primary"
                    sx={{ fontSize: { md: "20px" } }}
                  />
                  {question?.question}
                </p>
                <InputRenderer question={question} />

                <div>
                  {pageLength === visiblePageNumber ? (
                    <Link
                      to="/typeform/result"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="contained" className="grid-button">
                        Submit
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="contained"
                      className="grid-button"
                      endIcon={
                        <CheckIcon
                          sx={{
                            fontSize: { lg: "large" },
                            marginLeft: { md: "-8px", lg: "-2px" },
                          }}
                        />
                      }
                      onClick={() => navigateNext()}
                    >
                      OK
                    </Button>
                  )}
                </div>
              </Box>
            </Grid>
            <Grid item xs={6} className="wrapper-grid2">
              <img src={flower} alt="flower" />
            </Grid>
          </Grid>
        </div>
      </>
    );
  };

  return <>{RenderForm(question)}</>;
};

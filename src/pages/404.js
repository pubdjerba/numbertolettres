import * as React from "react"
import { Button, Container, Typography, Box, Stack } from "@mui/material"
import { Link } from "gatsby"
const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Stack>
          <Box paddingBottom={3}>
            <Typography align="center" variant="h1">
              404
            </Typography>

            <Typography align="center" variant="h6">
              La page que vous cherchez n'existe pas.
            </Typography>
          </Box>
          <Button component={Link} to={"/"} variant="contained">
            Accueil
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default NotFoundPage

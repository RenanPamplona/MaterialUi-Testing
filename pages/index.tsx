import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";

const Index = () => {
  return (
    <Box
      sx={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        color: "white",
        fontFamily: "IBM Plex Sans",
        fontWeight: 500,
        bgcolor: "#001E3C",
      }}
    >
      <Box
        sx={{
          bgcolor: "#0A1929",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { sm: "space-between" },
          alignItems: "center",
          p: 2,
          gap: 2,
          px: { lg: 30 },
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Company Name
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifySelf: { md: "end" } }}>
          <Link>Features</Link>
          <Link>Enterprise</Link>
          <Link>Support</Link>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none", fontWeight: 700 }}
          >
            Register
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{ textTransform: "none", fontWeight: 700 }}
          >
            Login
          </Button>
        </Box>
      </Box>
      <Container
        maxWidth="md"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
          py: 7,
        }}
      >
        <Typography variant="h3" fontWeight={700}>
          Pricing
        </Typography>
        <Typography
          textAlign="center"
          variant="h6"
          fontWeight={600}
          color="#B2BAC2"
          maxWidth={600}
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. {"It's"} built with default MUI components with
          little customization.
        </Typography>

        <Grid container spacing={5}>
          <Grid item sx={{ width: "100%" }} xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#0A1929", color: "#fff", borderRadius: 3 }}>
              <CardHeader
                sx={{ bgcolor: "#3E5060" }}
                title={
                  <Typography
                    fontWeight={700}
                    textAlign="center"
                    color="#66B2FF"
                    variant="h5"
                  >
                    Free
                  </Typography>
                }
              />

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "end" }}>
                  <Typography variant="h3" fontWeight={600}>
                    $0
                  </Typography>
                  <Typography variant="h6" color="#B2BAC2" fontWeight={700}>
                    /mo
                  </Typography>
                </Box>
                <Box sx={{ fontSize: 18, textAlign: "center" }}>
                  <p>10 users included</p>
                  <p>2 GB of storage</p>
                  <p>Help center access</p>
                  <p>Email support</p>
                </Box>
              </CardContent>
              <CardActions sx={{ width: "100%" }}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    textTransform: "none",
                    fontWeight: 700,
                    borderRadius: 3,
                  }}
                >
                  Sign up for free
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sx={{ width: "100%" }} xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#0A1929", color: "#fff", borderRadius: 3 }}>
              <CardHeader
                sx={{ bgcolor: "#3E5060", position: "relative" }}
                title={
                  <>
                    <Typography
                      fontWeight={700}
                      textAlign="center"
                      color="#66B2FF"
                      variant="h5"
                    >
                      Pro
                    </Typography>
                    <Typography textAlign="center" color="#B2BAC2">
                      Most Popular
                    </Typography>
                    <Box sx={{ position: "absolute", top: 10, right: 10 }}>
                      <FontAwesomeIcon icon={faStar} width={30} height={30} />
                    </Box>
                  </>
                }
              />

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "end" }}>
                  <Typography variant="h3" fontWeight={600}>
                    $15
                  </Typography>
                  <Typography variant="h6" color="#B2BAC2" fontWeight={700}>
                    /mo
                  </Typography>
                </Box>
                <Box sx={{ fontSize: 18, textAlign: "center" }}>
                  <p>20 users included</p>
                  <p>10 GB of storage</p>
                  <p>Help center access</p>
                  <p>Priority Email support</p>
                </Box>
              </CardContent>
              <CardActions sx={{ width: "100%" }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    textTransform: "none",
                    fontWeight: 700,
                    borderRadius: 3,
                  }}
                >
                  Get Started
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sx={{ width: "100%" }} xs={12} md={4}>
            <Card sx={{ bgcolor: "#0A1929", color: "#fff", borderRadius: 3 }}>
              <CardHeader
                sx={{ bgcolor: "#3E5060" }}
                title={
                  <Typography
                    fontWeight={700}
                    textAlign="center"
                    color="#66B2FF"
                    variant="h5"
                  >
                    Enterprise
                  </Typography>
                }
              />

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "end" }}>
                  <Typography variant="h3" fontWeight={600}>
                    $30
                  </Typography>
                  <Typography variant="h6" color="#B2BAC2" fontWeight={700}>
                    /mo
                  </Typography>
                </Box>
                <Box sx={{ fontSize: 18, textAlign: "center" }}>
                  <p>50 users included</p>
                  <p>30 GB of storage</p>
                  <p>Help center access</p>
                  <p>Phone & Email support</p>
                </Box>
              </CardContent>
              <CardActions sx={{ width: "100%" }}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    textTransform: "none",
                    fontWeight: 700,
                    borderRadius: 3,
                  }}
                >
                  Contact us
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", width: "100vw" }} />

        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Company
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                underline="hover"
                color="#B2BAC2"
                fontSize={18}
                fontWeight={700}
              >
                Team
              </Link>
              <Link
                underline="hover"
                color="#B2BAC2"
                fontSize={18}
                fontWeight={700}
              >
                Hisory
              </Link>
              <Link
                underline="hover"
                color="#B2BAC2"
                fontSize={18}
                fontWeight={700}
              >
                Contact us
              </Link>
              <Link
                underline="hover"
                color="#B2BAC2"
                fontSize={18}
                fontWeight={700}
              >
                Locations
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Features
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                underline="hover"
                color="#B2BAC2"
                fontSize={18}
                fontWeight={700}
              >
                Cool stuff
              </Link>
              <Link
                underline="hover"
                color="#B2BAC2"
                fontSize={18}
                fontWeight={700}
              >
                Random feature
              </Link>
              <Link
                underline="hover"
                color="#B2BAC2"
                fontSize={18}
                fontWeight={700}
              >
                Team feature
              </Link>
              <Link
                underline="hover"
                color="#B2BAC2"
                fontSize={18}
                fontWeight={700}
              >
                Developer stuff
              </Link>
              <Link
                underline="hover"
                color="#B2BAC2"
                fontSize={18}
                fontWeight={700}
              >
                Another one
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Resources
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                underline="hover"
                color="#B2BAC2"
                fontSize={18}
                fontWeight={700}
              >
                Resource
              </Link>
              <Link
                underline="hover"
                color="#B2BAC2"
                fontSize={18}
                fontWeight={700}
              >
                Resource name
              </Link>
              <Link
                underline="hover"
                color="#B2BAC2"
                fontSize={18}
                fontWeight={700}
              >
                Another resource
              </Link>
              <Link
                underline="hover"
                color="#B2BAC2"
                fontSize={18}
                fontWeight={700}
              >
                Final resource
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Legal
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                underline="hover"
                color="#B2BAC2"
                fontSize={18}
                fontWeight={700}
              >
                Privacy Policy
              </Link>
              <Link
                underline="hover"
                color="#B2BAC2"
                fontSize={18}
                fontWeight={700}
              >
                Terms of use
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Typography mt={4} variant="subtitle2" color="#B2BAC2">
          Copyright © <strong>Your Website</strong> 2023.
        </Typography>
      </Container>
    </Box>
  );
};

export default Index;

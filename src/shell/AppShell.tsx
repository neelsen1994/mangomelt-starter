import { AppBar, Toolbar, Box, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{
          background: '#FF5722',
          borderBottom: 'none',
        }}
      >
        <Toolbar
          sx={{
            gap: 4,
            paddingX: { xs: 2, md: 4 },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src="https://cdn.builder.io/api/v1/image/assets%2F9c4527e11c674a5cb0ce0f937d4a12e5%2F52c32e88303947eab9b39366fc8aef99?format=webp&width=800"
            alt="Mango Melt Logo"
            sx={{
              height: 50,
              width: 'auto',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />

          <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 1 }}>
            <Button
              component={RouterLink}
              to="/"
              sx={{
                color: '#1a1a1a',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  width: 0,
                  height: 2,
                  background: 'linear-gradient(90deg, #FF006E, #3A86FF)',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/events"
              sx={{
                color: '#1a1a1a',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  width: 0,
                  height: 2,
                  background: 'linear-gradient(90deg, #FF006E, #3A86FF)',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Events
            </Button>
            <Button
              component={RouterLink}
              to="/workshops"
              sx={{
                color: '#1a1a1a',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  width: 0,
                  height: 2,
                  background: 'linear-gradient(90deg, #FF006E, #3A86FF)',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Workshops
            </Button>
            <Button
              component={RouterLink}
              to="/pricing"
              sx={{
                color: '#1a1a1a',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  width: 0,
                  height: 2,
                  background: 'linear-gradient(90deg, #FF006E, #3A86FF)',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Pricing
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: '100%' }}>
        {children}
      </Box>
    </Box>
  )
}

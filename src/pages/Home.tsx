import { useState, useEffect } from 'react'
import { Box, Typography, Button, Stack, Card } from '@mui/material'

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const carouselImages = [
    '/myart.jpg',
    '/myart2.jpg',
    '/myart3.jpg',
    '/myart4.jpg',
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {/* Hero Section with Parallax */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #FF006E 0%, #8338EC 25%, #3A86FF 50%, #FB5607 75%, #FF006E 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
          position: 'relative',
          overflow: 'hidden',
          '@keyframes gradient': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }}
      >
        {/* Artistic background image with blend mode */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F9c4527e11c674a5cb0ce0f937d4a12e5%2Fdcc21dbaeb7b47988142aa7f4156ec86?format=webp&width=800)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
            mixBlendMode: 'overlay',
            zIndex: 0,
            animation: 'slideIn 20s ease-in-out infinite',
            '@keyframes slideIn': {
              '0%, 100%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.05)' },
            },
          }}
        />

        {/* Fluid shapes background */}
        <Box
          sx={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            top: '-100px',
            left: '-100px',
            animation: 'float 6s ease-in-out infinite',
            zIndex: 0,
            '@keyframes float': {
              '0%, 100%': { transform: 'translate(0, 0)' },
              '50%': { transform: 'translate(20px, 20px)' },
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '50%',
            filter: 'blur(50px)',
            bottom: '-150px',
            right: '-150px',
            animation: 'float 8s ease-in-out infinite reverse',
            zIndex: 0,
          }}
        />

        {/* Artistic image accent on the right side */}
        <Box
          sx={{
            position: 'absolute',
            right: { xs: '-20%', sm: '-15%', md: '-10%', lg: '5%' },
            bottom: { xs: '-10%', md: '0%' },
            width: { xs: '350px', sm: '450px', md: '550px' },
            height: { xs: '350px', sm: '450px', md: '550px' },
            backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F9c4527e11c674a5cb0ce0f937d4a12e5%2Fdcc21dbaeb7b47988142aa7f4156ec86?format=webp&width=800)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '50%',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            opacity: 0.8,
            zIndex: 1,
            animation: 'pulse-float 4s ease-in-out infinite',
            '@keyframes pulse-float': {
              '0%, 100%': { transform: 'translateY(0px) scale(1)' },
              '50%': { transform: 'translateY(-10px) scale(1.02)' },
            },
          }}
        />

        {/* Animated Mango Logo with Scroll Effect */}
        {scrollY < window.innerHeight && (
          <Box
            sx={{
              position: 'fixed',
              zIndex: 1.5,
              pointerEvents: 'none',
              left: `calc(20px + ${(scrollY / window.innerHeight) * 40}%)`,
              top: `calc(100vh - 150px - ${(scrollY / window.innerHeight) * 35}vh)`,
              transform: `scale(${1 + (scrollY / window.innerHeight) * 2}) rotate(${(scrollY / window.innerHeight) * 360}deg)`,
              opacity: Math.max(0, 1 - scrollY / window.innerHeight * 1.3),
              transition: 'none',
            }}
          >
            <Box
              component="img"
              src="https://cdn.builder.io/api/v1/image/assets%2F9c4527e11c674a5cb0ce0f937d4a12e5%2F4ec8c88b13824600a43f07d4847a1b61?format=webp&width=800"
              alt="Mango Melt Mango"
              sx={{
                height: { xs: '120px', sm: '150px', md: '180px' },
                width: 'auto',
                filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))',
                display: 'block',
              }}
            />
          </Box>
        )}

        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              color: 'white',
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              marginBottom: 2,
            }}
          >
            Welcome to the garden
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '1rem', md: '1.5rem' },
              fontWeight: 300,
            }}
          >
            A space for creative expression and artistic connection
          </Typography>
        </Box>
      </Box>

      {/* Description Section */}
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: '60px 20px', md: '100px 40px' },
          background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: 3,
            fontSize: { xs: '1.5rem', md: '2.5rem' },
            lineHeight: 1.4,
          }}
        >
          Promoting local art and connecting artists, venues, and communities.
        </Typography>
        <Box
          sx={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #FF006E, #3A86FF)',
            borderRadius: '2px',
            margin: '20px auto 40px',
          }}
        />
        <Typography
          variant="body1"
          sx={{
            maxWidth: 800,
            color: '#666',
            fontSize: '1.1rem',
            lineHeight: 1.8,
          }}
        >
          Discover a vibrant community where artists showcase their work, venues find talented performers, and art enthusiasts connect with creators. Join us in celebrating local art and building meaningful relationships through creative expression.
        </Typography>
      </Box>

      {/* Carousel Section */}
      <Box
        sx={{
          minHeight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: '60px 20px', md: '100px 40px' },
          background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 50%, #f5f5f5 100%)',
          width: '100%',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: 5,
            fontSize: { xs: '1.5rem', md: '2.5rem' },
          }}
        >
          Featured Artworks
        </Typography>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '600px',
            height: '500px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
            marginBottom: 4,
          }}
        >
          {carouselImages.map((image, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: activeSlide === index ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out',
              }}
            />
          ))}

          {/* Carousel controls */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
            }}
          >
            {carouselImages.map((_, index) => (
              <Box
                key={index}
                onClick={() => setActiveSlide(index)}
                sx={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: activeSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'white',
                  },
                }}
              />
            ))}
          </Stack>
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: '#666',
            fontSize: '1.1rem',
            textAlign: 'center',
          }}
        >
          Explore stunning artworks from talented local artists
        </Typography>
      </Box>

      {/* Coming Soon Section */}
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: '40px 20px', md: '80px 40px' },
          background: 'linear-gradient(135deg, #FF006E 0%, #8338EC 25%, #3A86FF 50%, #FB5607 75%, #FF006E 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: 'white',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              marginBottom: 2,
            }}
          >
            🎨 Coming Soon!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.2rem',
              fontWeight: 300,
              marginBottom: 3,
            }}
          >
            Exciting features and experiences are on their way
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: 600,
              fontSize: '1.1rem',
              margin: '0 auto',
            }}
          >
            We're working hard to bring you an enhanced platform with more features, better community tools, and innovative ways to celebrate local art.
          </Typography>
        </Box>
      </Box>

      {/* Contact Section */}
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: '40px 20px', md: '80px 40px' },
          background: '#ffffff',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: 2,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          Get In Touch
        </Typography>
        <Box
          sx={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #FF006E, #3A86FF)',
            borderRadius: '2px',
            margin: '20px auto 40px',
          }}
        />
        <Typography
          variant="body1"
          sx={{
            maxWidth: 600,
            color: '#666',
            fontSize: '1.1rem',
            textAlign: 'center',
            marginBottom: 5,
            lineHeight: 1.8,
          }}
        >
          Have questions or want to collaborate? We'd love to hear from you! Reach out to us through email or follow our social media channels.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(135deg, #FF006E, #3A86FF)',
              color: 'white',
              padding: '12px 40px',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '50px',
              '&:hover': {
                background: 'linear-gradient(135deg, #E60058, #2E75D8)',
              },
            }}
            href="mailto:hello@mangomelt.xyz"
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#FF006E',
              color: '#FF006E',
              padding: '12px 40px',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '50px',
              border: '2px solid',
              '&:hover': {
                background: 'rgba(255, 0, 110, 0.05)',
                borderColor: '#FF006E',
              },
            }}
            href="https://www.instagram.com/mangomeltart"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on Instagram
          </Button>
        </Stack>

        <Typography
          variant="body2"
          sx={{
            color: '#999',
            marginTop: 6,
            fontSize: '0.95rem',
          }}
        >
          © 2024 Mango Melt Art Platform. All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}

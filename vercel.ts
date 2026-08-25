// const backendUrl = process.env.REACT_APP_BACKEND_URL

// if (!backendUrl) {
//   throw new Error('BACKEND_URL is not configured')
// }

// export const config = {
//   rewrites: [
//     {
//       source: '/api/:path*',
//       destination: `${backendUrl.replace(/\/$/, '')}/api/:path*`,
//     },
//     {
//       source: '/(.*)',
//       destination: '/index.html',
//     },
//   ],
// }